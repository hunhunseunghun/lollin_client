import React from "react";
import styled from "styled-components";

export const HorizonZone = styled.div`
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #aaa;
    line-height: 0.1em;
    margin: 10px 0 20px;
`;

export const Horizon = styled.span`
    background: #fff;
    padding: 0;
`;

const HorizonLine = () => {
  return (
    <>
        <HorizonZone>
            <Horizon />
        </HorizonZone>
    </>
  );
};

export default HorizonLine;