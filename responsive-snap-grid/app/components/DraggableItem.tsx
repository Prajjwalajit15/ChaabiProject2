import React from "react";

export const DraggableItem = ({ label }: { label: string }) => {
  return (
    <div
      draggable
      className="bg-gray-200 p-2 m-2 rounded cursor-grab"
      onDragStart={(e) => e.dataTransfer.setData("text/plain", label)}
    >
      {label}
    </div>
  );
};
