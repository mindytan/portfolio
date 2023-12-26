import { Box, Stack, Typography } from "@mui/material";
import AboutImage from "../assets/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg";

const About = () => {
  return (
    <Box
      id="About"
      p={{ xs: "16px", md: "100px" }}
      sx={{ backgroundColor: "#000" }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={{ xs: 4, md: 8 }}
      >
        <Box width={{ xs: "100%", md: "300px" }}>
          <img
            src={AboutImage}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "350px",
              objectFit: "cover",
            }}
          />
        </Box>
        <Stack width={{ xs: "100%", md: "400px" }} alignItems="start">
          <Typography
            variant="h4"
            color="#FFF"
            fontWeight={700}
            mb={3}
            fontSize={{ xs: 32, md: 42 }}
          >
            About Me
          </Typography>
          <Typography
            variant="subtitle1"
            color="#FFF"
            fontSize={14}
            mb={2}
            textAlign="start"
          >
            Embarked on a transformative journey from the world of numbers to
            the realm of pixels, I'm Mindy – a mid-career switcher who traded
            spreadsheets for code. With a background in accounting, I found my
            true passion in the art of web development.
          </Typography>
          <Typography
            variant="subtitle1"
            color="#FFF"
            fontSize={14}
            mb={2}
            textAlign="start"
          >
            Armed with two years of hands-on experience in front-end web
            development, I have experience in Javascript, React, Next.js,
            Zustand, Material UI, Tailwind CSS, WordPress, HTML, CSS and Git.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;
