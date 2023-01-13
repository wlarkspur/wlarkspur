import styled from "styled-components";
import styles from "../module.css/Root.module.css";
import React, { Component, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
`;

const NewContent = styled(motion.div)`
  width: 700px;
  height: 500px;
  background-color: rgba(245, 245, 220, 1);
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 600px;
  top: 100px;
  border-radius: 20px;
`;

const BoxWrapper = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 10px, repeat(6, 1fr);
  grid-gap: 1px;
  grid-auto-rows: 30px;
  font-size: 12px;
  font-family: Nunito;
  margin-right: 5px;
  background-color: whitesmoke;
  max-width: 80vw;
  left: 252px;
  top: 87px;
  position: absolute;
  z-index: -1;
`;

const BoxHeader = styled(motion.div)`
  display: flex;
  background-color: #000000;
  position: fixed;
  width: 100vw;
  left: 250px;
  top: 50px;
  height: 35px;
  align-items: center;
`;

const Button = styled(motion.button)`
  font-size: 13px;
  font-family: Nunito;
  font-weight: 600;
  margin-left: 10px;
  background-color: white;
  border-radius: 8px;
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
  background-color: transparent;
  left: 250px;
  top: 85px;
`;

function TrolleyStatus() {
  const [newItem, setNewItem] = useState(false);
  const toggleItem = () => setNewItem((prev) => !prev);
  const constraintsRef = useRef(null);
  return (
    <Wrapper>
      <BoxHeader>
        <Button onClick={toggleItem}>New</Button>
      </BoxHeader>
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
      <BoxLimit ref={constraintsRef}>
        {newItem ? (
          <NewContent
          /* drag
            dragConstraints={constraintsRef}
            transition={{ type: "spring", damping: 100, stiffness: 100 }} */
          >
            <InputBox>
              <InputSpan>
                <div>
                  {/* <span>Code</span> */}
                  <input placeholder="Code" type="text" />
                </div>
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
            </InputBox>
          </NewContent>
        ) : null}
      </BoxLimit>
    </Wrapper>
  );
}

export default TrolleyStatus;
