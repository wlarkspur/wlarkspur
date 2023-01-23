import styled from "styled-components";
import styles from "../module.css/Root.module.css";
import React, { Component, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useScroll } from "framer-motion";

//<FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
`;

const NewContent = styled(motion.div)`
  width: 500px;
  height: 500px;
  background-color: rgba(245, 245, 220, 1);
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 1000px;
  /* top: 200px; */
  border-radius: 20px;
  border: 2px solid rgba(21, 75, 146, 0.8);
`;

const BoxWrapper = styled.div`
  display: grid;
  width: 70vw;
  max-width: 80vw;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 10px, repeat(6, 1fr);
  grid-gap: 1px;
  grid-auto-rows: 30px;
  font-size: 12px;
  font-family: Nunito;
  margin-right: 5px;
  background-color: whitesmoke;
  max-width: 80vw;
  left: 432px;
  /* transform: translateX(-50%); */
  top: 107px;
  background: cover;
  position: absolute;
  /* @media (max-width: 600px) {
    width: 90vw;
  } */
  z-index: -1;
`;

const BoxHeader = styled(motion.div)`
  display: flex;
  background-color: rgba(9, 132, 227, 1);
  position: fixed;
  width: 100vw;
  left: 250px;
  top: 60px;
  height: 35px;
  align-items: center;
  z-index: 8;
`;

const Button = styled(motion.button)`
  font-size: 13px;
  font-family: Nunito;
  font-weight: 600;
  margin-left: 10px;
  background-color: white;
  border-radius: 8px;
  z-index: 5;
  box-shadow: 0 0 2px 3px rgba(255, 255, 255, 0.2);
  :hover {
    background-color: black;
    color: whitesmoke;
  }
`;

const InputBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 400px;
  margin: 50px 120px;
  align-items: center;
`;

const InputSpan = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  input {
    width: 300px;
  }
  position: absolute;
  left: 30px;
  div {
    padding-right: 20px;
  }
`;

const Box = styled.div`
  display: grid;
  outline: #2c2727 solid 1px;
  justify-content: center;
  align-items: center;
  color: black;
  box-sizing: border-box;
  font-size: 12px;
  line-height: normal;
  background-color: white;
`;

const BoxLimit = styled(motion.div)`
  position: fixed;
  width: 80vw;
  height: 800px;
  background-color: red;
  left: 250px;
  top: 85px;
`;
const Xbutton = styled.div`
  width: 35px;
  height: 35px;
  font-size: 25px;
  top: 10px;
  right: 0;
  color: rgba(255, 0, 0, 0.7);
  position: absolute;
  cursor: pointer;
