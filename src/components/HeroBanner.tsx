import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BannerImage from "../assets/federico-beccari-L8126OwlroY-unsplash.jpeg";

const HeroBanner = () => {
  const toRotate = ["Mindy", "Web Developer"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <Paper
      className="sections"
      sx={{
        backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.5), rgba(44, 62, 80, 0.5)), url(${BannerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        borderRadius: 0,
        zIndex: -1,
      }}
    >
      <Stack
        direction="column"
        alignItems="start"
        px={{ xs: 4, md: 30 }}
        pt={30}
      >
        <Box p="4px 8px" borderRadius="8px" mb={2} sx={{ background: "#FFF" }}>
          <Typography
            variant="subtitle1"
            color="#10A5CB"
            fontWeight={700}
            fontSize={{ xs: 12, md: 14 }}
          >
            Portfolio
          </Typography>
        </Box>
        <Stack alignItems="start" height={{ xs: "45vh", md: "50vh" }}>
          <Typography
            variant={"h1"}
            fontWeight={700}
            fontSize={{ xs: 42, md: 90 }}
            sx={{
              background:
                "linear-gradient(265deg, #68D7ED -4.65%, #10A5CB 47.13%, #0384B0 100%)",
              backgroundClip: "text",
              textFillColor: "transparent",
              display: "inline",
            }}
          >
            Hello, I'm
          </Typography>
          <Typography
            variant="h1"
            color="#FFF"
            fontWeight={700}
            fontSize={{ xs: 42, md: 90 }}
          >
            {text}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        px={{ xs: 4, md: 30 }}
        justifyContent={{ xs: "center", md: "start" }}
      >
        <IconButton
          href="https://github.com/mindytan"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon sx={{ color: "#FFF" }} />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/mindy-tan917"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon sx={{ color: "#FFF" }} />
        </IconButton>
      </Stack>
      <Box px={{ xs: 4, md: 30 }}>
        <ScrollLink to="About" smooth={true} duration={800}>
          <Button startIcon={<ArrowCircleDownIcon />} sx={{ color: "#FFF" }}>
            <Typography variant="subtitle1" color="#FFF">
              Learn more about what I do
            </Typography>
          </Button>
        </ScrollLink>
      </Box>
    </Paper>
  );
};

export default HeroBanner;
