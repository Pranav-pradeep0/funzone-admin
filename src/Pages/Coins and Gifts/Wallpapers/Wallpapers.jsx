import React, { useEffect, useState } from "react";
import { deleteWallpaper, getAllWallpapers } from "../../../service/allApi";
import DataTable from "../../../Components/DataTable";
import TableToggleSwitch from "../../../Components/TableToggleSwitch";
import { IconButton } from "@mui/material";
import { Pencil, Trash } from "@phosphor-icons/react";
import theme from "../../../../theme";
import ConfirmationPopover from "../../../Components/ConfirmationPopover";
import TopAddNewBar from "../../../Components/TopAddNewBar";
import { useNavigate } from "react-router-dom";

const Wallpapers = () => {
  const [wallpapers, setWallpapers] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const navigate = useNavigate();

  const fetchAllWallpapers = async () => {
    const response = await getAllWallpapers();
    setWallpapers(response.data);
  };

  useEffect(() => {
    fetchAllWallpapers();
  }, []);

  const formatedWallsForDataTable = () => {
    return wallpapers?.map((item, ind) => ({
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

  const formattedWallpaperRows = formatedWallsForDataTable();

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
          <IconButton onClick={() => navigate(`/wallpapers/edit/${value}`)}>
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

  const handleDeleteWallpaper = async () => {
    const response = await deleteWallpaper(selectedId);
    fetchAllWallpapers();
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
        label={"Wallpapers List"}
        onAddButtonClick={() => navigate("/wallpaper/add")}
      />
      <DataTable columns={columns} rows={formattedWallpaperRows} />
      <ConfirmationPopover
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleConfirm={handleDeleteWallpaper}
      />
    </div>
  );
};

export default Wallpapers;
