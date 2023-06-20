"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { useCallback, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function MenuItems({ menuItems }: MenuItems) {
  const router = useRouter();
  const params = usePathname();
  const initialItem = params.length > 1 ? params : `/${menuItems[0].path}`;
  const [selectedItem, setSelectedItem] = useState(initialItem);

  const selectPage = useCallback(
    (path: string) => {
      setSelectedItem(path);
      router.push(path);
    },
    [router]
  );

  return (
    <ul className={styles.linksContainer}>
      {menuItems?.map(({ path, name, icon }) => {
        return (
          <li
            key={path}
            onClick={() => selectPage(`/${path}`)}
            className={selectedItem === `/${path}` ? styles.active : ""}
          >
            {icon}
            <span>{name}</span>
          </li>
        );
      })}
    </ul>
  );
}
