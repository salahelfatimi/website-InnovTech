import { useEffect, useState } from "react";
import Carousel from "./components/Home/carousel";
import DescriptionInnovtech from "./components/Home/descriptionInnovtech";
import Grid from "./components/Home/grid";
import InfoBelkhayat from "./components/Home/infoBelkhayat";
import Map from "./components/Home/map";
import Loading from "./components/loading";

import ButtonUp from "./components/buttonUp";
export default function Home() {
  return (
    <>
      <div className="flex relative z-10 flex-col gap-24 pt-12 ">
        <ButtonUp/>
        <Loading />
        <div>
          <Carousel />
        </div>
        <div className=" container ">
          <DescriptionInnovtech />
        </div>
        <div className=" container">
          <Grid />
        </div>
        <div>
          <Map />
        </div>
        <div>
          <InfoBelkhayat />
        </div>
      </div>
    </>
  );
}
