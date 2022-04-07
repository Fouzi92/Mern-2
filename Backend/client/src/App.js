import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Trending from "./pages/Trending";
import { UidContext } from "./components/AppContext";
import axios from "axios";

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res);
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </BrowserRouter>
    </UidContext.Provider>
  );
};

export default App;
