import styled from "react-emotion";

export const Box = styled("div")`
  height: 20vh;
  padding-left: 20px;
  padding-top: 40px;
  position: relative;
  max-width: 585px;
`;

export const Main = styled("section")`
  padding: 0 11vw;
  background: #fbfbfb;
  height: 100vh;
`;

export const Title = styled("h1")`
  font-size: 106px;
  margin: 0;
  color: #191919;
`;

export const VerticalLine = styled("div")`
  height: 200px;
  width: 5px;
  background: #161616;
  position: absolute;
  left: -20px;
  top: 50px;
  margin-right: 20px;
`;
export const HorizontalLine = styled("div")`
  width: 235px;
  background: #161616;
  display: "block";
  height: 5px;
`;

export const TaglineWrapper = styled("div")`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

export const Tagline = styled("h2")`
  margin: 7px 0px;
  color: #191919;
`;

export const Notice = styled("h5")`
  font-family: sans-serif;
  align-self: flex-end;
  padding-top: 13px;
  color: #191919;
`;
