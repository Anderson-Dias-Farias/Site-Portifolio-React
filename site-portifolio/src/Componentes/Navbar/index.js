import React, { useEffect } from "react";
import {
  Containers,
  Head,
  Logo,
  Navs,
  Menu,
  Hamburguer,
  Icons,
  Button,
} from "./styles";
import MenuMobile from "./NavMobile";

import { useState } from "react";
import logo from "./img/logo.svg";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  return (
    <>
      <Containers scrolled={scrolled} menuVisible={menuVisible}>
        <MenuMobile menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
        <Head>
          <Logo src={logo} />

          <Navs>
            <Menu>Home</Menu>
            <Menu>Skills</Menu>
            <Menu>Project</Menu>
            <Icons>
              <FaGithub size={30} />
              <FaInstagram size={30} />
              <FaWhatsapp size={30} />
            </Icons>
            <Button>Vamos conectar</Button>
          </Navs>
          <Hamburguer>
            <GiHamburgerMenu
              size={40}
              onClick={() => setMenuVisible(!menuVisible)}
            />
          </Hamburguer>
        </Head>
      </Containers>
    </>
  );
};

export default NavBar;
