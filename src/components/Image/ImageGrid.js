import React, { useState, useEffect } from "react";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";

const ImageGrid = ({ imageData, onImageDragEnd }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredImages, setFilteredImages] = useState(imageData);
  const isSmallScreen = window.innerWidth < 768;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const filtered = imageData.filter((image) =>
      image.tag.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredImages(filtered);
  }, [searchTerm, imageData]);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    const updatedImages = [...filteredImages];
    const [movedItem] = updatedImages.splice(startIndex, 1);
    updatedImages.splice(endIndex, 0, movedItem);

    setFilteredImages(updatedImages);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return (
      <div className="animate-spin rounded-full my-5 mx-auto text-center h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    );
  }

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search by tag..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 m-2 border border-gray-400 w-1/2 cursor-pointer lg:w-1/3 rounded focus:outline-none focus:border-blue-500"
      />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-3 gap-6">
          {filteredImages.map((image, index) => (
            <Droppable
              key={image.id}
              droppableId={image.id} // Unique ID for each Droppable
              type="IMAGE"
              direction={isSmallScreen ? "vertical" : "horizontal"}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="relative mx-4"
                >
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
                        className="relative"
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
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default ImageGrid;
