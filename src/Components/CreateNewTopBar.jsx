import { Box, Button, IconButton } from "@mui/material";
import { ArrowLeft, Plus, Trash } from "@phosphor-icons/react";
import React from "react";
import theme from "../../theme";

const CreateNewTopBar = ({
  label,
  onAddButtonClick,
  onDeleteButtonClick,
  buttonStyles,
}) => {
  return (
    <>
      <Box
        sx={{
          paddingBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{display:'flex', alignItems:'center', gap:'20px'}}>
            <IconButton><ArrowLeft size={28} color="black"/></IconButton>
          <span style={{ fontWeight: 700, fontSize: "18px" }}>{label}</span>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Button
            sx={{
              ...buttonStyles,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              backgroundColor:'white',
              color:theme.palette.error.main,
              border:'1px solid',
              borderColor: theme.palette.error.main,
            }}
            onClick={onDeleteButtonClick}
          >
            <>
              <span>Delete</span>
            </>
          </Button>
          <Button
            variant="primary"
            sx={{
              ...buttonStyles,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
            onClick={onAddButtonClick}
          >
            <>
              <span>Save</span>
            </>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CreateNewTopBar;
