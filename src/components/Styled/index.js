import styled from 'styled-components'

const Content = styled.div`
    padding: 0 25px;
    margin-bottom: 210px;
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`

const StyledLine = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 25px;
`

const StyledContainerLeft = styled.div`
    display: flex;
    justify-content: space-between;
    flex-basis: 50%;
    flex-grow: 1;
`

const StyledContainerRight = styled.div`
    display: flex;
    justify-content: space-between;
    flex-basis: 50%;
    flex-grow: 1;
`

const StyledText = styled.div`
    font-size: 36px;
    margin: 25px 0px;
`

const StyledTitle = styled.span`
    font-size: 24px;
    margin-bottom: 10px;
`

const StyledSeparator = styled.span`
    border: 1px solid #000000;
`

const StyledToolsSkillsContainer = styled.div`
    display: flex;
    gap: 25px;
`

const StyledToolsSkillsContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    flex-grow: 1;
`

const StyledToolsSkillsContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    flex-grow: 1;
`

const StyledHead = styled.div`
    display: flex;
    margin-bottom: 100px;
`
const StyledHeadTitle = styled.div`
    font-size: 72px;
    line-height: 86px;
    margin-bottom: 85px;
    font-weight: bold;
    color: ${props => props.theme.mainColor};
`
const StyledSubtitle = styled.div`
    font-size: 18px;
`

const StyledHeadLeft = styled.div`
    flex-basis: 60%;
`

const StyledHeadRight = styled.div``

const StyledHeadDescription = styled.p`
    margin-bottom: 40px;
    width: 328px;
`

export {
    Content,
    StyledContainer,
    StyledLine,
    StyledContainerLeft,
    StyledContainerRight,
    StyledText,
    StyledTitle,
    StyledSeparator,
    StyledToolsSkillsContainer,
    StyledToolsSkillsContainerLeft,
    StyledToolsSkillsContainerRight,
    StyledHead,
    StyledHeadTitle,
    StyledSubtitle,
    StyledHeadLeft,
    StyledHeadRight,
    StyledHeadDescription,
}
