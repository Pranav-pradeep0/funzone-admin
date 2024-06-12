import React, { useState } from "react";
import { Box } from "@mui/material";
import CreateNewTopBar from "../../Components/CreateNewTopBar";
import InputField from "../../Components/InputField";
import LabeldInputField from "../../Components/LabeldInputField";
import TableToggleSwitch from "../../Components/TableToggleSwitch";
import theme from "../../../theme";

const AddNewLevel = () => {
  const [levelData, setLevelData] = useState({
    name: "",
    textColour: "",
    bgColour1: "",
    bgColour2: "",
    pointsRequired: "",
    viewingOrder: "",
    status: false,
    heartsPerMinute: {
      privateAudioCall: "",
      privateVideoCall: "",
      groupAudioCall: "",
      groupVideoCall: "",
    },
  });

  const [validationError, setValidationError] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLevelData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStatusChange = (e) => {
    const isChecked = e.target.checked;
    setLevelData((prevData) => ({
      ...prevData,
      status: isChecked,
    }));
  };

  const handleHeartsChange = (e) => {
    const { name, value } = e.target;
    setLevelData((prevData) => ({
      ...prevData,
      heartsPerMinute: {
        ...prevData.heartsPerMinute,
        [name]: value,
      },
    }));
  };

  console.log(levelData);

  return (
    <div>
      <CreateNewTopBar
        label={"Add New Level"}
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
              value={levelData.name}
              onChange={handleChange}
              error={validationError}
              setError={setValidationError}
            />
          }
        />
        <LabeldInputField
          label={"Text Colour"}
          input={
            <InputField
              name="textColour"
              value={levelData.textColour}
              onChange={handleChange}
              error={validationError}
              setError={setValidationError}
            />
          }
        />
        <Box
          sx={{ display: "grid", gap: "10px", gridTemplateColumns: "1fr 1fr" }}
        >
          <LabeldInputField
            label={"Background Colour 1"}
            input={
              <InputField
                name="bgColour1"
                value={levelData.bgColour1}
                onChange={handleChange}
                error={validationError}
                setError={setValidationError}
              />
            }
          />
          <LabeldInputField
            label={"Background Colour 2"}
            input={
              <InputField
                name="bgColour2"
                value={levelData.bgColour2}
                onChange={handleChange}
                error={validationError}
                setError={setValidationError}
              />
            }
          />
        </Box>
        <LabeldInputField
          label={"Points Required"}
          input={
            <InputField
              name="pointsRequired"
              value={levelData.pointsRequired}
              onChange={handleChange}
              error={validationError}
              setError={setValidationError}
            />
          }
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: theme.palette.secondary.main,
            padding: "20px 60px",
            flexWrap: "wrap",
            borderRadius: "12px",
          }}
        >
          <span
            style={{
              fontWeight: 700,
              maxWidth: "160px",
            }}
          >
            Hearts received per minute on
          </span>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: 14,
                marginBottom: "5px",
              }}
            >
              Private Audio Call
            </span>
            <Box sx={{ backgroundColor: "white", borderRadius: "10px" }}>
              <InputField
                name="privateAudioCall"
                value={levelData.heartsPerMinute.privateAudioCall}
                onChange={handleHeartsChange}
                styles={{
                  width: "120px",
                }}
                error={validationError}
                setError={setValidationError}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: 14,
                marginBottom: "5px",
              }}
            >
              Private Video Call
            </span>
            <Box sx={{ backgroundColor: "white", borderRadius: "10px" }}>
              <InputField
                name="privateVideoCall"
                value={levelData.heartsPerMinute.privateVideoCall}
                onChange={handleHeartsChange}
                styles={{
                  width: "120px",
                }}
                error={validationError}
              setError={setValidationError}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: 14,
                marginBottom: "5px",
              }}
            >
              Group Audio Call
            </span>
            <Box sx={{ backgroundColor: "white", borderRadius: "10px" }}>
              <InputField
                name="groupAudioCall"
                value={levelData.heartsPerMinute.groupAudioCall}
                onChange={handleHeartsChange}
                styles={{
                  width: "120px",
                }}
                error={validationError}
              setError={setValidationError}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: 14,
                marginBottom: "5px",
              }}
            >
              Group Video Call
            </span>
            <Box sx={{ backgroundColor: "white", borderRadius: "10px" }}>
              <InputField
                name="groupVideoCall"
                value={levelData.heartsPerMinute.groupVideoCall}
                onChange={handleHeartsChange}
                styles={{
                  width: "120px",
                }}
                error={validationError}
              setError={setValidationError}
              />
            </Box>
          </Box>
        </Box>
        <LabeldInputField
          label={"Viewing Order"}
          input={
            <InputField
              name="viewingOrder"
              value={levelData.viewingOrder}
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
                checked={levelData.status}
                onChange={handleStatusChange}
              />
            </Box>
          }
        />
      </Box>
    </div>
  );
};

export default AddNewLevel;
