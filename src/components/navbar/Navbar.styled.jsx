import styled from "styled-components";
import Flex from "../../globalStyles/Flex";
import { Link } from "react-router-dom";

const Nav = styled(Flex)`
  display: flex;
  background-color: lightseagreen;
  padding: 0.5rem;
  text-decoration: none;
`;

export default Nav;



export const Menu = styled.div`
  padding: 1rem;
  display: none;
  cursor:pointer;
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    display: block;
    
  }
`;

export const Ul = styled(Flex)`
  
  
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: column;
    width: 100%;
    max-height: ${({show})=>show ? "400px" :"0"};
    overflow:hidden;
  }
`;

export const MenuLink = styled(Link)`
  padding: 0.5rem;
  text-decoration: none;
  text-align: center;
  padding: .5rem 1rem;
  &:hover {
    color: brown;
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    
  }
`;
