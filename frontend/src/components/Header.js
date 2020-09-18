import React from "react";

import Logo from "./Logo";
import Nav from "./Nav";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <Logo />
        <Nav />
      </div>
    );
  }
}

export default Header;
