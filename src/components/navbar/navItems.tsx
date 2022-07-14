import React from 'react';
import styled,{css}  from 'styled-components';
import tw from 'twin.macro';
import {slide as Menu} from 'react-burger-menu';
import {useMediaQuery} from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyle from './menuStyle';


const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `};
`;

const NavItem = styled.li<{menu?: any}>`
    ${tw`
        text-sm
        md:text-base
        text-[#120858]
        font-medium
        mr-1
        md:mr-12
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-[#C86163]
    `};

    ${({menu}) => menu && css`
        ${tw`
            text-white 
            text-xl
            mb-5
            focus:text-white
        `}
    `}

`;

export function NavItems(){
    const isMobile = useMediaQuery({maxWidth: SCREENS.sm });

    if(isMobile)
        return(
            <Menu right styles={menuStyle}>
                <ListContainer>
                    <NavItem menu>
                        <a href='#'>Acceuil</a>
                    </NavItem>
                    <NavItem menu>
                        <a href='#'>Situation</a>
                    </NavItem>
                    <NavItem menu>
                        <a href='#'>Solutions</a>
                    </NavItem>
                    <NavItem menu>
                        <a href='#'>Réseau</a>
                    </NavItem>
                    <NavItem menu>
                        <a href='#'>Contact</a>
                    </NavItem>
                </ListContainer>
            </Menu>
        );


    return (
        <ListContainer>
            <NavItem>
            <a href='#'>Acceuil</a>
            </NavItem>
            <NavItem>
            <a href='#'>Situation</a>
            </NavItem>
            <NavItem>
            <a href='#'>Solutions</a>
            </NavItem>
            <NavItem>
            <a href='#'>Réseau</a>
            </NavItem>
            <NavItem>
            <a href='#'>Contact</a>
            </NavItem>
        </ListContainer>
    );
}