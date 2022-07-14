import AM from '../../assets/images/2MA.jpg';
import april from '../../assets/images/april.png';
import fma from '../../assets/images/fma.png';
import Millicourtage from '../../assets/images/Millicourtage.png';
import Neoliane from '../../assets/images/Neoliane.jpg';
  import React from "react";
  import styled from "styled-components";
  import tw from "twin.macro";

  const Container = styled.div`

    ${tw`
      w-full
      flex
      flex-col
      items-center
      pt-3
      pb-3
      lg:pt-20
      lg:pb-6
    `};
  `;

  const Title = styled.h2`
    ${tw`
      text-3xl
      lg:text-3xl
      text-[#C86163]
      font-extrabold
    `};
  `;

  // const StepsContainer = styled.div`
  //   ${tw`
  //     flex
  //     justify-evenly
  //     flex-wrap
  //     mt-7
  //     lg:mt-16
  //   `};
  // `;

  // const StepContainer = styled.div`
  //   ${tw`
  //     flex
  //     flex-col
  //     md:w-96
  //     items-center
  //     transition-colors
  //     hover:text-red-500
  //     m-3
  //   `};
  // `;

  // const Step = styled.div`
  //   box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  //   width:12em;
  //   height:12em;
  //   ${tw`
  //     flex
  //     rounded-lg
  //     items-center
  //     justify-center
  //     p-6
  //   `};
  // `;

  // const StepTitle = styled.h4`
  //   ${tw`
  //     text-black
  //     text-lg
  //     font-semibold
  //     mt-4
  //   `};
  // `;

  // const StepDescription = styled.p`
  //   ${tw`
  //     w-10/12
  //     text-xs
  //     md:text-sm
  //     text-center
  //     text-gray-600
  //   `};
  // `;

  // const StepIcon = styled.div`
  // width: 6em;
  // height: 6em;

  // img{
  //     width: auto;
  //     height: 100%;
  //     max-width: fit-content;
  // }
  // `;


  const LogoCloundsContainer = styled.div`
    ${tw`
      relative
      flex
      items-center
      flex-wrap
      justify-center
    `}
  `;

  const ImageLogo = styled.img`

    ${tw`
      w-[170px] p-4 cursor-pointer ml-6
    `}
  `;
  export function BookingSteps() {
    return (
      <Container>
        <Title>Nos Partenaires</Title>
        <LogoCloundsContainer>
          <ImageLogo src={AM} alt="content" />

          <ImageLogo src={april} alt="content" />

          <ImageLogo src={fma} alt="content" />

          <ImageLogo src={Millicourtage} alt="content" />

          <ImageLogo src={Neoliane} alt="content" />
        </LogoCloundsContainer>


      </Container>
    );
  }
