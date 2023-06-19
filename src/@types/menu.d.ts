type MenuProps = {
  children: ReactNode;
};

interface MenuItemsProps {
  path: string;
  name: string;
  icon: JSX.Element;
}

type MenuItems = {
  menuItems: MenuItemsProps[];
};
