import styled from 'styled-components'

const Content = styled.div`
    padding: 0 25px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
`

const Array = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 100%;
    @media(max-width: 970px) {
        margin-top: 60px;
    }
`

const ArrayLine = styled.div`
    align-items: flex-start;
    padding: 25px 0px;
    font-size: 36px;
    @media(max-width: 970px) {
        padding: 20px 0px;
        font-size: 18px;
    }
`

const ArrayText = styled.div`
    flex: 1;
    text-align: center;
`

const ArrayTextFirst = styled(ArrayText)`
    text-align: start;
    flex: 2;
`

const ArrayTitle = styled.span`
    margin-bottom: 10px;
    font-size: 24px;
    @media(max-width: 970px) {
        font-size: 14px;
    }
`

const ArrayLineSeparator = styled.div`
    border-top: 1px solid #000000;
    width: 100%;
`

const IntroContainer = styled.div`
    padding-top: 90px;
    width: inherit;
    align-items: flex-start;
    margin-bottom: 70px;
    @media(max-width: 970px) {
        padding-top: 20px;
        margin-bottom: 20px;
    }
`

const PageTitle = styled.div`
    font-size: 5vw;
    font-weight: bold;
    color: ${props => props.theme.mainColor};
    margin-bottom: 100px;
    @media(max-width: 970px) {
        margin-bottom: 0px;
        font-size: 7.5vw;
    }
`

const Paragraph = styled.div`
    text-align: justify;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 43px;
    font-size: 18px;
    @media(max-width: 970px) {
        gap: 22px;
        margin-top: 55px;
    }
`

const CatchLine = styled.div`
    @media(max-width: 970px) {
        margin-top: 20px;
    }
`

export {
    Content,
    Array,
    ArrayTitle,
    ArrayLineSeparator,
    ArrayLine,
    ArrayText,
    ArrayTextFirst,
    IntroContainer,
    PageTitle,
    Paragraph,
    CatchLine,
}
