import React from "react";
import { Audio } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader__container">
      <Audio
        height="100"
        width="100"
        color="#fcc959"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </div>
  );
}
