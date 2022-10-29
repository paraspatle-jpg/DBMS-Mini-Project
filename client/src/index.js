import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./theme/ThemeProvider";

import { ModalProvider } from "react-modal-hook";

import "aos-animations/dist/animations.min.css";
import "aos-animations/dist/animations.min.js";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </ThemeProvider>
);
