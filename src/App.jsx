import { BrowserRouter } from "react-router-dom";
import Router from "./routers";
import { global } from "./assets/context";
import { useEffect, useState } from "react";

function App() {
  const [dataHotel, setDataHotel] = useState();
  const [update, setUpdate] = useState(false);
  const [dataID, setDataID] = useState("");

  useEffect(() => {
    fetch("https://6507a74b3a38daf4803f9ee4.mockapi.io/api/v1/rooms")
      .then((res) => res.json())
      .then(setDataHotel);
    setUpdate(false);
  }, [update]);

  const store = {
    dataHotel: dataHotel,

    dataID: dataID,
    updateDataID: (value) => {
      setDataID(value);
    },

    update: update,
    loadUpdate: (value) => {
      setUpdate(value);
    },
  };

  if (dataHotel) {
    return (
      <BrowserRouter>
        <global.Provider value={store}>
          <Router />
        </global.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
