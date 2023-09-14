import React, { useState, useEffect } from "react";
import { useJsApiLoader, GoogleMap, Marker, Rectangle } from '@react-google-maps/api';
import Style from '../../../Pages/Map/Maps.module.css';
import Selectbutton from './select';
import { Button, Skeleton, message } from 'antd'
import useToken from '../../../hooks/useToken';
import { useNavigate } from 'react-router-dom';

import customPinIcon from '../../../assets/images/pin.png';

const defaultCenter = { lat: 13.7563, lng: 100.5018 };

let result;

function GoogleMapApp() {
    const { token } = useToken();
    const navigate = useNavigate();
    const [analyzing, setAnalyzing] = useState(false);
    const [selectedCoordinates, setSelectedCoordinates] = useState([]);
    const [rectangleBounds, setRectangleBounds] = useState(null);
    const [selectedBuildingType, setSelectedBuildingType] = useState(null);

    if (!token) {
        navigate('/');
    }
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    const handleBuildingTypeSelect = (value) => {
        setSelectedBuildingType(value);
      };

    const handleMarkerClick = (clickedCoordinate) => {
        setSelectedCoordinates((prevCoordinates) => {
            if (prevCoordinates.length === 1) {
                return [];
            }
            if (prevCoordinates[0] === clickedCoordinate) {
                return [prevCoordinates[1]];
            } else if (prevCoordinates[1] === clickedCoordinate) {
                return [prevCoordinates[0]];
            }
        });
    };

    const handleMapClick = (event) => {
        const clickedCoordinate = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        };

        setSelectedCoordinates((prevCoordinates) => {
            if (prevCoordinates.length === 0) {
                return [clickedCoordinate];
            } else if (prevCoordinates.length === 1) {
                return [prevCoordinates[0], clickedCoordinate];
            } else {
                return [clickedCoordinate];
            }
        });
    };

    useEffect(() => {
        if (isLoaded) {
            let bounds = {
                north: Math.max(0, 0),
                south: Math.min(0, 0),
                east: Math.max(0, 0),
                west: Math.min(0, 0),
            };
            setRectangleBounds(bounds);

            if (selectedCoordinates.length === 2) {
                bounds = {
                    north: Math.max(selectedCoordinates[0].lat, selectedCoordinates[1].lat),
                    south: Math.min(selectedCoordinates[0].lat, selectedCoordinates[1].lat),
                    east: Math.max(selectedCoordinates[0].lng, selectedCoordinates[1].lng),
                    west: Math.min(selectedCoordinates[0].lng, selectedCoordinates[1].lng),
                };
                setRectangleBounds(bounds);
            }
        }
    }, [isLoaded, selectedCoordinates]);

    const handleanalyzeClick = async () => {

        if (selectedCoordinates.length !== 2) {
            message.warning("Please select two coordinates for analysis.");
            return;
        }else if (!selectedBuildingType){
            message.warning("Please select type of building for analysis.");
            return;
        }

        try {
            setAnalyzing(true);

            const minLat = Math.min(selectedCoordinates[0].lat, selectedCoordinates[1].lat);
            const minLng = Math.min(selectedCoordinates[0].lng, selectedCoordinates[1].lng);
            const maxLat = Math.max(selectedCoordinates[0].lat, selectedCoordinates[1].lat);
            const maxLng = Math.max(selectedCoordinates[0].lng, selectedCoordinates[1].lng);

            const topLeftCoordinate = { lat: maxLat, lng: minLng };
            const bottomRightCoordinate = { lat: minLat, lng: maxLng };

            const requestData = [
                {
                    top: `${topLeftCoordinate.lat},${topLeftCoordinate.lng}`,
                    btm: `${bottomRightCoordinate.lat},${bottomRightCoordinate.lng}`,
                }
            ];

            const response = await fetch(`${process.env.REACT_APP_WEB_DOMAIN}/predict`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error("Analysis failed");
            }

            result = await response.json();
            console.log("Analysis result:", result);
            message.success("Analysis successful");
        } catch (error) {
            message.error("Analysis failed");
            console.error("Error during analysis:", error);
        } finally {
            setAnalyzing(false);
        }
    };

    if (!isLoaded) {
        return <Skeleton active />;
    }

    return (
        <div className={Style.MapContainer}>
                <div className={Style.SelectButtoncontainer} onSelect={handleBuildingTypeSelect}>
                    <Selectbutton />
                </div>
                <div className={Style.Buttoncontainer}>
                    <Button type="primary" onClick={handleanalyzeClick} disabled={analyzing}>
                        {analyzing ? "Analyzing..." : "Analyze"}
                    </Button>

                </div>
                <GoogleMap
                    onClick={handleMapClick}
                    center={defaultCenter}
                    zoom={11}
                    mapContainerClassName={Style.MapContainer}
                    options={{ fullscreenControl: false }}
                >
                    {selectedCoordinates.map((coordinate, index) => (
                        <Marker
                            key={index}
                            position={coordinate}
                            icon={{
                                url: customPinIcon,
                                scaledSize: new window.google.maps.Size(32, 32),
                            }}
                            onClick={() => handleMarkerClick(coordinate)}
                        />
                    ))}
                    {rectangleBounds && (
                        <Rectangle
                        bounds={rectangleBounds}
                        options={{
                            strokeColor: 'black', 
                            strokeOpacity: 0.8,     
                            strokeWeight: 2,      
                            fillColor: '#B8B8B8',  
                            fillOpacity: 0.35,    
                        }}
                    />
                    )}
                </GoogleMap>
        </div>
    );
}

export { GoogleMapApp, result };


