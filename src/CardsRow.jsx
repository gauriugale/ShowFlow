import React from 'react';
import './CardsRow.css';
import SwiperDemo from './SwipperD';

const CardsRow = () => {
  return (
    <>

    <SwiperDemo/>
    <h2><b>Enjoy your favourite movies now..!!!</b></h2>
    <div className="container mt-5 cards-container">
      <div className="card">
        <img src="public/1.jpg" alt="The Sabarmati Report" />
        <div className="card-body">
          <h3 className="card-title">The Sabarmati Report</h3>
          <p className="card-text">
            Thriller, Romance
          </p>
          <button className="card-button">Book</button>
        </div>
      </div>

      <div className="card">
        <img src="public/2.jpg" alt="Back in Action" />
        <div className="card-body">
          <h3 className="card-title">Back in Action</h3>
          <p className="card-text">
           Dark Romance, Horror
          </p>
          <button className="card-button">Book</button>
        </div>
      </div>

      <div className="card">
        <img src="public/3.jpg" alt="Bhool Bhulaiya 3" />
        <div className="card-body">
          <h3 className="card-title">Bhool Bhulaiya 3</h3>
          <p className="card-text">
           Not so Horror,No Comedy 
          </p>
          <button className="card-button">Book</button>
        </div>
      </div>

      <div className="card">
        <img src="public/4.jpg" alt="Siqandar ka Muqaddar" />
        <div className="card-body">
          <h3 className="card-title">Siqandar ka Maqaddar</h3>
          <p className="card-text">
            Action, Thriller
          </p>
          <button className="card-button">Book</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CardsRow;