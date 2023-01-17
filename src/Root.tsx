import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import styles from "./Root.module.css";
import Window from "./components/TrolleyStatus";
import { createBrowserRouter, Link, NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import TrolleyStatus from "./components/TrolleyStatus";
import ErrorPage from "./components/ErrorPage";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
@import url(https://fonts.googleapis.com/css?family=Nunito:400,700,300); 
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  font-family:'Nunito', monospace;
  background-color: white;
  color: black
}
a{
  text-decoration: none;
  color: inherit;
}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200vh;
`;

const Header = styled.div`
  width: 100vw;
  height: 60px;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span:last-child {
    justify-content: space-between;
    margin-right: 100px;
  }
  span:first-child {
    margin-right: 50px;
  }
  span {
    font-family: Nunito;
    font-weight: 700;
    right: 0;
  }
  div {
    display: flex;
    justify-content: flex-start;
    scale: 1;
    margin-left: 65px;
  }
  overflow: hidden;
  z-index: 10;
`;

const WrapperContent = styled.div`
  display: flex;
  position: relative;
`;

const SideBar = styled.div`
  min-width: 250px;
  height: 100vh;
  background-color: rgba(89, 102, 112, 0.8);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  box-shadow: 2px 0px 3px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 60px;
`;

const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 23px;
  font-weight: bold;
  color: white;
  margin: 10px auto;
  font-family: Nunito;
  span {
    width: 250px;
    padding: 0 50px;
    margin: 0 5px;
  }
  li {
    display: flex;
    margin: 5px;
    padding: 10px 0px;
    :hover {
      background-color: rgba(216, 220, 228, 0.8);
      color: #353131;
      font-family: Nunito;
      border-radius: 10px;
    }
  }
`;

function Root() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header>
        <div>
          <img src="http://www.youngsan.com/img/m_logo.png" />
        </div>

        <form action="">
          <span>JOIN</span>
          <span>LOG IN</span>
        </form>
      </Header>
      <WrapperContent>
        <SideBar>
          <NavMenu>
            <li>
              <Link to="/Code">
                <span>Trolley List</span>
              </Link>
            </li>
            <li>
              <Link to="/Model">
                <span>Model</span>
              </Link>
            </li>
            <li>
              <Link to="/Parts">
                <span>Parts</span>
              </Link>
            </li>
          </NavMenu>
        </SideBar>

        <Outlet />
      </WrapperContent>
    </Wrapper>
  );
}

export default Root;
