import React, { useState } from "react";
import CreateNewTopBar from "../../../Components/CreateNewTopBar";
import InputField from "../../../Components/InputField";
import { Box, Button } from "@mui/material";
import LabeldInputField from "../../../Components/LabeldInputField";
import TableToggleSwitch from "../../../Components/TableToggleSwitch";
import giftIcon from "../../../assets/GiftIcon.png";

const AddNewGift = () => {
  const [giftData, setGiftData] = useState({
    name: "",
    oldPrice: "",
    newPriceInINR: "",
    icon: null,
    viewingOrder: "",
    status: false,
  });
  const [iconPreview, setIconPreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGiftData({
      ...giftData,
      [name]: value,
    });
  };

  const handleStatusChange = (e) => {
    const isChecked = e.target.checked;
    setGiftData({
      ...giftData,
      status: isChecked,
    });
  };

  const handleIconChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGiftData({
        ...giftData,
        icon: file,
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setIconPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <CreateNewTopBar
        label={"Add New Gift"}
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
              value={giftData.name}
              onChange={handleChange}
            />
          }
        />
        <LabeldInputField
          label={"Old Price"}
          input={
            <InputField
              name="oldPrice"
              value={giftData.oldPrice}
              onChange={handleChange}
            />
          }
        />
        <LabeldInputField
          label={"New Price (INR)"}
          input={
            <InputField
              name="newPriceInINR"
              value={giftData.newPriceInINR}
              onChange={handleChange}
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
                gap: "10px",
                width: "200px",
              }}
            >
              <img
                src={iconPreview || giftData.icon || giftIcon}
                alt="Icon Preview"
                style={{
                  width: "80px",
                  height: "80px",
                  border: "rgba(0, 0, 0, 0.5) 1px solid",
                  borderRadius: "10px",
                }}
              />
              <input
                type="file"
                id="icon"
                onChange={handleIconChange}
                style={{ display: "none" }}
              />
              <label
                htmlFor="icon"
                style={{
                  backgroundColor: "#E5E5E5",
                  padding: "6px 20px",
                  width: "max-content",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Change
              </label>
              <span
                style={{
                  fontSize: "12px",
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
              value={giftData.viewingOrder}
              onChange={handleChange}
            />
          }
        />
        <LabeldInputField
          label={"Status"}
          input={
            <Box sx={{ width: "130px" }}>
              <TableToggleSwitch
                checked={giftData.status}
                onChange={handleStatusChange}
              />
            </Box>
          }
        />
      </Box>
    </div>
  );
};

export default AddNewGift;
