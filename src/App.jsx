import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const rawData = [
    {
      id: 1,
      name: "King Shit",
      artist: "Shubh",
      image: "https://i1.sndcdn.com/artworks-eSexYew2ROxq-0-t500x500.jpg",
      fav: false,
    },
    {
      id: 2,
      name: "Magic",
      artist: "Diljit Doshan",
      image:
        "https://www.pagalworld.online/GpE34Kg9Gq/113821/152292-naina-from-crew-mp3-song-300.jpg",
      fav: false,
    },
    {
      id: 3,
      name: "One Love",
      artist: "Shubh",
      image:
        "https://www.pagalworld.online/GpE34Kg9Gq/113801/152087-cheques-shubh-mp3-song-300.jpg",
      fav: false,
    },
    {
      id: 4,
      name: "Still Rollin",
      artist: "Shubh",
      image:
        "https://source.boomplaymusic.com/group10/M00/12/14/e6fce630e11f4cd094ce104e1cc9ec27_464_464.jpg",
      fav: false,
    },
    {
      id: 5,
      name: "Rainbow",
      artist: "Kacey Musgraves",
      image:
        "https://upload.wikimedia.org/wikipedia/en/7/71/KaceyMusgravesRainbow.jpg",
      fav: false,
    },
    {
      id: 6,
      name: "Bohemian Rhapsody",
      artist: "Queen",
      image:
        "https://m.media-amazon.com/images/I/81wjDLxQffL._AC_UF1000,1000_QL80_.jpg",
      fav: false,
    },
  ];
  const [data, setdata] = useState(rawData);

  const handleClick = (id) => {
    setdata((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            fav: !item.fav,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <div className="w-screen h-screen px-52 bg-zinc-100 ">
        <Navbar value={data} />
        <div className="flex-wrap flex gap-4">
          {data.map((items) => (
            <Card value={items} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
