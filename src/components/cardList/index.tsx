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

export default function CardList({
  cardInfo,
  columnSpacing,
  type,
}: CardListProps) {
  const router = useRouter();

  const click = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.currentTarget.childElementCount > 1) {
      console.log("bateu");
      cardInfo?.length ? router.push(`/${type}s/${cardInfo[0].info}`) : null;
    }
    console.log(event);
  };
  return (
    <div onClick={click}>
      <CardContainer>
        <Grid
          container
          wrap="wrap"
          rowSpacing={4}
          columnSpacing={columnSpacing ? columnSpacing : 12}
        >
          {cardInfo?.map(({ label, info }, index) => {
            if (label !== "id")
              return (
                <Item
                  key={cardInfo[0].info + index}
                  label={label}
                  info={info}
                  type={type}
                  id={cardInfo[0].info}
                />
              );
          })}
        </Grid>
      </CardContainer>
    </div>
  );
}
