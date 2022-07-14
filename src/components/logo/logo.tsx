import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import GfaLogo from '../../assets/images/logo.png';

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `};
`;

const Image = styled.div`
    width: auto;
    ${tw`h-9 pl-4 md:h-14`}

    img{
        width: auto;
        height: 100%
    }
`;

export function Logo(){
    return(
        <LogoContainer>
            <Image>
                <img src={GfaLogo} alt="Groupe France Assur" />
            </Image>
        </LogoContainer>
    )
}