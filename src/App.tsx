import { useState } from "react";
import styled from "styled-components";
import { Toggle, Window, GlobalStyle, List } from "./widgets";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Window>
        <Window.Header>
          <Window.Title>Bluetooth</Window.Title>
          <ButtonGroup>
            <Toggle checked={checked} onChange={() => setChecked((c) => !c)} />
            <Window.CloseButton />
          </ButtonGroup>
        </Window.Header>
        <Window.Main>
          <Content>
            <Description>
              Visible as "andys-laptop" and available for Bluetooth file
              transfers. Transferred files are placed into the <a>Downloads</a>{" "}
              folder.
            </Description>

            <ListLabel>Devices</ListLabel>
            <List>
              <List.Item>
                Galaxy Buds+ <State>Connected</State>
              </List.Item>
              <List.Item>
                Xbox Wireless Controller <State>Disconnected</State>
              </List.Item>
              <List.Item>
                Jabra Elite 7 Pro <State>Disconnected</State>
              </List.Item>
            </List>
          </Content>
        </Window.Main>
      </Window>
      <GlobalStyle />
    </>
  );
}

const ButtonGroup = styled.div`
  margin-left: auto;
  display: flex;
  & > * + * {
    margin-left: 10px;
  }
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 500px;
  padding: 15px 14px;
`;

const Description = styled.div`
  margin: 10px 0;
`;

const ListLabel = styled.p`
  margin-top: 35px;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;

const State = styled.p`
  margin-left: auto;
`;

export default App;
