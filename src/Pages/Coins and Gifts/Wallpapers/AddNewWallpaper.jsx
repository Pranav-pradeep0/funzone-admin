import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import CreateNewTopBar from "../../../Components/CreateNewTopBar";
import InputField from "../../../Components/InputField";
import LabeldInputField from "../../../Components/LabeldInputField";
import TableToggleSwitch from "../../../Components/TableToggleSwitch";
import wallpaperPlaceholder from "../../../assets/WallpaperPlaceholder.png"; // Placeholder image for the wallpaper
import { createWallpaper, getWallpaperById } from "../../../service/allApi";
import { useNavigate, useParams } from "react-router-dom";

const AddNewWallpaper = () => {
  const [wallpaperData, setWallpaperData] = useState({
    name: "",
    oldPrice: "",
    newPrice: "",
    viewOrder: "",
    status: false,
    image: null, // We'll use this to hold the uploaded file
  });

  const [iconPreview, setIconPreview] = useState(""); // State to hold the image preview

  const [validationError, setValidationError] = useState();

  const navigate = useNavigate();

  const { type, id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWallpaperData({
      ...wallpaperData,
      [name]: value,
    });
  };

  const handleStatusChange = (e) => {
    const isChecked = e.target.checked;
    setWallpaperData({
      ...wallpaperData,
      status: isChecked,
    });
  };

  const handleIconChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setWallpaperData({
        ...wallpaperData,
        image: file,
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setIconPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", wallpaperData.name);
    formData.append("oldPrice", wallpaperData.oldPrice);
    formData.append("newPrice", wallpaperData.newPrice);
    formData.append("viewOrder", wallpaperData.viewOrder);
    formData.append("status", wallpaperData.status);
    formData.append("image", wallpaperData.image);

    try {
      const response = await createWallpaper(formData);
      console.log(response);
      if (response.status === 201) {
        navigate("/wallpapers");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWallPaperDetails = async () => {
    const response = await getWallpaperById(id);
    console.log(response);
    if (response.status === 200) {
      const { wallpaper } = response.data;
      setWallpaperData({
        name: wallpaper?.name,
        oldPrice: wallpaper?.oldPrice,
        newPrice: wallpaper?.newPrice,
        viewOrder: wallpaper?.viewOrder,
        status: wallpaper?.status,
        image: wallpaper?.image,
      });
    }
  };

  useEffect(() => {
    if (type) {
      fetchWallPaperDetails();
    }
  }, [type, id]);

  return (
    <div>
      <CreateNewTopBar
        label={"Add New Wallpaper"}
        buttonStyles={{ width: "120px" }}
        onAddButtonClick={handleSubmit}
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
              value={wallpaperData.name}
              onChange={handleChange}
              error={validationError}
              setError={setValidationError}
            />
          }
        />
        <LabeldInputField
          label={"Old Price"}
          input={
            <InputField
              name="oldPrice"
              value={wallpaperData.oldPrice}
              onChange={handleChange}
              error={validationError}
              setError={setValidationError}
            />
          }
        />
        <LabeldInputField
          label={"New Price in INR"}
          input={
            <InputField
              name="newPrice"
              value={wallpaperData.newPrice}
              onChange={handleChange}
              error={validationError}
              setError={setValidationError}
            />
          }
        />
        <LabeldInputField
          label={"Icon"}
          input={
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: "200px",
              }}
            >
              <img
                src={iconPreview || wallpaperData.image || wallpaperPlaceholder}
                style={{
                  width: "70px",
                  height: "110px",
                  border: "rgba(0, 0, 0, 0.5) 1px solid",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <input
                type="file"
                id="wallpaperIcon"
                onChange={handleIconChange}
                style={{ display: "none" }}
                accept="image/*"
              />
              <label
                htmlFor="wallpaperIcon"
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
              name="viewOrder"
              value={wallpaperData.viewOrder}
              onChange={handleChange}
              error={validationError}
              setError={setValidationError}
            />
          }
        />
        <LabeldInputField
          label={"Status"}
          input={
            <Box sx={{ width: "130px" }}>
              <TableToggleSwitch
                value={wallpaperData.status}
                onChange={handleStatusChange}
              />
            </Box>
          }
        />
      </Box>
    </div>
  );
};

export default AddNewWallpaper;
