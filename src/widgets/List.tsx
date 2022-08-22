import styled from "styled-components";
import { createComponentGroup } from "../utils";

const ListRoot = styled.ul`
  padding: 0;
  margin: 0;
  border-radius: 15px;
  overflow: hidden;
  list-style: none;
`;

const Item = styled.li`
  background: #363636;
  display: flex;
  align-items: center;
  padding: 0 14px;
  min-height: 55px;
  color: #fff;

  transition: background 200ms;

  & + & {
    border-top: solid 1px #545454;
  }

  &:hover {
    background: #3c3c3c;
  }
`;

export const List = createComponentGroup(ListRoot, {
  Item,
});
