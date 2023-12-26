import { Stack, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ListingImage from "../assets/listing-results.png";
import AffordabilityImage from "../assets/affordability-screen.png";
import MortgageImage from "../assets/mortgage-screen.png";
import ResaleImage from "../assets/resale-hdb-screen.png";

const Projects = () => {
  const projects = [
    {
      imgSrc: ListingImage,
      imgAlt: "listing results",
      title: "Listing Results Page",
      description:
        "Featuring clickable listing cards, search bar, sorting, pagination, filter options and url search parameters using NextJS and MUI.",
      link: "https://ohmyhome.com/en-sg/listing-results/",
    },
    {
      imgSrc: AffordabilityImage,
      imgAlt: "affordability calculator",
      title: "Affordability Calculator",
      description:
        "Featuring user input with debounce saving, summary and a visual pie chart breakdown using NextJS, MUI and Recharts.",
      link: "https://ohmyhome.com/en-sg/homer",
    },
    {
      imgSrc: MortgageImage,
      imgAlt: "mortgage calculator",
      title: "Mortgage Calculator",
      description:
        "Featuring user input for multiple options with debounce saving, summary and a visual schedule breakdown using NextJS and MUI.",
      link: "https://ohmyhome.com/en-sg/homer",
    },
    {
      imgSrc: ResaleImage,
      imgAlt: "resale hdb page",
      title: "Resale HDB Page",
      description: "Mobile Responsive Webpage using NextJS and Tailwind CSS.",
      link: "https://ohmyhome.com/en-sg/resale-hdb",
    },
  ];
  return (
    <Stack
      id="Projects"
      p={{ xs: "16px", md: "100px" }}
      sx={{ backgroundColor: "#1d3557" }}
      alignItems="center"
    >
      <Typography
        variant="h2"
        color="#FFF"
        fontWeight={700}
        fontSize={{ xs: 32, md: 42 }}
        sx={{ mb: 4 }}
      >
        Projects
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        flexWrap="wrap"
        gap={4}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
            link={project.link}
          />
        ))}
      </Stack>
      <Typography
        variant="subtitle1"
        color="#FFF"
        fontSize={{ xs: 12, md: 14 }}
        sx={{ mt: 10 }}
      >
        Copyright &#169; 2023 Mindy Tan. All Rights Reserved
      </Typography>
    </Stack>
  );
};

export default Projects;
