import styled from 'styled-components';
import { keyframes } from 'styled-components'

const InAnim = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0%);
    }
`

const TitleLetter = styled.div`
    display: inline-block;
    white-space: pre;

    transform: translateY(100%);
    animation-duration: 0.8s;
    animation-timing-function: cubic-bezier(.455,.03,.515,.955);
    animation-delay: ${props => props.delay}s;
    animation-fill-mode: forwards;
    animation-name: ${InAnim};
`

const TitleLetterWrapper = styled.div`
    overflow: hidden;
    display: inline-block;
`

const TitleLetterContainer = styled.div`
    margin-bottom: -1.25vw;
`


const TitleAnimator = (props) => {
    let textArray = props.texte.split("");
    return (
        <TitleLetterContainer>
            {textArray.map((letter, index) =>
                <TitleLetterWrapper key={index} active>
                    <TitleLetter delay={0.5 + index * 0.035}>
                        {letter}
                    </TitleLetter>
                </TitleLetterWrapper>
            )}
        </TitleLetterContainer>
    )
}

export default TitleAnimator;