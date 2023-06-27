import { useRouter } from "next/navigation";
import ButtonElement from "../buttonElement";
import Title from "../title";
import styles from "./styles.module.css";

type TitleHeaderProps = {
  page: string;
  type?: UsersType;
  buttonName?: string;
  hideButton?: boolean;
};

export default function TitleHeader({
  page,
  buttonName,
  hideButton,
  type,
}: TitleHeaderProps) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Title type="h4" label={page} />

      {!hideButton && (
        <ButtonElement
          name={buttonName ? buttonName : "Adicionar"}
          onClick={() => router.push(`/${type}s/form/create`)}
        />
      )}
    </div>
  );
}
