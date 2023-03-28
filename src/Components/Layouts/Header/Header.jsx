import React from "react";
import { Logo } from "../../UI/Logo/Logo";
import { Search } from "../../UI/Search/Search";
import { Shopping } from "../../UI/Shopping/Shopping";
import { ContactUS } from "../../UI/ContactUS/ContactUS";
import { User } from "../../UI/User/User";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <div className="containerHeader">
        <Logo />
        <Search />
        <Shopping />
        <ContactUS/>
        <User />
      </div>
    </>
  );
};
