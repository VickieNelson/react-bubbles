import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    // fetch your colors data from the server when the component mounts
    // set that data to the colorList state property
    axiosWithAuth()
      .get("/api/colors")
      .then((res) => {
        setColorList(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Error fetching colors. PLease try again.", props);
      });
  }, [props]);

  return (
    <div className='bubble-page-style'>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;
