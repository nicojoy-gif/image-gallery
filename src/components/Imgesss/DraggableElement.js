import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";

const ColumnHeader = ({ prefix }) => (
  <div className="text-uppercase mb-4">{prefix}</div>
);

const DroppableStyles = ({ children }) => (
  <div className="p-4 rounded bg-gray-300">{children}</div>
);

const DraggableElement = ({ prefix, elements }) => (
  <DroppableStyles>
    <ColumnHeader prefix={prefix} />
    <Droppable droppableId={`${prefix}`}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {elements.map((item, index) => (
            <ListItem key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DroppableStyles>
);

export default DraggableElement;
