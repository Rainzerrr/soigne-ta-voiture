"use client";
import { FC, useEffect, useState } from "react";
import NavItem, { NavItemProps } from "../../atoms/nav-item/nav-item";
import Image from "next/image";
import { Icon } from "../../atoms/icon/icon";
import useWidth from "@/hooks/useWidth";
import "./header.scss";
import ContentWrapper from "@/utils/page-wrapper/content-wrapper";
import Link from "next/link";

interface HeaderProps {
  logoUrl: string;
  navItems: NavItemProps[];
}

const Header: FC<HeaderProps> = ({ logoUrl, navItems }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [hasScrolledEnough, setHasScrolledEnough] = useState();
  const { isOnDesktop } = useWidth();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 50;
          //@ts-ignore
          setHasScrolledEnough((prev) => {
            if (prev !== scrolled) return scrolled;
            return prev; // évite le setState si la valeur ne change pas
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMenuOpened]);

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
          <NavItem
            key={item.label}
            {...item}
            onClick={() => {
              item.onClick();
              setIsMenuOpened(false);
            }}
          />
        ))}
      </div>
      <div className="header__account-btns">
        {/* <NavItem
              label="INSCRIPTION"
              url="/"
              variant={hasScrolledEnough ? "tertiary" : "secondary"}
              fullwidth
              onClick={() => setIsMenuOpened(false)}
            /> */}
        <NavItem
          label="COMMENCER"
          url="/rendez-vous/packages"
          variant="filled"
          fullwidth
          onClick={() => setIsMenuOpened(false)}
        />
      </div>
    </div>
  );

  return (
    <div className={`header ${hasScrolledEnough ? "header--scrolled" : ""}`}>
      <ContentWrapper
        className={hasScrolledEnough ? "header__box-shadow" : ""}
        showBackgroundColor={hasScrolledEnough}
      >
        <div
          className={`header__top-section ${
            hasScrolledEnough ? "header__top-section--scrolled" : ""
          }`}
        >
          <div className="header__logo-wrapper">
            <Link href="/">
              <Image className="header__logo" src={logoUrl} fill alt="logo" />
            </Link>
          </div>

          <div className="header__nav-items show-desktop">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                {...item}
                color={hasScrolledEnough ? "dark" : "light"}
                onClick={() => setIsMenuOpened(false)}
              />
            ))}
          </div>

          <div className="header__account-btns show-desktop">
            {/* <NavItem
              label="INSCRIPTION"
              url="/"
              variant={hasScrolledEnough ? "tertiary" : "secondary"}
              fullwidth
              onClick={() => setIsMenuOpened(false)}
            /> */}
            <NavItem
              label="COMMENCER"
              url="/rendez-vous/packages"
              variant="filled"
              fullwidth
              onClick={() => setIsMenuOpened(false)}
            />
          </div>

          {!isOnDesktop && (
            <Icon
              name="menu"
              onClick={() => setIsMenuOpened(!isMenuOpened)}
              fill={hasScrolledEnough ? "black" : "white"}
              stroke={hasScrolledEnough ? "black" : "white"}
            />
          )}
        </div>
      </ContentWrapper>

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
