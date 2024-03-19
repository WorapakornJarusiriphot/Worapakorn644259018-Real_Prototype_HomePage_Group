import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMobileNavigation from "../DrawerMobileNavigation";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Textarea from '@mui/joy/Textarea';


import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
  },
  components: {
    // กำหนดค่าเริ่มต้นของ TextField ให้เข้ากับธีมสีเข้ม
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "white",
          },
          "& .MuiInputBase-root": {
            color: "white",
            "& fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        },
      },
    },
  },
});

function Header() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <AppBar sx={{ background: "#333333" }}> {/* เปลี่ยนสีพื้นหลังเป็นสีเทาเข้ม */}
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit" // ใช้สีข้อความตาม theme ปัจจุบัน (ในกรณีนี้จะเป็นสีขาว)
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <DrawerMobileNavigation />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left", color: "inherit" }} // เปลี่ยนสีข้อความเป็นสีขาว
          >
            DiceDreams
          </Typography> */}
                    <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            DiceDreams
          </Typography>
          <ThemeProvider theme={darkTheme}>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        <TextField
        placement="left-start"
          type="search"
          id="default-search"
          label="Search"
          variant="outlined"
          placeholder="Search for User, Store or Game"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: { backgroundColor: "rgba(0, 0, 0, 0)" }, // ตั้งค่าพื้นหลังเป็นโปร่งใส
          }}
          sx={{
            flexGrow: 1,
            maxWidth: "400px", 
            marginLeft: 2,
          }}
          
        />
        </ThemeProvider>
        <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button
            variant="contained"
            sx={{ background: "white", color: "black", marginRight: "10px" }}
          >
            Register
          </Button>
          <Button
            variant="contained"
            sx={{ background: "red", color: "white", marginRight: "10px" }}
          >
            Login
          </Button>
          </Box>
          {/* <Button
            variant="contained"
            sx={{ background: "white", color: "black", marginRight: "10px" }}
          >
            Register
          </Button>
          <Button
            variant="contained"
            sx={{ background: "red", color: "white", marginRight: "10px" }}
          >
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
