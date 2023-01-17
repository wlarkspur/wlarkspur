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
  position: absolute;
  left: 250px;
  top: 60px;
  z-index: 0;
`;

const BoxHeader = styled(motion.div)`
  display: flex;
  background-color: rgba(9, 132, 227, 0.9);
  position: fixed;
  width: 100vw;
  left: 250px;
  top: 60px;
  height: 35px;
  align-items: center;
  z-index: 8;
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

const GreenDot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: #00ff0d;
  position: absolute;
  bottom: 10px;
  right: 15px;
  opacity: 0;
`;

function Code() {
  const [selected, setSelected] = useState("");
  const handleClick = (event: string) => {
    setSelected(event);
  };
  return (
    <>
      <BoxHeader />
      <CodeListBar>
        <CodeListUl>
          {db.code.map((code) => (
            <CodeListLi key={code}>
              <Link to="trolley" onClick={() => handleClick(code)}>
                {code}
                {selected === code && <GreenDot style={{ opacity: 1 }} />}
              </Link>
            </CodeListLi>
          ))}
        </CodeListUl>
      </CodeListBar>
      <Outlet />
    </>
  );
}

export default Code;
