import * as React from "react";
import Grid from "./Grid";
import "./styles.css";
import ColorfulBorder from "./ColorfulBorder";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import NoMatch from "./NoMacth";

export default function App({ serverData = null }) {
  return (
    <React.Fragment>
      <ColorfulBorder />
      <div className="container">
        <Navbar />
        <Routes>
          {routes.map(({ path, fetchInitialData, component: C }) => (
            <Route
              key={path}
              path={path}
              element={
                <C data={serverData} fetchInitialData={fetchInitialData} />
              }
            />
          ))}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}
