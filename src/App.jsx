import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import SideBar from "./layouts/SideBar";
import Dashboard from "./screens/Dashboard";
import ManageSongs from "./screens/ManageSongs";
import ManageUsers from "./screens/ManageUsers";
import SubmittedSongs from "./screens/SubmittedSongs";
import WatchVideoPopup from "./screens/WatchVideoPopup";

function App() {
  const [isWatchVideo, setWatchVideo] = useState(false);
  return (
    <>
      {isWatchVideo && <WatchVideoPopup setWatchVideo={setWatchVideo} />}
      <Header />
      <div className="App">
        <SideBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/manage-songs" element={<ManageSongs />} />
          <Route
            path="/submitted-songs"
            element={<SubmittedSongs setWatchVideo={setWatchVideo} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
