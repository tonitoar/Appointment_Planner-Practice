import React from "react";
import {Tile} from "../tile/Tile"

export const TileList = ({items = []}) => {
  console.log("Items passed to TileList:", items); // Debug the received prop
  return (
    <div>
      {items.map((contact, i) => {
        const {name, ...rest} = contact;
        return <Tile name={name} description={rest} key={i}/>
      })}
    </div>
  );
};
