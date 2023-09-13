import React from 'react';
import Style from '../../../Pages/Map/Maps.module.css';

const normalDataset = [
    'Hospital',
    'Police station',
    'School',
    'University',
    'Bank',
    'Gasstation',
    'Fitness',
    'Market',
    'Pharmacy',
    'Restaurant',
    'Park',
];

function ResultCard({ data }) {
    const { score, advantage, topLeft, btmRight, nearLocations } = data;

    const isValidCoordinates = topLeft && btmRight && topLeft.includes(',') && btmRight.includes(',');
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const mapType = 'satellite';
    const size = '400x300';

    let centerPosition = null;
    let zoom = 15;

    if (isValidCoordinates) {
        const topLeftParts = topLeft.split(',');
        const btmRightParts = btmRight.split(',');

        if (topLeftParts.length === 2 && btmRightParts.length === 2) {
            const topLeftLat = parseFloat(topLeftParts[0]);
            const topLeftLon = parseFloat(topLeftParts[1]);
            const btmRightLat = parseFloat(btmRightParts[0]);
            const btmRightLon = parseFloat(btmRightParts[1]);

            const centerLat = (topLeftLat + btmRightLat) / 2;
            const centerLon = (topLeftLon + btmRightLon) / 2;

            centerPosition = `${centerLat},${centerLon}`;

            const latRad = Math.PI * centerLat / 180;
            const metersPerPixel = 156543.03392 * Math.cos(latRad) / Math.pow(2, zoom);
            const bounds = [
                { lat: topLeftLat, lon: topLeftLon },
                { lat: btmRightLat, lon: btmRightLon },
            ];
            const boundsWidth = Math.abs(bounds[1].lon - bounds[0].lon);
            const boundsHeight = Math.abs(bounds[1].lat - bounds[0].lat);
            const horizontalPixels = boundsWidth / metersPerPixel;
            const verticalPixels = boundsHeight / metersPerPixel;
            const maxPixels = Math.max(horizontalPixels, verticalPixels);

            zoom = Math.floor(Math.log2(400 / maxPixels)) - 3;
        }
    }

    const perimeterColor = '000000';
    const boundingBoxFillColor = '808080';

    const path = isValidCoordinates
        ? `color:0x${perimeterColor}|weight:2|fillcolor:0x${boundingBoxFillColor}|${topLeft}|${topLeft.split(',')[0]},${btmRight.split(',')[1]}|${btmRight}|${btmRight.split(',')[0]},${topLeft.split(',')[1]}|${topLeft}`
        : '';

    const advantageData = [];
    const disadvantageData = [];

    if (Array.isArray(advantage) && advantage.length > 0 && Array.isArray(nearLocations)) {
        advantage.forEach((value, index) => {
            if (value === 1 && nearLocations[index] && nearLocations[index].length > 0) {
                advantageData.push(
                    <div key={`advantage-${index}`}>
                        <p>{nearLocations[index][0].name}</p>
                    </div>
                );
            } else if (value === -1 && normalDataset[index]) {
                disadvantageData.push(
                    <div key={`disadvantage-${index}`}>
                        <p>{normalDataset[index]}</p>
                    </div>
                );
            }
        });
    }

    const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?size=${size}&maptype=${mapType}&path=${path}&center=${centerPosition}&zoom=${zoom}&key=${apiKey}`;

    return (
        <div className={Style.cardBlock}>
            <div className={Style.imageContainer}>
                <div className={Style.mapWrapper}>
                    <img src={staticMapUrl} alt="Static Map" className={Style.DownloadMap} />
                </div>
            </div>
            <div className={Style.dataContainer}>
                <div className={Style.scoreContainer}>
                    <h1>Score {(score * 100).toFixed(2)}%</h1>
                    <h2>Center Position</h2>
                    <p>
                        latitude: {centerPosition ? (
                            <>
                                {parseFloat(centerPosition.split(',')[0]).toFixed(6)}&deg; N
                            </>
                        ) : 'N/A'}
                    </p>
                    <p>
                        longitude: {centerPosition ? (
                            <>
                                {parseFloat(centerPosition.split(',')[1]).toFixed(6)}&deg; E
                            </>
                        ) : 'N/A'}
                    </p>
                </div>
                <div className={Style.advantagedisadvantagecontainer}>
                    <div className={Style.advantageData}>
                        <h2>Advantage:</h2>
                        {advantageData}
                    </div>
                    {disadvantageData && disadvantageData.length > 0 && (
                        <div className={Style.disadvantageData}>
                            <h2>Disadvantage:</h2>
                            {disadvantageData}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ResultCard;