`;

function TrolleyStatus() {
  const [newItem, setNewItem] = useState(false);
  const { scrollY } = useScroll();
  const toggleItem = () => setNewItem((prev) => !prev);
  const exitNewItem = () => {
    if (newItem === false) return;
    setNewItem(false);
  };
  const handleEscape = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === `Escape`) {
      exitNewItem();
    }
    console.log(event.key);
  };
  const exitClick = () => {
    newItem && setNewItem(false);
  };
  /* const handleDrag = (event: any, data: any) => {
    setX(data.x);
    setY(data.y);
  };
  const handleClick = () => {
    setDrag(!drag);
  }; */
  /* useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []); */
  return (
    <Wrapper onKeyDown={handleEscape}>
      <BoxHeader>
        <Button onClick={toggleItem}>New</Button>
      </BoxHeader>
      <Outlet />
      <BoxWrapper>
        <Box className={styles.code}>Code</Box>
        <Box className={styles.codeContent}>01-UNIV-001</Box>
        <Box className={styles.type}>Type</Box>
        <Box className={styles.typeContent}>Universal</Box>
        <Box className={styles.details}>Details</Box>
        <Box className={styles.detailsContent}>
          4 floor, for universal purpose Trolley
        </Box>
        <Box className={styles.name}>Name</Box>
        <Box className={styles.nameContent}>
          Универсальная четырехпольная тележка
        </Box>
        <Box className={styles.photo}>Photo here!</Box>
        <Box className={styles.totalQty}>Total quantity</Box>
        <Box className={styles.totalQtyContent}>82</Box>
        <Box className={styles.description}>Description</Box>
        <Box className={styles.descriptionContent}>
          Trolley made for universal purpose in SKD/CKD Line
        </Box>
        <Box className={styles.parts}>Parts</Box>
        <Box className={styles.partsContent}>
          Carbon tank assy.Fuel tank with fuel pumpWashing liquid storage
          potEngine room fuse boxWind blockWind blockAir duct assy.Muffler-TCRR
          muffler assy.Boost pressure sensorOxgen sensorOxgen sensorEngine speed
          sensorOutdoor temperature sensorWind deflector-LHWind
          deflector-LHDriving shaft deflectorWind deflector-/RHWind
          deflector-/RHTweeterGround wire harness assy.Indoor floor harness
          assemblyPlugTrim capScrew cover,left doorScrew cover,right doorWire
          harness hole plug,outerside rearview mirrorLicense plateKlaxon
          assy.Wheel center coverOn-board tool kitsHanger IIRR bumper
          bracket-LHRR bumper bracket-RHWashing liquid storage pot bracketLeft
          rear door metal supportRight rear door metal supportLeft front door
          metal bracketRight front door metal bracketIntercooling
          bracketIntercooling bracketOxgen sensor bracketCarbon canister cut-off
          valve bracketTC bracketMiddle bracket,FRT bumperEngine trim cover
          assy.Fuel tank window coverFuel tank band IFuel tank band
          IIMultifunctional interfaceFRT door handle box pad-LHFRT door handle
          box pad-RHLeft block,FRT windshield lower trim panelLeft block,FRT
          windshield lower trim panelRight block,FRT windshield lower trim
          panelRight block,FRT windshield lower trim panelMain catalytic
          converter with exhaust front pipePre-catalytic converter assy.Trunk
          lid trim panelCarbon tank breather pipe II assy.Carbon canister
          breather tubeCarbon tank breather pipe assy.Heater water inlet
          pipeHeater water outlet pipeHeater water outlet pipeLow-temperature
          radiator water inlet pipeLow-temperature radiator water inlet
          pipeLow-temperature radiator water outlet pipeProtective film for
          right rear doorLeft front door protective film Left rear door
          protective filmRight front door protective film Battery trayBattery
          trayBattery trayDriving shaft-LHDriving shaft-RHGasketGasketGasketLeft
          rear door handle box gasketRight rear door handle box gasketRR
          trailing arm sub-assembly unit-LHRR trailing arm sub-assembly
          unit-RHHeat insulation plateHeat shield assy.Engine water outlet
          pipeEngine water outlet pipeCondenser upper sealing blockCondenser
          lower sealing blockDraft tube assy.Fuel vapor tube IIIPipeline
          assy-Compressor to condenserTrunk sealing stripLeft front door inner
          water retaining stripRight front door inner water retaining stripRight
          rear door inner water retaining stripLeft rear door inner water
          retaining stripWater retaining strip outside the left rear doorFront
          left door outside water retaining stripFuel tank window sealing
          stripEngine hood rear sealing stripWater retaining strip outside the
          right rear doorRight front door outside water retaining stripCarbon
          canister filterFRT door triangle assy.-LHFRT door triangle assy.-RHAir
          inlet hose assy.Fuel filling hoseRR brake hose assy-LHRR brake hose
          assy-RHMuffler upper sound insulation padAncillary wiper bladeMain
          wiper blade, wheel center cover, on-board tool kits, Hanger ||, RR
          Spiral spring cushon-upper/lower, screw seat, Battery pressing plate,
          trunk lamp assy
        </Box>
      </BoxWrapper>
      <AnimatePresence>
        {newItem ? (
          <NewContent
            style={{ top: scrollY.get() + 200 }}
            initial="initial"
            animate="animate"
            exit="exit"
            onKeyDown={handleEscape}
            transition={{ type: "tween" }}
          >
            <Xbutton onClick={exitClick}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </Xbutton>

            <InputBox /* onKeyDown={handleEscape} */>
              <InputSpan>
                {/* <span>Code</span> */}
                <input placeholder="Code" type="text" />

                <div>
                  {/* <span>Type</span> */}
                  <input placeholder="Type" type="text" />
                </div>
                <div>
                  {/* <span>Name</span> */}
                  <input placeholder="Name" type="text" />
                </div>
                <div>
                  {/* <span>Details</span> */}
                  <input placeholder="Details" type="text" />
                </div>

                <input type="submit" value="Add new trolley" />
              </InputSpan>
              <div>
                <section></section>
              </div>
            </InputBox>
          </NewContent>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default TrolleyStatus;
