import CardList from "@/components/cardList";
import styles from "./styles.module.css";
type ScrollListProps = {
  data?: ItemsProps[][];
  columnSpacing?: number;
  type: UsersType;
};

export default function ScrollList({ data, columnSpacing, type }: ScrollListProps) {
  return (
    <div className={styles.container}>
      {data?.map((item, index) => {
        return <CardList key={index} cardInfo={item} columnSpacing={columnSpacing} type={type}/>;
      })}
    </div>
  );
}
