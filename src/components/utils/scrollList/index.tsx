import CardList from "@/components/cardList";
import styles from "./styles.module.css";
type ScrollListProps = {
  data?: ItemsProps[][];
};

export default function ScrollList({ data }: ScrollListProps) {
  return (
    <div className={styles.container}>
      {data?.map((item, index) => {
        return <CardList key={index} cardInfo={item} />;
      })}
      {data?.map((item, index) => {
        return <CardList key={index} cardInfo={item} />;
      })}
      {data?.map((item, index) => {
        return <CardList key={index} cardInfo={item} />;
      })}
    </div>
  );
}
