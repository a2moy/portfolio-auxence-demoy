import { useEffect, useState } from 'react';
import { keyframes } from 'styled-components'
import styled from 'styled-components';

const BannerContainer = styled.div`
    margin-top: 100px;
    font-size: 144px;
    width: 100vw;
    margin-left: -25px;
    overflow: hidden;
    position: relative;
`

const SourceTexte = styled.div`
    white-space: pre;
    position: absolute;
    visibility: hidden;
`

const LoopAnimation = (translateX) =>  keyframes`
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(${translateX}px);
    }
`

const Banner = styled.div`
    display: inline-block;
    white-space: pre;
    animation-duration: 5s;
    animation-name: ${props => LoopAnimation(props.translateX)};
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-fill-mode: none;
    animation-iteration-count: infinite;
`

const InfinitLoopBanner = (props) => {
    const [texte, setTexte] = useState(props.texte);
    const [pageWidth, setPageWidth] = useState(0);
    const [texteWidth, setTexteWidth] = useState(0);

    const setTextResponsive = () => {

        const tWidth = document.getElementById('Source')?.getBoundingClientRect().width;
        const pWidth = window.innerWidth;
        let count =  pWidth/tWidth + 1;

        let newText = "";
        for (let i = 0; i < count; i++) {
            newText += props.texte;
        }
        setTexte(newText);
        setPageWidth(pWidth);
        setTexteWidth(tWidth);
    };

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (pageWidth != window.innerWidth) {
                setTextResponsive();
                window.addEventListener('resize', setTextResponsive);
            }
        });
        return () => {
            window.removeEventListener('resize', setTextResponsive);
        };
    });

    return (
        <BannerContainer>
                <SourceTexte id="Source">
                    {props.texte}
                </SourceTexte>
                <Banner translateX={texteWidth * -1}>
                    {texte}
                </Banner>
        </BannerContainer>
    )
}

export default InfinitLoopBanner;
