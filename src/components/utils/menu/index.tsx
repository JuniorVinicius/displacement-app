"use client";
import styles from "./styles.module.css";
import { GiCarSeat } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { BsPersonFill, BsFillCarFrontFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import MenuItems from "../menuItems";
import { useState } from "react";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";

export default function MenuContainer({ children }: MenuProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  const iconsStyles = { size: 24 };
  const MENU_ITEMS = [
    {
      path: "dashboard",
      name: "Dashboard",
      icon: <MdSpaceDashboard {...iconsStyles} />,
    },
    {
      path: "clientes",
      name: "Clientes",
      icon: <BsPersonFill {...iconsStyles} />,
    },
    {
      path: "condutores",
      name: "Condutores",
      icon: <GiCarSeat {...iconsStyles} />,
    },
    {
      path: "deslocamentos",
      name: "Deslocamentos",
      icon: <FaMapMarkedAlt {...iconsStyles} />,
    },
    {
      path: "veiculos",
      name: "Veículos",
      icon: <BsFillCarFrontFill {...iconsStyles} />,
    },
  ];

  return (
    <div className={styles.menuContainer}>
      <section
        className={`${styles.menuBar} ${
          menuIsOpen ? styles.active : styles.inactive
        }`}
      >
        <div className={styles.logoContainer}></div>
        <MenuItems menuItems={MENU_ITEMS} />
      </section>
      <section className={styles.mainContent}>
        <div className={styles.headerContainer}>
          <div
            onClick={() => setMenuIsOpen((prev) => !prev)}
            className={styles.button}
          >
            {menuIsOpen ? (
              <RiMenuFoldLine size={24} />
            ) : (
              <RiMenuUnfoldLine size={24} />
            )}
          </div>
        </div>
        <div>{children}</div>
      </section>
    </div>
  );
}
