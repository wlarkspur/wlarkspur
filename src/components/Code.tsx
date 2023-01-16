import { motion } from "framer-motion";
import styled from "styled-components";
import { useQuery } from "react-query";
import db from "../db";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const CodeListBar = styled(motion.div)`
  width: 180px;
  height: 200vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 250px;
  top: 60px;
`;

const CodeListUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  margin-top: 40px;
  font-weight: 700;
  font-size: 17px;
  font-family: Nunito;
`;
const CodeListLi = styled.li`
  color: white;
  margin: 5px 10px;
  padding: 2px 5px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    color: black;
    scale: 1.1;
  }
  position: relative;
`;

const RedDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #1eff00;
  position: absolute;
  bottom: 10px;
  right: 35px;
`;

function Code() {
  const [redDot, setRedDot] = useState();
  return (
    <>
      <CodeListBar>
        <CodeListUl>
          <CodeListLi>
            <Link to="trolley">{db.code[0]}</Link>
            <RedDot />
          </CodeListLi>
          <CodeListLi>{db.code[1]}</CodeListLi>
          <CodeListLi>{db.code[2]}</CodeListLi>
          <CodeListLi>{db.code[3]}</CodeListLi>
          <CodeListLi>{db.code[4]}</CodeListLi>
        </CodeListUl>
      </CodeListBar>
      <Outlet />
    </>
  );
}

export default Code;
