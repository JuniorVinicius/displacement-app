"use client";
import styles from "./styles.module.css";
import { useCallback, useEffect, useState } from "react";
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

  useEffect(() => {
    setSelectedItem(params);
  }, [params]);

  return (
    <ul className={styles.linksContainer}>
      {menuItems?.map(({ path, name, icon }) => {
        const isActive = selectedItem.includes(`/${path}`);
        return (
          <li
            key={path}
            onClick={() => selectPage(`/${path}`)}
            className={
              isActive ||
              (`/${path}` === `/${menuItems[0].path}` && params === "/")
                ? styles.active
                : ""
            }
          >
            {icon}
            <span>{name}</span>
          </li>
        );
      })}
    </ul>
  );
}
