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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left", color: "inherit" }} // เปลี่ยนสีข้อความเป็นสีขาว
          >
            DiceDreams
          </Typography>
          <ThemeProvider theme={darkTheme}>
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
            marginRight: 2,
          }}
          
        />
        </ThemeProvider>
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
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
