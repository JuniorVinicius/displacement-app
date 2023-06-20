"use client";
import { Grid } from "@mui/material";
import { CardContainer } from "../utils";
import Item from "../utils/item";

type ItemsProps = {
  label: string;
  info: string;
};

type CardListProps = {
  cardInfo?: ItemsProps[];
};

export default function CardList({ cardInfo }: CardListProps) {
  return (
    <CardContainer>
      <Grid
        container
        rowSpacing={4}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {cardInfo?.map(({ label, info }, index) => {
          return <Item key={index + label} label={label} info={info} />;
        })}
      </Grid>
    </CardContainer>
  );
}
