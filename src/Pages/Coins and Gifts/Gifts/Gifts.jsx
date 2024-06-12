import React, { useEffect, useState } from "react";
import {
  deleteFrame,
  deleteWallpaper,
  getAllFrames,
  getAllWallpapers,
} from "../../../service/allApi";
import DataTable from "../../../Components/DataTable";
import TableToggleSwitch from "../../../Components/TableToggleSwitch";
import { IconButton } from "@mui/material";
import { Pencil, Trash } from "@phosphor-icons/react";
import theme from "../../../../theme";
import ConfirmationPopover from "../../../Components/ConfirmationPopover";
import TopAddNewBar from "../../../Components/TopAddNewBar";
import { useNavigate } from "react-router-dom";

const Gifts = () => {
  const [gifts, setGifts] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  
  const navigate = useNavigate()

  const fetchAllGifts = async () => {
    const response = await getAllGifts();
    setGifts(response.data);
  };

  useEffect(() => {
    fetchAllGifts();
  }, []);

  const formatedGiftsForDataTable = () => {
    return gifts?.map((item, ind) => ({
      slno: ind + 1,
      name: item.name,
      oldPrice: item.oldPrice,
      newPrice: item.newPrice,
      image: item.image,
      viewOrder: item.viewOrder,
      status: item.status,
      edit: item._id,
    }));
  };

  const formattedFrameRows = formatedGiftsForDataTable();

  const columns = [
    { field: "slno", headerName: "Sl No" },
    { field: "name", headerName: "Name" },
    { field: "oldPrice", headerName: "Old Price" },
    { field: "newPrice", headerName: "New Price" },
    {
      field: "image",
      headerName: "Image",
      renderCell: (value) => (
        <img src={value} style={{ width: 40, height: 40 }} />
      ),
    },
    { field: "viewOrder", headerName: "View Order" },
    {
      field: "status",
      headerName: "Status",
      renderCell: (value) => <TableToggleSwitch value={value} />,
    },
    {
      field: "edit",
      headerName: "Edit",
      renderCell: (value) => (
        <>
          <IconButton>
            <Pencil size={20} color={theme.palette.info.main} />
          </IconButton>
          <IconButton
            aria-describedby="delete-pop"
            onClick={(e) => handleClick(e, value)}
          >
            <Trash size={20} color={theme.palette.error.main} />
          </IconButton>
        </>
      ),
    },
  ];

  const handleDeleteGift = async () => {
    const response = await deleteGift(selectedId);
    fetchAllGifts();
    handleClose();
  };

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <TopAddNewBar
        label={"Gifts List"}
        onAddButtonClick={() => navigate("/gifts/add")}
      />
      <DataTable columns={columns} rows={formattedFrameRows} />
      <ConfirmationPopover
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleConfirm={handleDeleteGift}
      />
    </div>
  );
};

export default Gifts;
