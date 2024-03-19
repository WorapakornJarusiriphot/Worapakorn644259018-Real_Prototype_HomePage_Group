import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
// import HomeFilled from '@mui/icons-material/HomeFilled';
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccessTimeFilled from "@mui/icons-material/AccessTimeFilled";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import Filter from "./Filter";
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function DrawerMobileNavigation() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton
        onClick={() => setOpen(true)}
        color="inherit"
        style={{ color: "white" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        invertedColors
        variant="solid"
        size="sm"
      >
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            fontSize="sm"
            fontWeight="lg"
            sx={{ cursor: "pointer" }}
          >
            ปิด
          </Typography>
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box> */}
        {/* <Input
          size="sm"
          placeholder="Search for User, Store or Game"
          variant="plain"
          endDecorator={<Search />}
          slotProps={{
            input: {
              "aria-label": "Search anything",
            },
          }}
          sx={{
            m: 3,
            borderRadius: 0,
            borderBottom: "2px solid",
            borderColor: "neutral.outlinedBorder",
            "&:hover": {
              borderColor: "neutral.outlinedHoverBorder",
            },
            "&::before": {
              border: "1px solid var(--Input-focusedHighlight)",
              transform: "scaleX(0)",
              left: 0,
              right: 0,
              bottom: "-2px",
              top: "unset",
              transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
              borderRadius: 0,
            },
            "&:focus-within::before": {
              transform: "scaleX(1)",
            },
          }}
        /> */}
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "lift" },
          }}
        >
          <ListItemButton sx={{ fontWeight: "lg" }}>
            <HomeRoundedIcon />
            HOME
          </ListItemButton>
          <ListItemButton>
            <AccessTimeFilled />
            Show participation history
          </ListItemButton>
          <ListItemButton>
            <NotificationsIcon />
            Notifications
          </ListItemButton>
          <ListItemButton>
            <InfoOutlined />
            Website Rules
          </ListItemButton>
        </List>
        <Filter />
      </Drawer>
    </React.Fragment>
  );
}
