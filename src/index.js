import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Characters from "./routes/Characters"
import Character  from "./routes/Character"
import Planets    from "./routes/Planets"
import Planet    from "./routes/Planet"
import Starships  from "./routes/Starships"
import Starship   from "./routes/Starship"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"                        element={<App />} />
      <Route path="characters/:characterNum" element={<Character />} />
      <Route path="characters"               element={<Characters />} />
      <Route path="planets/:planetNum"       element={<Planet />} />
      <Route path="planets"                  element={<Planets />} />
      <Route path="starships/:starshipNum"   element={<Starship />} />
      <Route path="starships"                element={<Starships />} />
      <Route path="*"                        element={<p>Nothing matched this querry</p>} />
    </Routes>
  </BrowserRouter>
);
