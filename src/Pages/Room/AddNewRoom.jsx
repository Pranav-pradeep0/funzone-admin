import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CreateNewTopBar from "../../Components/CreateNewTopBar";
import InputField from "../../Components/InputField";
import LabeldInputField from "../../Components/LabeldInputField";
import TableToggleSwitch from "../../Components/TableToggleSwitch";
import imagePlaceholder from "../../assets/RoomImage.png"; // Placeholder image for the image

const AddNewRoom = () => {
  const [roomCategoryData, setRoomCategoryData] = useState({
    name: "",
    image: null,
    viewingOrder: "",
    status: false,
  });

  const [imagePreview, setImagePreview] = useState(""); // State to hold the image preview

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomCategoryData({
      ...roomCategoryData,
      [name]: value,
    });
  };

  const handleStatusChange = (e) => {
    const isChecked = e.target.checked;
    setRoomCategoryData({
      ...roomCategoryData,
      status: isChecked,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRoomCategoryData({
        ...roomCategoryData,
        image: file,
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <CreateNewTopBar
        label={"Add New Room Category"}
        buttonStyles={{ width: "200px" }}
      />

      <Box
        sx={{
          display: "grid",
          gap: "30px",
        }}
      >
        <LabeldInputField
          label={"Name"}
          input={
            <InputField
              name="name"
              value={roomCategoryData.name}
              onChange={handleChange}
            />
          }
        />
        <LabeldInputField
          label={"Image"}
          input={
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "200px",
              }}
            >
              <img
                src={imagePreview || roomCategoryData.image || imagePlaceholder}
                alt="Image Preview"
                style={{
                  width: "190px",
                  height: "170px",
                  border: "rgba(0, 0, 0, 0.5) 1px solid",
                  borderRadius: "30px",
                }}
              />
              <input
                type="file"
                id="image"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <label
                htmlFor="image"
                style={{
                  backgroundColor: "#E5E5E5",
                  padding: "6px 20px",
                  width: "max-content",
                  borderRadius: "8px",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                Change
              </label>
              <span
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                }}
              >
                Upload PNG of resolution 100x100 and size below 1mb
              </span>
            </Box>
          }
        />
        <LabeldInputField
          label={"Viewing Order"}
          input={
            <InputField
              name="viewingOrder"
              value={roomCategoryData.viewingOrder}
              onChange={handleChange}
            />
          }
        />
        <LabeldInputField
          label={"Status"}
          input={
            <Box sx={{ width: "130px" }}>
              <TableToggleSwitch
                checked={roomCategoryData.status}
                onChange={handleStatusChange}
              />
            </Box>
          }
        />
      </Box>
    </div>
  );
};

export default AddNewRoom;
