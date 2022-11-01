import * as React from "react";
import {useColorMode} from "../hooks/useColorMode"

const RemoveFavourites = (props) => (
  <>
    <svg
      width="60px"
      height="60px"
      viewBox="0 0 60 60"
      data-name="remove from favorites"
      id="remove_from_favorites"
      style={{ height: "30px",marginTop: "8px",fill: useColorMode("black","white") }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="cls-1"
        d="M957.875,126a12,12,0,1,1-12,12A12,12,0,0,1,957.875,126ZM952,140h12a2,2,0,0,0,0-4H952A2,2,0,0,0,952,140Z"
        id="remove"
        transform="translate(-910 -90)"
      />
      <path
        class="cls-2"
        d="M965.88,121.835A17.975,17.975,0,0,0,943.4,148.5l-0.216.177a4.509,4.509,0,0,1-6.375,0S910,127.085,910,107a17,17,0,0,1,17-17c7.625,0,11.562,6.057,13,6.057S945.375,90,953,90a17,17,0,0,1,17,17C970,111.97,968.351,117.031,965.88,121.835Z"
        id="favorite"
        transform="translate(-910 -90)"
      />
    </svg>
  </>
);

export default RemoveFavourites;
