import React from "react";
import TopAddNewBar from "../../Components/TopAddNewBar";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TopAddNewBar
        label={"Categories List"}
        onAddButtonClick={() => navigate("/rooms/add")}
      />
    </div>
  );
};

export default Rooms;
