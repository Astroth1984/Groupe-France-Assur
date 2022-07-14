import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import FemmeParapluie from '../../assets/images/heroImg.png';
import BlobImg from '../../assets/images/blob2.svg';
import { SCREENS } from '../../components/responsive';


const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `};
`;

const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `};
`;
const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `};
`;

const Slogan = styled.h1`
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        text-[#AB0E12]
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `}
`;

const Description = styled.p`
    ${tw`
        font-bold
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-600
    `};
`;

const BlobContainer = styled.div`
    width: 30em;
    height: 10em;
    position: absolute;
    right: 4em;
    top: -19em;
    z-index: -1;
    transform: rotate(-40deg);

    img {
        width: 100%;
        height: auto;
        max-height: max-content;
    };

    @media (min-width: ${SCREENS.sm}) {
        width: 20em;
        max-height: 20em;
        right: 1em;
        top: -12em;
        transform: rotate(-55deg);
    }

    @media (min-width: ${SCREENS.lg}) {
        width: 30em;
        max-height: 30em;
        right: -7em;
        top: -15em;
        transform: rotate(-30deg);
    }

    @media (min-width: ${SCREENS.xl}) {
        width: 50em;
        max-height: 30em;
        right: 2em;
        top: -12em;
        transform: rotate(-45deg);
    }
`;

const StandaloneCar = styled.div`
    width: auto;
    height: 12em;
    right: -4em;
    top: -5em;
    position: absolute;

    img{
        width: auto;
        height: 100%;
        max-width: fit-content;
    }

    @media (min-width: ${SCREENS.sm}) {
        height: 18em;
        right: 6em;
        top: -6em;
    }

    @media (min-width: ${SCREENS.lg}) {
        height: 26em;
        right: -1em;
        top: -7em;
    }

    @media (min-width: ${SCREENS.xl}) {
        height: 40em;
        right: 12em;
        top: -9em;
    }
`;



export function TopSection(){
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>Ensemble, nous vous protégeons !</Slogan>
                <Description>
                    Conseiller en assuances
                </Description>
                <Description>
                    Conseiller en investissements financiers
                </Description>
                <Description>
                    Conseiller en gestionde patrimoine
                </Description>
            </LeftContainer>
            <RightContainer>
                <BlobContainer>
                    <img src={BlobImg} alt="bolb" />
                </BlobContainer>
                <StandaloneCar>
                    <img src={FemmeParapluie} alt="femme" />
                </StandaloneCar>
            </RightContainer>
        </TopSectionContainer>
    )
}