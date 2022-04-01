import styled from 'styled-components'

const Header = styled.div`
    background-color: ${props => props.theme.mainColor};
    display: flex;
    flex-direction: column;
`

const HeaderTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 36px;
`

const HeaderTitleText = styled.span`
    color: #040205;
    font-size: 48px;
    flex: 1;
`

const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HeaderDescription = styled.div`
    font-size: 18px;
    margin-bottom: 35px;
    width: 50vw;
`

const HeaderInformation = styled.div`
    font-size: 24px;
    width: 50vw;
    margin-bottom: 10px;
`

const TmplHeader = ({ data }) => {
    const { name, description, year, type } = data;
    return (
        <Header>
            <HeaderTitle>
                <HeaderTitleText style={{ flex: 2, textAlign: 'center' }}>{name}</HeaderTitleText>
                <HeaderTitleText style={{ textAlign: 'center' }}>{year}</HeaderTitleText>
                <HeaderTitleText>{type}</HeaderTitleText>
            </HeaderTitle>
            <HeaderText>
                <HeaderInformation>Information</HeaderInformation>
                <HeaderDescription>{description}</HeaderDescription>
            </HeaderText>
        </Header>
    )
}

export default TmplHeader
