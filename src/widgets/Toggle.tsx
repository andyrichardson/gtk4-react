import {
  forwardRef,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
} from "react";
import styled from "styled-components";

const transitionDuration = "100ms";

const ToggleNubbin = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  background: #d2d2d2;
  box-shadow: rgb(0 0 0 / 10%) 2px 2px 2px 0px;
  &[data-checked="true"] {
    left: 22px;
  }

  transition: left ${transitionDuration};
`;

export const ToggleElement = styled.div`
  position: relative;
  width: 46px;
  height: 26px;
  border-radius: 100px;
  flex-shrink: 0;

  transition: background ${transitionDuration}, outline-color 600ms,
    outline-offset 600ms;
  outline-color: #4f668100;

  // Default outline for transition
  outline-offset: 4px;

  // Background hover (not checked)
  &[aria-checked="false"] {
    background: #545454;
    &:hover {
      background: #636363;
    }
  }

  // Background hover (checked)
  &[aria-checked="true"] {
    background: #3584e4;
    &:hover {
      background: #4990e7;
    }
    &:active {
      background: #2a6ab6;
    }
  }

  // Nubbin color (not checked, hover)
  &:is([aria-checked="true"], :hover) > ${ToggleNubbin} {
    background: #ffffff;
  }

  // Outline on focus
  &:focus-visible {
    outline: solid 2px #4f6681;
    outline-offset: 1px;
  }
`;

type ToggleProps = {
  checked?: boolean;
  onChange?:
    | MouseEventHandler<HTMLDivElement>
    | KeyboardEventHandler<HTMLDivElement>;
} & JSX.IntrinsicElements["div"];

export const Toggle = forwardRef<HTMLDivElement, ToggleProps>(
  ({ checked = false, onChange, onClick, onKeyUp, ...props }, ref) => {
    const handleClick = useCallback<MouseEventHandler<HTMLDivElement>>(
      (e) => {
        onChange?.(e);
        onClick?.(e);
      },
      [onChange]
    );

    const handleKeyUp = useCallback<KeyboardEventHandler<HTMLDivElement>>(
      (e) => {
        if (e.code === "Enter" || e.code === "Space") {
          onChange?.(e);
        }

        onKeyUp?.(e);
      },
      [onChange]
    );

    return (
      <ToggleElement
        tabIndex={0}
        {...props}
        onClick={handleClick}
        onKeyUp={handleKeyUp}
        role={"switch"}
        aria-checked={checked}
        ref={ref}
      >
        <ToggleNubbin aria-hidden={true} data-checked={checked} />
      </ToggleElement>
    );
  }
);
