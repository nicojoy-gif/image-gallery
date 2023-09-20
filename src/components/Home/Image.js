import React, { useState } from "react";
import ImageGrid from "../Image/ImageGrid";
import a from "../Assets/squirtle.png";
import a1 from "../Assets/006.png";
import a2 from "../Assets/009.png";
import a3 from "../Assets/003.png";
import a4 from "../Assets/010.png";
import a5 from "../Assets/012.png";
import a6 from "../Assets/019.png";
import a7 from "../Assets/pikachu.png";
import a8 from "../Assets/002.png";
import a9 from "../Assets/charmander.png";
import b from "../Assets/bulbasaur.png";
import b1 from "../Assets/005.png";
import b2 from "../Assets/037.png";
import b3 from "../Assets/008.png";
import b4 from "../Assets/Pokémon_Jigglypuff_art.png";
import b5 from "../Assets/images (2).jpeg";
import b6 from "../Assets/052.png";
import b7 from "../Assets/021.png";
import b8 from "../Assets/gengar.jpg";
import b9 from "../Assets/015.png";
import Navbar from "./Navbar";
function Image() {
  const imageData = [
    {
      id: "image0",
      url: a,
      tag: "Squirtle",
    },
    {
      id: "image1",
      url: a1,
      tag: "Charizard",
    },
    {
      id: "image2",
      url: a2,
      tag: "Blastoise",
    },
    {
      id: "image3",
      url: a3,
      tag: "Venusaur",
    },
    {
      id: "image4",
      url: a4,
      tag: "Caterpie",
    },
    {
      id: "image5",
      url: a5,
      tag: "Butterfree",
    },
    {
      id: "image6",
      url: a6,
      tag: "Rattata",
    },
    {
      id: "image7",
      url: a7,
      tag: "Pikachu",
    },
    {
      id: "image8",
      url: a8,
      tag: "Ivysaur",
    },
    {
      id: "image9",
      url: a9,
      tag: "Charmander",
    },
    {
      id: "image10",
      url: b,
      tag: "bulbasaur",
    },
    {
      id: "image11",
      url: b1,
      tag: "Charmeleon",
    },
    {
      id: "image12",
      url: b2,
      tag: "Vulpix",
    },
    {
      id: "image13",
      url: b3,
      tag: "Wartortle",
    },
    {
      id: "image14",
      url: b4,
      tag: "Jigglypuff",
    },
    {
      id: "image15",
      url: b5,
      tag: "Growlithe",
    },
    {
      id: "image16",
      url: b6,
      tag: "Meowth",
    },
    {
      id: "image17",
      url: b7,
      tag: "Spearow",
    },
    {
      id: "image18",
      url: b8,
      tag: "Gengar",
    },
    {
      id: "image19",
      url: b9,
      tag: "Beedrill",
    },
  ];
  const [imageDatas, setImageData] = useState(imageData);
  const yourOnImageDragEndFunction = (updatedImageData) => {

    console.log(updatedImageData);
    setImageData(updatedImageData);
  };
  return (
    <div className="bg-cyan-900 pb-6 h-full">
      <Navbar />
      <h1 className="text-center text-6xl text-white font-bold py-6">
        Image Gallery
      </h1>
      <ImageGrid
        imageData={imageDatas}
        onImageDragEnd={yourOnImageDragEndFunction}
      />
    </div>
  );
}

export default Image;
