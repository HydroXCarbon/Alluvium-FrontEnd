import React, { useState, useRef, useEffect } from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import apikey from '../../Pages/Map/apikey';
import Style from '../../Pages/Map/Maps.module.css';

const BingMap = () => {
  const bingMapKey = apikey;
  const initialLatitude = 13.7563;
  const initialLongitude = 100.5018;

  const [mapEvents, setMapEvents] = useState([]);
  const [rectangle, setRectangle] = useState(null);
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);

  const mapRef = useRef(null);

  const handleMapClick = (event) => {
    // Add the click event to the events array
    setMapEvents([...mapEvents, event]);
  };

  useEffect(() => {
    if (mapEvents.length === 2) {
      // Two points have been selected, calculate the rectangle coordinates
      const [point1, point2] = mapEvents;
      const topLeft = {
        latitude: Math.max(point1.target.targetPoint.latitude, point2.target.targetPoint.latitude),
        longitude: Math.min(point1.target.targetPoint.longitude, point2.target.targetPoint.longitude),
      };
      const bottomRight = {
        latitude: Math.min(point1.target.targetPoint.latitude, point2.target.targetPoint.latitude),
        longitude: Math.max(point1.target.targetPoint.longitude, point2.target.targetPoint.longitude),
      };
      setRectangle({ topLeft, bottomRight });

      // Store the selected coordinates
      setSelectedCoordinates({ topLeft, bottomRight });

      // Clear the events array for the next selection
      setMapEvents([]);
    }
  }, [mapEvents]);

  useEffect(() => {
    if (selectedCoordinates) {
      // Draw the selected rectangle on the map
      const rectangleOptions = {
        locations: [
          [selectedCoordinates.topLeft.latitude, selectedCoordinates.topLeft.longitude],
          [selectedCoordinates.bottomRight.latitude, selectedCoordinates.bottomRight.longitude],
        ],
        option: { fillColor: 'rgba(0, 0, 255, 0.2)' },
      };
      mapRef.current.SetView({ bounds: rectangleOptions.locations, animate: true });
      mapRef.current.AddShape(rectangleOptions);
    }
  }, [selectedCoordinates]);

  return (
    <div className={Style.ResponsiveMap}>
      <ReactBingmaps
        ref={mapRef}
        bingmapKey={bingMapKey}
        center={[initialLatitude, initialLongitude]}
        zoom={9}
        onClick={handleMapClick}
      />
      {selectedCoordinates && (
        <div>
          <p>Selected Rectangle Coordinates:</p>
          <p>Top Left Latitude: {selectedCoordinates.topLeft.latitude}</p>
          <p>Top Left Longitude: {selectedCoordinates.topLeft.longitude}</p>
          <p>Bottom Right Latitude: {selectedCoordinates.bottomRight.latitude}</p>
          <p>Bottom Right Longitude: {selectedCoordinates.bottomRight.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default BingMap;
