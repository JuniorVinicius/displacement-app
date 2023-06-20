import styles from "./styles.module.css";

type CardLabelProp = {
  status: "valid" | "invalid";
};

export default function CardLabel({ status }: CardLabelProp) {
  return (
    <div className={styles[status]}>
      {status === "valid" ? "Válido" : "Inválido"}
    </div>
  );
}
