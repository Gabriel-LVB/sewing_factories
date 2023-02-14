import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledSideBarBtn = styled.button`
  border: none;
  font-size: large;
  background-color: transparent;
  display: block;
  width: 100%;

  a {
    display: block;
    width: 90%;
    border-radius: 10px;
    margin: 0 auto;
    padding: 5px 0;
    color: white;
    background-color: transparent;
    border: none;
    text-decoration: none;
    &:hover,
    &.active {
      background-color: #161b25;
      box-shadow: 0px 4px 6px #000000;
    }
  }
`;

function SideBarBtn({ name, link }) {
  return (
    <li>
      <StyledSideBarBtn>
        <NavLink to={link}>{name}</NavLink>
      </StyledSideBarBtn>
    </li>
  );
}

export default SideBarBtn;
