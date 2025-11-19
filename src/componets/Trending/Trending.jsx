import React from "react";
import img1 from "../../assets/image1.webp";
import img2 from "../../assets/image2.webp";
import img3 from "../../assets/image3.webp";
import img4 from "../../assets/image4.webp";
import img5 from "../../assets/image5.webp";
import img6 from "../../assets/image6.webp";
import img7 from "../../assets/image7.webp";
import img8 from "../../assets/image8.webp";
import img9 from "../../assets/image9.webp";
import img10 from "../../assets/image10.webp";

function Trending() {
  const movies = [
    {
      id: 1,
      url: img1,
    },
    {
      id: 2,
      url: img2,
    },
    {
      id: 3,
      url: img3,
    },
    {
      id: 4,
      url: img4,
    },
    {
      id: 5,
      url: img5,
    },
    {
      id: 6,
      url: img6,
    },
    {
      id: 7,
      url: img7,
    },
    {
      id: 8,
      url: img8,
    },
    {
      id: 9,
      url: img9,
    },
    {
      id: 10,
      url: img10,
    },
  ];

  return (
    <div className="py-10">
      <div className="font-bold text-2xl ">
        Trending Now
      </div>

      <div className="flex gap-10 overflow-scroll hide-scrollbar ">
        {movies.map((movie, index) => {
          return (
            <div key={index} className="pt-5 relative">
              <img className="rounded-2xl min-w-[150px] " src={movie.url} alt="" />
              <div className="text-9xl font-bold absolute bottom-0 left-[-25px] text-stroke-white ">{movie.id}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trending;
