import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  RadioGroup,
  Radio,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import Header from "../components/header/Header";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Filter from "../components/Filter";
import SearchIcon from "@mui/icons-material/Search";
import CommentIcon from "@mui/icons-material/Comment"; // สำหรับปุ่มChat
import LoginIcon from "@mui/icons-material/Login"; // สำหรับปุ่มLogin
import * as React from "react";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsIcon from "@mui/icons-material/Directions";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CustomizedMenus from "../components/CustomizedMenus";

const items = [
  {
    id: 1,
    date: "วันอาทิตย์ที่ 21 กุมภาพันธ์  พ.ศ. 2566",
    date_meet: "วันอาทิตย์ที่ 24 มีนาคม  พ.ศ. 2566",
    time_meet: "14:00 น.",
    user: "วรปกร จารุศิริพจน์",
    title: "Werewolf",
    description: "เอา Werewolf ตัวเสริมมาด้วยก็ดีนะ เพราะเรามีแค่ตัวหลัก",
    num_people: 5,
    participant: 1,
    image:
      "https://promotions.co.th/wp-content/uploads/2018/06/Lazada-Boardgame-2.jpg",
    profile:
      "https://scontent.fkdt3-1.fna.fbcdn.net/v/t1.6435-9/128520468_708312693415305_7662898639450323422_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEvGCGsdcArxffFEo_CTsIpevnKI8_KTQd6-cojz8pNB_RFB8aAFgtrdC7tmNreCahg44tkLiiF9vuCBD2S08Ga&_nc_ohc=06HrMCDpFnQAX_L5JHQ&_nc_ht=scontent.fkdt3-1.fna&oh=00_AfDSpl61T1rgkXroZkwtbPfhyOj135BtuuxHV5vq6QKvuw&oe=662139F0",
  },
  {
    id: 2,
    date: "วันอาทิตย์ที่ 22 กุมภาพันธ์  พ.ศ. 2566",
    date_meet: "วันอาทิตย์ที่ 31 มีนาคม  พ.ศ. 2566",
    time_meet: "15:00 น.",
    user: "ณัฐวุฒิ แก้วมหา",
    title: "ซาเลม 1692",
    description: "เอา ซาเลม 1692 ตัวเสริมมาด้วยก็ดีนะ เพราะเรามีแค่ตัวหลัก",
    num_people: 5,
    participant: 1,
    image: "https://live.staticflickr.com/65535/49262314468_e307bd2a55_b.jpg",
    profile:
      "https://scontent.fkdt3-1.fna.fbcdn.net/v/t1.6435-1/78824629_754105141753619_2798639061311422464_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFU90ivfstrZd49tzWHSwMjupgnDH5k3-q6mCcMfmTf6lZmf-qHj5s_n9ss1zm2jNsx6fJ9_tu6kQ65UT2vBw3z&_nc_ohc=tfuFYRSMp5sAX9q39Vf&_nc_ht=scontent.fkdt3-1.fna&oh=00_AfCMTQoXBouCNmUSm8ZXA_Ok-NwYApyOx4LIOTMrNJamiA&oe=66213FCD",
  },
  {
    id: 3,
    date: "วันอาทิตย์ที่ 23 กุมภาพันธ์  พ.ศ. 2566",
    date_meet: "วันอาทิตย์ที่ 7 เมษายน  พ.ศ. 2566",
    time_meet: "16:00 น.",
    user: "นวพร บุญก่อน",
    title: "Spyfall",
    description: "เอา Spyfall ตัวเสริมมาด้วยก็ดีนะ เพราะเรามีแค่ตัวหลัก",
    num_people: 5,
    participant: 1,
    image:
      "https://whatsericplaying.files.wordpress.com/2016/01/spyfall-006.jpg?w=1180",
    profile:
      "https://scontent.fkdt3-1.fna.fbcdn.net/v/t39.30808-1/378952473_1340549569887729_5904332163830890289_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFZhBckdhxgmApYXf__pATiP5VPy7v8d6A_lU_Lu_x3oJCwvv1RT1TugLvXg-frV0_5G4HpSWnyJzBcQis0ea0C&_nc_ohc=ihE_H40GXJoAX-9PAiI&_nc_ht=scontent.fkdt3-1.fna&oh=00_AfBxLSO7QkNyzrbFH-KCOOkWhAPA8eeaRLkduwbqu92xBw&oe=65FE3930",
  },
];
function PostGames() {
  return (
    <div>
      {items.map((item) => (
        <Box
          sx={{
            borderColor: "grey.800",
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: 2,
            marginTop: 3,
            color: "white",
            padding: "16px",
            marginBottom: "16px",
            backgroundColor: "#121212", // Added to match the Figma background
          }}
        >
          <div className="flex items-center mb-3">
            <img
              src={item.profile}
              alt={item.name}
              style={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                marginRight: "16px",
              }}
            />
            <div className="text-left">
              <p className="font-bold">{item.user}</p>
              <p className="text-sm text-white">{item.date}</p>
            </div>
            {/* <IconButton
                    sx={{
                      color: "white", marginRight: "10px", marginLeft: "auto"
                    }}
                    aria-label="menu"
                  >
                    <MoreVertOutlinedIcon />
                  </IconButton> */}
            <IconButton
              sx={{
                color: "white",
                marginRight: "10px",
                marginLeft: "auto",
              }}
              aria-label="menu"
            >
              <CustomizedMenus />
            </IconButton>
          </div>

          <img
            src={item.image}
            alt={item.name}
            style={{ width: "100%", marginBottom: "16px" }}
          />
          <div className="text-left">
            <p className="font-bold mb-3">{item.title}</p>
            <p className="mb-3">วันที่เจอกัน: {item.date_meet}</p>
            <p className="mb-3">เวลาที่เจอกัน: {item.time_meet}</p>

            <br />
            <p className="mb-3">{item.description}</p>

            <p className="mb-3">
              สถานที่ : 43/5 ถนนราชดำเนิน (ถนนต้นสน)
              ประตูองค์พระปฐมเจดีย์ฝั่งตลาดโต้รุ่ง
            </p>
            {/* num_people
                  participant */}
            <p className="mb-3">
              for Number of peopleจะไป : {item.participant}/{item.num_people}
            </p>

            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<LoginIcon />}
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "darkred",
                    },
                  }}
                >
                  Join
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<CommentIcon />}
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid white",
                    "&:hover": {
                      backgroundColor: "#333333",
                    },
                  }}
                >
                  Chat
                </Button>
              </Grid>
            </Grid>
          </div>
        </Box>
      ))}
    </div>
  );
}

export default PostGames;
