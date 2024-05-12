import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./Navbar.jsx"
import App from "./App.jsx"
import CardsRender from "./CardsRender.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <CardsRender />
  </React.StrictMode>
)
