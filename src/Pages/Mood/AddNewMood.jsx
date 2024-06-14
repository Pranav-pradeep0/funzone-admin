import React, { useState } from "react";
import { Box } from "@mui/material";
import CreateNewTopBar from "../../Components/CreateNewTopBar";
import InputField from "../../Components/InputField";
import LabeldInputField from "../../Components/LabeldInputField";
import TableToggleSwitch from "../../Components/TableToggleSwitch";
import moodPlaceholder from "../../assets/MoodPlaceholder.png"; // Placeholder image for the mood

const AddNewMood = () => {
  const [moodData, setMoodData] = useState({
    name: "",
    image: null,
    viewingOrder: "",
    status: false,
  });

  const [imagePreview, setImagePreview] = useState(""); // State to hold the image preview

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMoodData({
      ...moodData,
      [name]: value,
    });
  };

  const handleStatusChange = (e) => {
    const isChecked = e.target.checked;
    setMoodData({
      ...moodData,
      status: isChecked,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMoodData({
        ...moodData,
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
        label={"Add New Mood"}
        buttonStyles={{ width: "120px" }}
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
              value={moodData.name}
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
                src={imagePreview || moodData.image || moodPlaceholder}
                alt="Mood Preview"
                style={{
                  width: "100px",
                  height: "100px",
                  border: "rgba(0, 0, 0, 0.5) 1px solid",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <input
                type="file"
                id="moodImage"
                onChange={handleImageChange}
                style={{ display: "none" }}
                accept="image/*"
              />
              <label
                htmlFor="moodImage"
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
                Upload PNG/JPEG with size below 1MB
              </span>
            </Box>
          }
        />
        <LabeldInputField
          label={"Viewing Order"}
          input={
            <InputField
              name="viewingOrder"
              value={moodData.viewingOrder}
              onChange={handleChange}
            />
          }
        />
        <LabeldInputField
          label={"Status"}
          input={
            <Box sx={{ width: "130px" }}>
              <TableToggleSwitch
                checked={moodData.status}
                onChange={handleStatusChange}
              />
            </Box>
          }
        />
      </Box>
    </div>
  );
};

export default AddNewMood;
