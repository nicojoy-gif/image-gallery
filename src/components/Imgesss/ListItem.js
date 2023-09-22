import { Draggable } from "react-beautiful-dnd";
import { LoremIpsum } from "lorem-ipsum";
import { generateFromString } from "generate-avatar";
import React, { useMemo } from "react";

const CardHeader = ({ randomHeader }) => (
  <div className="font-semibold">{randomHeader}</div>
);

const Author = ({ item }) => (
  <div className="flex items-center">
    {item.id}
    <img
      src={`data:image/svg+xml;utf8,${generateFromString(item.id)}`}
      alt="Avatar"
      className="h-8 w-8 rounded-full border-2 border-white"
    />
  </div>
);

const DragItem = ({ item, index }) => {
  const randomHeader = useMemo(() => lorem.generateWords(5), []);
  const lorem = new LoremIpsum();

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className="p-4 rounded bg-white shadow-md mb-8"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardHeader randomHeader={randomHeader} />
            <span>Content</span>
            <div className="w-full flex justify-between items-center">
              <span>{item.content}</span>
              <Author item={item} />
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default DragItem;
