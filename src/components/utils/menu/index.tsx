"use client";
import styles from "./styles.module.css";
import { GiCarSeat } from "react-icons/gi";
import { BsPersonFill, BsFillCarFrontFill } from "react-icons/bs";
import { FaMapMarkedAlt, FaHome } from "react-icons/fa";
import MenuItems from "../menuItems";
import { useState } from "react";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import Title from "../title";

export default function MenuContainer({ children }: MenuProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const iconsStyles = { size: 24 };
  const MENU_ITEMS = [
    {
      path: "home",
      name: "Home",
      icon: <FaHome {...iconsStyles} />,
    },
    {
      path: "clients",
      name: "Clientes",
      icon: <BsPersonFill {...iconsStyles} />,
    },
    {
      path: "drivers",
      name: "Condutores",
      icon: <GiCarSeat {...iconsStyles} />,
    },
    {
      path: "displacements",
      name: "Deslocamentos",
      icon: <FaMapMarkedAlt {...iconsStyles} />,
    },
    {
      path: "vehicles",
      name: "Veículos",
      icon: <BsFillCarFrontFill {...iconsStyles} />,
    },
  ];

  return (
    <div className={styles.menuContainer}>
      <div
        className={`${styles.menuBar} ${
          menuIsOpen ? styles.active : styles.inactive
        }`}
      >
        <div className={styles.buttonContainer}>
          <div
            onClick={() => setMenuIsOpen((prev) => !prev)}
            className={`${styles.button} ${styles.innerButton}`}
          >
            {menuIsOpen ? (
              <RiMenuFoldLine size={24} />
            ) : (
              <RiMenuUnfoldLine size={24} />
            )}
          </div>
        </div>
        <div className={styles.logoContainer}>
          <FaMapMarkedAlt size={68} color="var(--main-logo-color)" />
          <Title type="h6" label="Displacement App" />
        </div>
        <MenuItems menuItems={MENU_ITEMS} />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.headerContainer}>
          <div
            onClick={() => setMenuIsOpen((prev) => !prev)}
            className={`${styles.button} ${styles.defaultButton}`}
          >
            {menuIsOpen ? (
              <RiMenuFoldLine size={24} />
            ) : (
              <RiMenuUnfoldLine size={24} />
            )}
          </div>
        </div>
        <div className={styles.contentContainer}>{children}</div>
      </div>
    </div>
  );
}
