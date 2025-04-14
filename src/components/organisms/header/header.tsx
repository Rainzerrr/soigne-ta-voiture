"use client";
import { FC, useState } from "react";
import NavItem, { NavItemProps } from "../../atoms/nav-item/nav-item";
import Image from "next/image";
import { Icon } from "../../atoms/icon/icon";
import useWidth from "@/hooks/useWidth";
import "./header.scss";

interface HeaderProps {
  logoUrl: string;
  navItems: NavItemProps[];
}

const Header: FC<HeaderProps> = ({ logoUrl, navItems }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { isOnDesktop } = useWidth();
  const MenuDrawer = (
    <div
      className={`header__menu-drawer ${
        isMenuOpened ? "header__menu-drawer--visible" : ""
      }`}
    >
      <div className="header__menu-drawer__icon">
        <Icon name="close" onClick={() => setIsMenuOpened(!isMenuOpened)} />
      </div>
      <div className="header__nav-items">
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>
      <div className="header__account-btns">
        <NavItem label="INSCRIPTION" url="/" variant="outlined" fullwidth />
        <NavItem label="CONNEXION" url="/" variant="filled" fullwidth />
      </div>
    </div>
  );

  return (
    <div className="header">
      <div className="header__top-section">
        <div className="header__logo-wrapper">
          <Image className="header__logo" src={logoUrl} fill alt="logo" />
        </div>

        <div className="header__nav-items show-desktop">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>

        <div className="header__account-btns show-desktop">
          <NavItem label="INSCRIPTION" url="/" variant="outlined" fullwidth />
          <NavItem label="CONNEXION" url="/" variant="filled" fullwidth />
        </div>

        {!isOnDesktop && (
          <Icon name="menu" onClick={() => setIsMenuOpened(!isMenuOpened)} />
        )}
      </div>

      {!isOnDesktop && MenuDrawer}

      <div
        className={`header__menu-drawer__overlay ${
          isMenuOpened && !isOnDesktop
            ? "header__menu-drawer__overlay--visible"
            : ""
        }`}
        onClick={() => setIsMenuOpened(!setIsMenuOpened)}
      />
    </div>
  );
};

export default Header;
