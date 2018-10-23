import React from "react";
import styled from "styled-components";

const NavToggle = styled.button`
  padding: 0 0.75rem 0.75rem;
  background: transparent;
  border: 1px solid transparent;
  top: calc(50% - (0.75rem));
  left: calc((-1 * (100vw - (100%)) / 2) + 10px);
  cursor: pointer;
  display: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (max-width: 46.5625rem) {
    display: block;
    position: absolute;
  }

  &:focus {
    outline-width: 0;
  }
`;

const Bar = styled.span`
  background: white;
  display: block;
  transform: rotate(0deg);
  transition: 0.2s ease all;
  border-radius: 0.0625rem;
  height: 0.25rem;
  width: 2.1875rem;
  margin-bottom: 0.3125rem;
`;

const TopBar = styled(Bar)`
  transform: ${props => (props.rotate ? "rotate(45deg)" : "none")};
  transform-origin: ${props => (props.rotate ? "14% 116%" : "50% 50% 0")};
`;
const MidBar = styled(Bar)`
  opacity: ${props => (props.hide ? 0 : 1)};
`;
const BottBar = styled(Bar)`
  margin-bottom: 0;
  transform: ${props => (props.rotate ? "rotate(-45deg)" : "none")};
  transform-origin: ${props => (props.rotate ? "17% 14%" : "50% 50% 0")};
`;

const Hamburger = ({ mobileMenuActive, triggerFunc }) => (
  <NavToggle onClick={triggerFunc}>
    <TopBar rotate={mobileMenuActive ? 1 : 0} />
    <MidBar hide={mobileMenuActive} />
    <BottBar rotate={mobileMenuActive ? 1 : 0} />
  </NavToggle>
);

export default Hamburger;
