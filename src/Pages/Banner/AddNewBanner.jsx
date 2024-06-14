import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CreateNewTopBar from "../../Components/CreateNewTopBar";
import InputField from "../../Components/InputField";
import LabeldInputField from "../../Components/LabeldInputField";
import TableToggleSwitch from "../../Components/TableToggleSwitch";
import bannerPlaceholder from "../../assets/BannerImage.png";

const AddNewBanner = () => {
  const [bannerData, setBannerData] = useState({
    image: null,
    link: "",
    viewingOrder: "",
    status: false,
  });

  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBannerData({
      ...bannerData,
      [name]: value,
    });
  };

  const handleStatusChange = (e) => {
    const isChecked = e.target.checked;
    setBannerData({
      ...bannerData,
      status: isChecked,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerData({
        ...bannerData,
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
        label={"Add New Banner"}
        buttonStyles={{ width: "120px" }}
      />

      <Box
        sx={{
          display: "grid",
          gap: "30px",
        }}
      >
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
                src={imagePreview || bannerData.image || bannerPlaceholder}
                alt="Banner Preview"
                style={{
                  width: "430px",
                  height: "110px",
                  border: "rgba(0, 0, 0, 0.5) 1px solid",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <input
                type="file"
                id="bannerImage"
                onChange={handleImageChange}
                style={{ display: "none" }}
                accept="image/*"
              />
              <label
                htmlFor="bannerImage"
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
                Upload PNG/JPEG with resolution 430x110 and size below 1MB
              </span>
            </Box>
          }
        />
        <LabeldInputField
          label={"Link"}
          input={
            <InputField
              name="link"
              value={bannerData.link}
              onChange={handleChange}
            />
          }
        />
        <LabeldInputField
          label={"Viewing Order"}
          input={
            <InputField
              name="viewingOrder"
              value={bannerData.viewingOrder}
              onChange={handleChange}
            />
          }
        />
        <LabeldInputField
          label={"Status"}
          input={
            <Box sx={{ width: "130px" }}>
              <TableToggleSwitch
                checked={bannerData.status}
                onChange={handleStatusChange}
              />
            </Box>
          }
        />
      </Box>
    </div>
  );
};

export default AddNewBanner;
