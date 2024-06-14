import React from "react";
import TopAddNewBar from "../../Components/TopAddNewBar";
import { useNavigate } from "react-router-dom";

const Banners = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TopAddNewBar
        label={"Banner List"}
        onAddButtonClick={() => navigate("/banner/add")}
      />
    </div>
  );
};

export default Banners;
