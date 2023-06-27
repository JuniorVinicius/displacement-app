"use client";
import { Grid } from "@mui/material";
import { CardContainer } from "../utils";
import Item from "../utils/item";
import { useRouter } from "next/navigation";

type CardListProps = {
  cardInfo?: ItemsProps[];
  columnSpacing?: number;
  type: UsersType;
};

export default function CardList({ cardInfo, columnSpacing, type }: CardListProps) {
  const router = useRouter();
  return (
    <>
      <CardContainer
        onClick={() =>
          cardInfo?.length ? router.push(`/${type}s/${cardInfo[0].info}`) : null
        }
      >
        <Grid
          container
          wrap="wrap"
          rowSpacing={4}
          columnSpacing={columnSpacing ? columnSpacing : 12}
        >
          {cardInfo?.map(({ label, info }, index) => {
            if (label !== "id")
              return <Item key={index + label} label={label} info={info} />;
          })}
        </Grid>
      </CardContainer>
    </>
  );
}
