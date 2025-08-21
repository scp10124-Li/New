import { Menu } from "semantic-ui-react";

function Header() {
  return (
    <Menu>
      <Menu.Item name="home" />
      <Menu.Item name="messages" />
      <Menu.Item name="friends" />
    </Menu>
  );
}

export default Header;
