import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTours }) => {
  return (
    <section>
      <div className='title'>
        <h1>Our Tours</h1>
        <div className='underline'></div>
      </div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTours={removeTours} />;
      })}
    </section>
  );
};

export default Tours;
