type MenuProps = {
  children: JSX.Element;
};

interface MenuItemsProps {
  path: string;
  name: string;
  icon: JSX.Element;
}

type MenuItems = {
  menuItems: MenuItemsProps[];
};
