import { Typography } from "@mui/material";
import styles from "./styles.module.css";
type ErrorLabelProps<T> = {
  error: T;
  message: string;
};
export default function ErrorLabel<T>({ error, message }: ErrorLabelProps<T>) {
  return (
    <>
      {error && (
        <div className={styles.container}>
          <Typography>{message}</Typography>
        </div>
      )}
    </>
  );
}
