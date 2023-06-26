import ButtonElement from "../buttonElement";
import Title from "../title";
import styles from "./styles.module.css";

type TitleHeaderProps = {
  page: string;
  buttonName?: string
};

export default function TitleHeader({ page, buttonName }: TitleHeaderProps) {
  return (
    <div className={styles.container}>
      <Title type="h4" label={page} />
      <ButtonElement name={buttonName ? buttonName : "Adicionar"} />
    </div>
  );
}
