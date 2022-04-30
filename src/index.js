import React from "react";
import { createRoot } from 'react-dom/client';
import Chat from "./Chat-App";
import "./components/Style.css"


const root = createRoot(document.getElementById("root"));
root.render(<React.StrictMode><Chat /></React.StrictMode>);
