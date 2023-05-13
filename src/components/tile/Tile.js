import React from "react";
import { TileList } from "../tileList/TileList";

export const Tile = ( {name, description} ) => {
  return (
    <div className="tile-container">
      {
        (Object.values(description)).map((value,index) => (
          <p name={name} key={index} className={`${index === 0 ? 'tile-title' : ''} tile`}>
            {value}
          </p>
        ))
      }
    </div>
  );
};
