import styled from "styled-components";
import Tracker from "./components/Tracker";
import GlobalStyles from "./GlobalStyle";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const App = () => {
  return (
    <Main>
      <GlobalStyles />
      <Tracker />
    </Main>
  );
};

export default App;
