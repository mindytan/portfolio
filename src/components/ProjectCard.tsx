import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imgSrc,
  imgAlt,
  link,
}) => {
  return (
    <a href={link} style={{ textDecoration: "none", display: "block" }}>
      <Card
        sx={{
          maxWidth: 345,
          borderColor: "black",
          borderRadius: "16px",
          position: "relative",
          cursor: "pointer",
          "&:hover::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 1,
          },
        }}
      >
        <CardActionArea>
          <CardMedia component="img" height="200" image={imgSrc} alt={imgAlt} />
          <CardContent sx={{ backgroundColor: "#000", height: 100 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#FFF"
              textAlign="start"
            >
              {title}
            </Typography>
            <Typography variant="body2" color="#FFF" textAlign="start">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ bgcolor: "#000" }}>
          <Button
            size="small"
            color="primary"
            href={link}
            sx={{ color: "#FFF" }}
          >
            Visit
          </Button>
        </CardActions>
      </Card>
    </a>
  );
};

export default ProjectCard;
