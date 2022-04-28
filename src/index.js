import React from "react";
import { createRoot } from 'react-dom/client';
import Main from "./components/Main";
import "./components/Style.css"


const root = createRoot(document.getElementById("root"));
root.render(<React.StrictMode><Main /></React.StrictMode>);
