import React from "react";
import { Card } from "../components/Card";

export const ItemList = () => {
  return (
    <main>
      <section className="max-w-8x1 mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
};
