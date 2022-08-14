import "./App.css";
import styled from "styled-components";
import HeaderComponent from "./components/Header/Header";
import ContentsComponent from "./components/Contents/Contents";

const Wrapper = styled.div`
  background-color: rgba(18, 18, 18, 1);
`;
const Container = styled.div`
  max-width: 1024px;
  min-width: 768px;
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <HeaderComponent />
        <ContentsComponent />
      </Container>
    </Wrapper>
  );
}

export default App;
