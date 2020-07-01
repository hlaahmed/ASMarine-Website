
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import Image from "react-bootstrap/Image";
// reactstrap components
import {
  Collapse,
  Card,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="sm"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="Coded By Alaa with lots of caffiene."
            tag={Link}
          >
            <a href="#pablo" onClick={(e) => e.preventDefault()}>

              <Image
                alt="..."
                src={require("assets/img/logo.jpg")} roundedCircle
              />
            </a>
          </NavbarBrand>

          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
      </Container>
      <Container>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav className="ml-auto mr-auto text-center" navbar horizontal>
            <NavItem>
              <NavLink to="/index" tag={Link}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/index" tag={Link}>
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/index" tag={Link}>
                Hall Of Fame
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/auv" tag={Link}>
                AUV Overview
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/index" tag={Link}>
                News
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/index" tag={Link}>
                Teams
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/index" tag={Link}>
                Publications
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/index" tag={Link}>
                Sponsors
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/index" tag={Link}>
                Robosub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/index" tag={Link}>
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
      <Container className="float-right">
        <Nav horizontal>
          <NavItem>
            <NavLink
              data-placement="bottom"
              href="https://twitter.com/asmarine20"
              target="_blank"
              title="Follow us on Twitter"
            >
              <i className="fa fa-twitter" />
              <p className="d-lg-none">Twitter</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              data-placement="bottom"
              href="https://www.facebook.com/ASMARINE20/"
              target="_blank"
              title="Like us on Facebook"
            >
              <i className="fa fa-facebook-square" />
              <p className="d-lg-none">Facebook</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              data-placement="bottom"
              href="https://www.instagram.com/asmarine20/"
              target="_blank"
              title="Follow us on Instagram"
            >
              <i className="fa fa-instagram" />
              <p className="d-lg-none">Instagram</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              data-placement="bottom"
              href="https://www.github.com/CreativeTimOfficial?ref=creativetim"
              target="_blank"
              title="Star on GitHub"
            >
              <i className="fa fa-github" />
              <p className="d-lg-none">GitHub</p>
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
