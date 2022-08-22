import { forwardRef, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { createComponentGroup } from "../utils";

const Header = styled.header`
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 46px;
  padding: 0 10px;
  border-bottom: solid 1px #454545;

  // Todo: Use js to work out if radius is needed
  border-top-left-radius: 11px;
  border-top-right-radius: 11px;

  :where(&) {
    font-weight: bold;
    color: #fff;
  }

  &[data-active="true"] {
    border: solid 1px #454545;
  }

  & :is(button, *[role="switch"]) {
    -webkit-app-region: no-drag;
  }
`;

const Main = styled.main`
  background: #242424;
  color: #9a9a9a;
  border: solid 1px #3a3a3a;
  border-top: none;
  border-bottom-left-radius: 11px;
  border-bottom-right-radius: 11px;
  flex-grow: 1;
  overflow: overlay;

  ::-webkit-scrollbar {
    width: 4px;
    padding: 20px;
  }

  ::-webkit-scrollbar-track {
    opacity: 0;
  }

  ::-webkit-scrollbar-thumb {
    background: #3a3a3a;
    border-radius: 15px;
  }
`;

const Title = styled.h1`
  position: absolute;
  left: 0;
  right: 0;
  pointer-events: none;

  :where(&) {
    flex-grow: 1;
    font-size: 16px;
    text-align: center;
  }
`;

const CloseButton = styled.button`
  background-image: url(/usr/share/icons/Adwaita/64x64/ui/window-close-symbolic.symbolic.png);
  border: none;
  background: #454545;
  height: 26px;
  width: 26px;
  border-radius: 50%;
  margin-left: 5px;

  transition: outline-color 600ms, outline-offset 600ms;
  outline-color: #4f668100;

  // Default outline for transition
  outline-offset: 4px;

  &:hover:not(:active) {
    background: #4f4f4f;
  }

  &:active {
    background: #6e6e6e;
  }

  &:focus-visible {
    outline: solid 2px #4f6681;
    outline-offset: 1px;
  }
`;

const WindowElement = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  // background: #242424;
  border-radius: 11px;
  box-shadow: solid 1px 1px red;

  ${Header} {
    border: solid 1px #454545;
    transition: background 200ms, filter 200ms;
    background: #303030;
  }

  &[data-active="false"] ${Header} {
    filter: brightness(0.7) saturate(0.7);
  }
`;

const WindowRoot = forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  (props, ref) => {
    const [isActive, setIsActive] = useState(true);

    useLayoutEffect(() => {
      const event = isActive ? "blur" : "focus";
      const handler = () => setIsActive((f) => !f);
      window.addEventListener(event, handler);
      return () => window.removeEventListener(event, handler);
    }, [isActive]);

    return <WindowElement {...props} ref={ref} data-active={isActive} />;
  }
);

export const Window = createComponentGroup(WindowRoot, {
  Header,
  Title,
  Main,
  CloseButton,
});
