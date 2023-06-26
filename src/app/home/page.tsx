"use client";

import ImageCard from "@/components/imageCard";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Grid
        container
        wrap="wrap"
        columnSpacing={15}
        justifyContent="center"
        alignItems="center"
        rowSpacing={2}
        height="90vh"
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Grid item>
          <ImageCard
            imagePath="/images/clients.webp"
            label="Clientes"
            onClick={() => router.push("/clients")}
          />
        </Grid>
        <Grid item>
          <ImageCard
            imagePath="/images/drivers.webp"
            label="Condutores"
            onClick={() => router.push("/drivers")}
          />
        </Grid>
        <Grid item>
          <ImageCard
            imagePath="/images/displacement.webp"
            label="Deslocamentos"
            onClick={() => router.push("/displacements")}
          />
        </Grid>
        <Grid item>
          <ImageCard
            imagePath="/images/vehicles.webp"
            label="Veículos"
            onClick={() => router.push("/vehicles")}
          />
        </Grid>
      </Grid>
    </>
  );
}
