import styled from 'styled-components'

const Content = styled.div`
    padding: 0 25px;
    margin-bottom: 170px;
    display: flex;
    flex-direction: column;
`

const Array = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 100%;
`

const ArrayLine = styled.div`
    align-items: flex-start;
    padding: 25px 0px;
    font-size: 36px;
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
`

const ArrayLineSeparator = styled.span`
    border-top: 1px solid #000000;
`

const IntroContainer = styled.div`
    padding-top: 90px;
    width: inherit;
    align-items: flex-start;
    margin-bottom: 70px;
`

const PageTitle = styled.div`
    font-size: 72px;
    font-weight: bold;
    color: ${props => props.theme.mainColor};
`

const Paragraph = styled.div`
    text-align: justify;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 43px;
    font-size: 18px;
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
}
