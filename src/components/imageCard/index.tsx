"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./styles.module.css";
type ImageCardProps = {
  imagePath: string;
  label: string;
  alt?: string;
  onClick?: () => void;
};

export default function ImageCard({
  imagePath,
  label,
  alt,
  onClick,
}: ImageCardProps) {
  return (
    <Card className={styles.container} onClick={onClick}>
      <CardMedia component="img" height="180" image={imagePath} alt={alt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {label}
        </Typography>
        <CardActions>
          <Button
            size="small"
            sx={{ color: "var(--main-button-color)" }}
            onClick={onClick}
          >
            Abrir
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
