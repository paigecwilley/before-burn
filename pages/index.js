import { hydrate, injectGlobal } from "react-emotion";
import {
  Main,
  Box,
  Title,
  VerticalLine,
  HorizontalLine,
  Tagline,
  Notice,
  TaglineWrapper
} from "./styles";

injectGlobal`
 
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html, body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "kern" 1, "liga" 1;
    scroll-behavior: smooth;
    max-width: 100%;
  }
  body {

  }

  h1, h2, h3, h4, h5 {
    margin: 0;
  }
`;

export default () => (
  <Main>
    <Box>
      <VerticalLine />
      <Title> Before Burn </Title>
      <HorizontalLine />
      <TaglineWrapper>
        <Tagline>Avoiding burnout, growing intuition</Tagline>
        <Tagline>Rituals for real life</Tagline>
        <Notice> Coming soon.</Notice>
      </TaglineWrapper>
    </Box>
  </Main>
);
