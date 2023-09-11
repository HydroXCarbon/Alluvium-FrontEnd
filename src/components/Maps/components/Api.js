import React, { useState, useEffect } from "react";
import { useJsApiLoader, GoogleMap, Marker, Rectangle } from '@react-google-maps/api';
import Style from '../../../Pages/Map/Maps.module.css';
import Selectbutton from './select';
import { Button } from 'antd'

const defaultCenter = { lat: 13.7563, lng: 100.5018 };

function GoogleMapApp() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    const [selectedCoordinates, setSelectedCoordinates] = useState([]);
    const [rectangleBounds, setRectangleBounds] = useState(null);

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

    if (!isLoaded) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className={Style.MapContainer}>
            <div className={Style.MapControls}>
                <div className={Style.SelectButtoncontainer}>
                    <Selectbutton />
                </div>
                <GoogleMap
                    onClick={handleMapClick}
                    center={defaultCenter}
                    zoom={11}
                    mapContainerClassName={Style.MapContainer}
                    options={{ fullscreenControl: false }}
                >
                    {/* Render markers for selectedCoordinates */}
                    {selectedCoordinates.map((coordinate, index) => (
                        <Marker
                            key={index}
                            position={coordinate}
                            onClick={() => handleMarkerClick(coordinate)}
                        />
                    ))}
                    {rectangleBounds && (
                        <Rectangle bounds={rectangleBounds} />
                    )}
                </GoogleMap>
                <div className={Style.Buttoncontainer}>
                    <Button className={Style.Buttoncontainer}>

                    </Button>
                </div>
            </div>
        </div>
    );
}

export default GoogleMapApp;
