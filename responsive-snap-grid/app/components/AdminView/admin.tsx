import React from "react";
import { DraggableItem } from "../DraggableItem";
import { GridCanvas } from "../GridCanvas";

export default function Admin() {
  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-gray-100 p-4">
        <DraggableItem label="Progress Bar" />
        <DraggableItem label="Timer" />
        <DraggableItem label="Question Text" />
      </aside>
      <main className="w-3/4">
        <GridCanvas />
      </main>
    </div>
  );
}
