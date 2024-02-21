import React, { useEffect, useState } from "react";

interface PlaceData {
    id: number;
    place: string;
    desc: string;
    img: string; 
}


export const Place: React.FC = () => {
    const [placeData, setPlaceData] = useState<PlaceData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5001/places")
            .then((res) => res.json())
            .then((data: PlaceData[]) => {
                setPlaceData(data);
                
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="image-grid">
                    {placeData.slice(0, 6).map((place) => (
                        <div key={place.id} className="image-container">
                            <img src={place.img}  />
                            <div className="image-text">
                            <h3>{place.place}</h3>
                            <p>{place.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
