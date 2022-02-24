import React, { useEffect, useState } from "react";
import Loding from "./Loding";

import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loding, setLoding] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newtours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newtours);
  };
  const fetchData = async () => {
    setLoding(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoding(false);

      setTours(tours);
    } catch (error) {
      setLoding(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loding) {
    return (
      <main>
        <Loding />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <h1 className='title'>There are no tours </h1>
        <button className='btn' onClick={() => fetchData()}>
          Refresh
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
};

export default App;
