import React from 'react'
import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import Discord from "../../assets/logoCorp/Discord.png";
import Instagram from "../../assets/logoCorp/Instagram.png";
import Telegram from "../../assets/logoCorp/Telegram.png";
import TelegramBot from "../../assets/logoCorp/TelegaBot.png";
import TicTok from "../../assets/logoCorp/TikToc.png";
import ModalAPIChoice from './ModalAPIChoice';

function LinksOnHomePage() {

  return (
    <Container>
      <Box sx={{
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
    flexDirection: "row"
    }}>
      <Button className="button">
        <a href='https://t.me/krivbasslions'>
        <img src={Telegram} className="button-logo" style={{
    height: 100,
    width: 100,
    margin: 10,
    zindex: 1,
        }}></img>
        </a>
      </Button>
      <Button className="button">
        <a href='https://t.me/KrivbassLions_bot'>
        <img src={TelegramBot} style={{
    height: 100,
    width: 140,
    margin: 10,
    zindex: 1,
        }}></img>
        </a>
      </Button>
      <Button className="button">
        <a href='https://www.tiktok.com/@krivbass.lions'>
        <img src={TicTok} style={{
    height: 100,
    width: 100,
    margin: 10,
    zindex: 1,
        }}></img>
        </a>
      </Button>
        <ModalAPIChoice />
      <Button className="button">
        <a href='https://www.instagram.com/krivbasslions/?hl=ru'>
        <img src={Instagram} style={{
    height: 100,
    width: 100,
    margin: 10,
    zindex: 1,
        }}></img>
        </a>
      </Button>
      <Button className="button">
        <a href='https://discord.gg/CW6CeBMft5'>
        <img src={Discord} style={{
    height: 100,
    width: 130,
    margin: 10,
    zindex: 1,
        }}></img>
        </a>
      </Button>
      </Box>
    </Container>
  );
}

export default LinksOnHomePage