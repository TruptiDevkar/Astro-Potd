import React, { useState, useEffect } from "react";

function Hero() {
  const apiKey = "anVxHhVGRAfDrh89SFSAmUz7zVv8haK2foY5fsvB";
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNASAData() {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setApodData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchNASAData();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center flex-col py-10 ">
      {loading ? (
        <span className="loading loading-infinity loading-lg"></span>
      ) : (
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-[80vw] border border-primary">
          <figure>
            <img
              src={apodData.url}
              alt={apodData.title}
              className="object-cover h-full  "
            />
          </figure>
          <div className="card-body lg:max-w-[50%] max-w-full ">
            <h2 className="card-title font-bold text-2xl">{apodData.title}</h2>
            <p>{apodData.explanation}</p>
            <div className="card-actions justify-end">
              <a
                href={apodData.hdurl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View HD Image
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
