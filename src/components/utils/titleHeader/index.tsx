import ButtonElement from "../buttonElement";
import Title from "../title";
import styles from "./styles.module.css";

type TitleHeaderProps = {
  page: string;
};

export default function TitleHeader({ page }: TitleHeaderProps) {
  return (
    <div className={styles.container}>
      <Title type="h4" label={page} />
      <ButtonElement name="Adicionar" />
    </div>
  );
}
