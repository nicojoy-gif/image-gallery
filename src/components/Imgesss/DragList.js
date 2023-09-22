import React, { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import a from '../Assets/squirtle.png';
import a1 from '../Assets/squirtle-8012702_1280.jpg';
import a2 from '../Assets/sea-7769708_1280.jpg';
import a3 from '../Assets/raichu-8012701_1280.jpg';
import a4 from '../Assets/pokemon-8073929_1280.jpg';
import a5 from '../Assets/pokemon-8012706_1280.jpg';
import a6 from '../Assets/pokemon-4784549_1280.png';
import a7 from '../Assets/pikachu.png';
import a8 from '../Assets/pikachu-3865521_1280.png';
import a9 from '../Assets/charmander.png';
import b from '../Assets/bulbasaur.png';
import b1 from '../Assets/eevee-8024841_1280.jpg';
import b2 from '../Assets/img2.png';
import b3 from '../Assets/img1.png';
import b4 from '../Assets/ai-generated-8006756_1280.jpg';
import b5 from '../Assets/ai-generated-8200717_1280.png';
import b6 from '../Assets/ai-generated-8200718_1280.png';
import b7 from '../Assets/ai-generated-8202900_1280.png';
import b8 from '../Assets/ai-generated-8202901_1280.png';
import b9 from '../Assets/charmander.png';
import b10 from '../Assets/016.png'
import Navbar from "../Home/Navbar";
const images = [
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
    id: "image19",
    url: b9,
    tag: "Beedrill",
  },
]
const imagedata = [
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
    id: "image20",
    url: b10,
    tag: "Pidgey"
  }
]
const imagesdat = [
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
  
  
];

function DragList() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredImages, setFilteredImages] = React.useState(images);
  const [loading, setLoading] = React.useState(true);
  const [lists, setLists] = React.useState({
    todo: images,
    inProgress: imagedata,
    done: imagesdat,
  });

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const sourceList = lists[result.source.droppableId];
    const destinationList = lists[result.destination.droppableId];
    const [draggedImage] = sourceList.splice(result.source.index, 1);

    destinationList.splice(result.destination.index, 0, draggedImage);

    setLists({ ...lists });
    setFilteredImages(destinationList);
    setSearchTerm("");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  
  useEffect(() => {
    const filtered = images.filter((image) =>
      image.tag.toLowerCase().includes(searchTerm)
    );
    setFilteredImages(filtered);
  }, [searchTerm, images]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
  };
  if (loading) {
    return (
      <div className="animate-spin rounded-full my-5 mx-auto text-center h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    );
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="bg-cyan-900">
        <Navbar />
        <h1 className="text-center text-6xl text-white font-bold py-6">
          Image Gallery
        </h1>
        <input
          type="text"
          placeholder="Search by tag..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 mb-6 mt-2 border border-gray-400 w-1/2 cursor-pointer lg:w-1/3 rounded focus:outline-none focus:border-blue-500"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {Object.keys(lists).map((listKey) => (
    <Droppable key={listKey} droppableId={listKey}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {lists[listKey]
            .filter((image) =>
              image.tag.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((image, index) => (
              <Draggable
                key={image.id}
                draggableId={image.id}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    key={image.id}
                    className={`relative mx-4 my-2 ${
                      snapshot.isDragging ? "z-50" : ""
                    }`}
                    style={{
                      userSelect: "none",
                      minHeight: "50px",
                     
                      backgroundColor: snapshot.isDragging
                        ? "#263B4A"
                        : "",
                      color: "white",
                      borderRadius: "4px",
                      ...provided.draggableProps.style,
                    }}
                  >
                    <img
                      src={image.url}
                      alt={image.tag}
                      className="w-full h-64 lg:w-80 border-2 border-gray-600"
                    />
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                      {image.tag}
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  ))}
</div>

      </div>
    </DragDropContext>
  );
}

export default DragList;
