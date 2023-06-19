"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { useState } from "react";

export default function MenuItems({ menuItems }: MenuItems) {
  const [selectedItem, setSelectedItem] = useState("");
  return (
    <ul className={styles.linksContainer}>
      {menuItems?.map(({ path, name, icon }) => {
        return (
          <li
            key={path}
            onClick={() => setSelectedItem(path)}
            className={selectedItem === path ? styles.active : ""}
          >
            {icon}
            <Link href="">{name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
