import { Menu,Search } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Menu>
      <Menu.Item as = {Link} to="/" name="首頁" />
      <Menu.Item name="訊息" />
      <Menu.Item name="好友" />
      <Search />
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/Signin" name="註冊/登入"/>
      </Menu.Menu>
    </Menu>
  );
}

export default Header;
