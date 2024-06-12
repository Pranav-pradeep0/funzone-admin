import { Fragment } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { Box, useMediaQuery } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Users from "./Pages/Users/Users";
import Header from "./Components/Header";
import LanguageList from "./Pages/Language/LanguageList";
import Coins from "./Pages/Coins and Gifts/Coins/Coins";
import "react-toastify/dist/ReactToastify.css";
import Conversion from "./Pages/Coins and Gifts/Conversion/Conversion";
import Wallpapers from "./Pages/Coins and Gifts/Wallpapers/Wallpapers";
import Frames from "./Pages/Coins and Gifts/Frames/Frames";
import Gifts from "./Pages/Coins and Gifts/Gifts/Gifts";
import AddNewCoin from "./Pages/Coins and Gifts/Coins/AddNewCoin";
import AddNewGift from "./Pages/Coins and Gifts/Gifts/AddNewGift";
import AddNewFrame from "./Pages/Coins and Gifts/Frames/AddNewFrame";
import Levels from "./Pages/Levels/Levels";
import AddNewLevel from "./Pages/Levels/AddNewLevel";
import AddNewUser from "./Pages/Users/AddNewUser";

const App = () => {
  const mediaQuery800px = useMediaQuery("(min-width:800px)");
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ display: !mediaQuery800px && "none" }}>
        <Sidebar />
      </Box>

      <Box
        sx={{ marginLeft: mediaQuery800px && "16%", flexGrow: 1, width: "84%" }}
      >
        <Box>
          <Header />
        </Box>

        <Box sx={{ padding: "30px" }}>
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/language" element={<LanguageList />} />
            <Route path="/coins" element={<Coins />} />
            <Route path="/conversion" element={<Conversion />} />
            <Route path="/wallpapers" element={<Wallpapers />} />
            <Route path="/frames" element={<Frames />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/levels" element={<Levels />} />

            {/* Coins */}
            <Route path="/coins/add" element={<AddNewCoin />} />
            <Route path="/coins/:type/:id" element={<AddNewCoin />} />

            {/* Gift */}
            <Route path="/gifts/add" element={<AddNewGift />} />
            <Route path="/gifts/:type/:id" element={<AddNewGift />} />

            {/* Frame */}
            <Route path="/frames/add" element={<AddNewFrame />} />
            <Route path="/frames/:type/:id" element={<AddNewFrame />} />

            {/* Levels */}
            <Route path="/levels/add" element={<AddNewLevel />} />
            <Route path="/levels/:type/:id" element={<AddNewLevel />} />

            {/* Users */}
            <Route path="/users/add" element={<AddNewUser />} />
            <Route path="/users/:type/:id" element={<AddNewUser />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
