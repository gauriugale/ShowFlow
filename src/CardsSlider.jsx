import React from "react";
import "./CardsSlider.css";
import SwiperDemo from "./SwipperD";

const shows = [
  {
    title: "Broadway Nights",
    date: "January 25, 2025",
    venue: "Grand Theatre, City Center",
    image: "public/concert.jpg",
    description: "An enchanting musical journey with the best of Broadway hits."
  },
  {
    title: "Comedy Carnival",
    date: "February 10, 2025",
    venue: "Laugh Lounge, Downtown",
    image: "public/comedy.jpg",
    description: "An evening filled with laughter and fun with top comedians."
  },
  {
    title: "Symphony of Stars",
    date: "March 5, 2025",
    venue: "Orchestra Hall, Uptown",
    image: "public/stars.jpg",
    description: "A mesmerizing symphonic performance under the starlit sky."
  }
];

const CardsSlider = () => {
  return (
  <>
    <div className="cards-slider">
      <h2 className="slider-heading">Latest Shows in Town</h2>
      <div className="slider-container">
        {shows.map((show, index) => (
          <div key={index} className="card">
            <img src={show.image} alt={show.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{show.title}</h3>
              <p className="card-date">{show.date}</p>
              <p className="card-venue">{show.venue}</p>
              <p className="card-description">{show.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>



    <SwiperDemo/>
  
  </>
  );
};

export default CardsSlider;
