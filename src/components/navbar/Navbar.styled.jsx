import styled from 'styled-components';
import Flex from '../../globalStyles/Flex';
import {Link} from 'react-router-dom'

const Nav = styled(Flex)`
    display: flex; 
    background-color: lightseagreen;
    padding: 0.5rem;
    text-decoration:none;

`;


export default Nav;

export const MenuLink = styled(Link)`
  padding: 0.5rem;
  text-decoration: none;
  
  &:hover {
    color: brown;
    font-weight: bold;
    
  }
`;



