// This file contains the neighborhood boundary data for Downtown San Diego
const neighborhoods = {
    "type": "FeatureCollection",
    "features": [
        // This is where you'll paste your converted GeoJSON data from the SANDAG shapefile
        // For now, here's a sample neighborhood so you can test the code:
        {
            "type": "Feature",
            "properties": {
                "name": "Gaslamp Quarter",
                "description": "Historic district in Downtown San Diego"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [-117.161, 32.710],
                    [-117.156, 32.710],
                    [-117.156, 32.715],
                    [-117.161, 32.715],
                    [-117.161, 32.710]
                ]]
            }
        }
        // You'll replace or add to this sample data with your actual neighborhood boundaries
    ]
};
