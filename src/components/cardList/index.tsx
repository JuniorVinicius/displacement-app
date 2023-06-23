"use client";
import { Grid } from "@mui/material";
import { CardContainer } from "../utils";
import Item from "../utils/item";

type CardListProps = {
  cardInfo?: ItemsProps[];
  columnSpacing?: number
};

export default function CardList({ cardInfo, columnSpacing }: CardListProps) {
  return (
    <CardContainer>
      <Grid container wrap="wrap" rowSpacing={4} columnSpacing={columnSpacing ? columnSpacing : 12}>
        {cardInfo?.map(({ label, info }, index) => {
          return <Item key={index + label} label={label} info={info} />;
        })}
      </Grid>
    </CardContainer>
  );
}
