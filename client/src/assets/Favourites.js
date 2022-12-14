import * as React from "react";
import { useColorMode } from "../hooks/useColorMode";

const Favourites = (props) => (
  <div>
    <svg
      className="navIcons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-20 10 70 50"
      style={{
        fill:useColorMode("black","#f5f5f5" )
      }}
      {...props}
    >
      <path d="M34.199 3.83c-3.944 0-7.428 1.98-9.51 4.997 0 0-.703 1.052-1.818 1.052-1.114 0-1.817-1.052-1.817-1.052a11.537 11.537 0 0 0-9.51-4.997C5.168 3.83 0 8.998 0 15.376c0 1.506.296 2.939.82 4.258 3.234 10.042 17.698 21.848 22.051 22.279 4.354-.431 18.816-12.237 22.052-22.279.524-1.318.82-2.752.82-4.258 0-6.378-5.168-11.546-11.544-11.546z" />
    </svg>
  </div>
);

export default Favourites;
