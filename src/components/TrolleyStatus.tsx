import styled from "styled-components";
import styles from "../module.css/Root.module.css";
import React, { Component } from "react";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 10px, repeat(6, 1fr);
  gap: 1px;
  grid-auto-rows: 30px;
  font-size: 12px;
  font-family: Nunito;
  max-height: 100vh;
`;

const Box = styled.div`
  display: grid;
  outline: 1px solid grey;
  justify-content: center;
  align-items: center;
  color: black;
  box-sizing: border-box;
  font-size: 12px;
  line-height: normal;
`;

function TrolleyStatus() {
  return (
    <Wrapper>
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
        assy.Wheel center coverOn-board tool kitsHanger IIRR bumper bracket-LHRR
        bumper bracket-RHWashing liquid storage pot bracketLeft rear door metal
        supportRight rear door metal supportLeft front door metal bracketRight
        front door metal bracketIntercooling bracketIntercooling bracketOxgen
        sensor bracketCarbon canister cut-off valve bracketTC bracketMiddle
        bracket,FRT bumperEngine trim cover assy.Fuel tank window coverFuel tank
        band IFuel tank band IIMultifunctional interfaceFRT door handle box
        pad-LHFRT door handle box pad-RHLeft block,FRT windshield lower trim
        panelLeft block,FRT windshield lower trim panelRight block,FRT
        windshield lower trim panelRight block,FRT windshield lower trim
        panelMain catalytic converter with exhaust front pipePre-catalytic
        converter assy.Trunk lid trim panelCarbon tank breather pipe II
        assy.Carbon canister breather tubeCarbon tank breather pipe assy.Heater
        water inlet pipeHeater water outlet pipeHeater water outlet
        pipeLow-temperature radiator water inlet pipeLow-temperature radiator
        water inlet pipeLow-temperature radiator water outlet pipeProtective
        film for right rear doorLeft front door protective film Left rear door
        protective filmRight front door protective film Battery trayBattery
        trayBattery trayDriving shaft-LHDriving shaft-RHGasketGasketGasketLeft
        rear door handle box gasketRight rear door handle box gasketRR trailing
        arm sub-assembly unit-LHRR trailing arm sub-assembly unit-RHHeat
        insulation plateHeat shield assy.Engine water outlet pipeEngine water
        outlet pipeCondenser upper sealing blockCondenser lower sealing
        blockDraft tube assy.Fuel vapor tube IIIPipeline assy-Compressor to
        condenserTrunk sealing stripLeft front door inner water retaining
        stripRight front door inner water retaining stripRight rear door inner
        water retaining stripLeft rear door inner water retaining stripWater
        retaining strip outside the left rear doorFront left door outside water
        retaining stripFuel tank window sealing stripEngine hood rear sealing
        stripWater retaining strip outside the right rear doorRight front door
        outside water retaining stripCarbon canister filterFRT door triangle
        assy.-LHFRT door triangle assy.-RHAir inlet hose assy.Fuel filling
        hoseRR brake hose assy-LHRR brake hose assy-RHMuffler upper sound
        insulation padAncillary wiper bladeMain wiper blade, wheel center cover,
        on-board tool kits, Hanger ||, RR Spiral spring cushon-upper/lower,
        screw seat, Battery pressing plate, trunk lamp assy
      </Box>
    </Wrapper>
  );
}

export default TrolleyStatus;
