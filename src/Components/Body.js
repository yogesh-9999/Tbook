import React from "react";
import img1 from "./xEaAoizNFV8.jpg";
import "./Style.css";
import Filter from "./Filter";
import Banner from "./Banner";
import { Crausal } from "./Crausal";
import { Imagegrid } from "./Imagegrid";
import { Foo } from "./Foo";
// import { Banner2 } from "./Banner2";



export default function Body() {
  return (
    <div className="pframe">
      
      <img src={img1} alt="Error"></img>
      {/* <Filter/> */}
      
      <Imagegrid/>
      <Crausal/>
      {/* <Banner2/> */}

      {/* <Banner /> */}
<Foo/>
    </div>
  );
}
