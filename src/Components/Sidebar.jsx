import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Drawer,
  Toolbar,
  useTheme,
} from "@mui/material";
import {
  CaretDown,
  CaretUp,
  ChartPieSlice,
  Circle,
  FileText,
  FlagBanner,
  HandCoins,
  Ranking,
  SquaresFour,
  Tag,
  Translate,
  Trophy,
  Users,
  UsersFour,
} from "@phosphor-icons/react";
import Logo from "../assets/Logo.svg";

const drawerWidth = "16%";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const theme = useTheme();

  const handleToggle = () => {
    setOpen(!open);
  };

  const mainItems = [
    {
      text: "Dashboard",
      icon: <SquaresFour size={26} color="white" />,
      link: "/dashboard",
    },
    {
      text: "Banner",
      icon: <FlagBanner size={26} color="white" />,
      link: "/banner",
    },
    { text: "Users", icon: <Users size={26} color="white" />, link: "/users" },
    {
      text: "Levels",
      icon: <Ranking size={26} color="white" />,
      link: "/levels",
    },
    {
      text: "Rooms",
      icon: <UsersFour size={26} color="white" />,
      link: "/rooms",
    },
    {
      text: "Leader Board",
      icon: <Trophy size={26} color="white" />,
      link: "/leaderboard",
    },
    {
      text: "Reports",
      icon: <ChartPieSlice size={26} color="white" />,
      link: "/reports",
    },
    {
      text: "Language",
      icon: <Translate size={26} color="white" />,
      link: "/language",
    },
    { text: "Offers", icon: <Tag size={26} color="white" />, link: "/offers" },
    {
      text: "CMS Page",
      icon: <FileText size={26} color="white" />,
      link: "/cmd",
    },
  ];

  const coinsAndGiftsItems = [
    { text: "Coins", icon: <Circle size={15} color="white" />, link: "/coins" },
    {
      text: "Hearts",
      icon: <Circle size={15} color="white" />,
      link: "/hearts",
    },
    { text: "Gifts", icon: <Circle size={15} color="white" />, link: "/gifts" },
    {
      text: "Frames",
      icon: <Circle size={15} color="white" />,
      link: "/frames",
    },
    {
      text: "Wallpapers",
      icon: <Circle size={15} color="white" />,
      link: "/wallpapers",
    },
    {
      text: "Conversion",
      icon: <Circle size={15} color="white" />,
      link: "/conversion",
    },
  ];

  const getListItemStyle = (link) => {
    return {
      backgroundColor:
        location.pathname === link ? theme.palette.error.main : "inherit",
      transition: "background-color 0.3s ease",
      "&:hover": {
        backgroundColor:
          location.pathname === link ? theme.palette.error.main : "inherit",
      },
      display: "flex",
      gap: "20px",
      alignItems: "center",
    };
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          backgroundColor: theme.palette.primary.main,
          color: "white",
          boxSizing: "border-box",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
    >
      <Toolbar>
        <img src={Logo} style={{ marginInline: "auto", marginBlock: "30px" }} />
      </Toolbar>
      <List>
        {mainItems.slice(0, 5).map((item) => (
          <ListItem
            button
            component={Link}
            to={item.link}
            key={item.text}
            sx={getListItemStyle(item.link)}
          >
            <>{item.icon}</>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem
          button
          onClick={handleToggle}
          sx={getListItemStyle("/coins-and-gifts")}
        >
          <>
            <HandCoins size={26} color="white" />
          </>
          <ListItemText primary="Coins and Gifts" />
          {open ? <CaretUp /> : <CaretDown />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {coinsAndGiftsItems.map((item) => (
              <ListItem
                button
                sx={{ pl: 4, ...getListItemStyle(item.link) }}
                component={Link}
                to={item.link}
                key={item.text}
              >
                <>{item.icon}</>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        {mainItems.slice(5).map((item) => (
          <ListItem
            button
            component={Link}
            to={item.link}
            key={item.text}
            sx={getListItemStyle(item.link)}
          >
            <>{item.icon}</>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
