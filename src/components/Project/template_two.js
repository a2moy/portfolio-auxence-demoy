import styled from 'styled-components'
import TmplHeader from './template_header'
import { Content } from "../Styled"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin-bottom: 100px;
`

const SubContainer = styled.div`
    display: flex;
    gap: 25px;
`

const NextProject = styled.div`
    text-align: right;
`

const Header = styled.div`
    margin-bottom: 100px;
`

const TmplOne = (data) => {
    return (
        <>
            <TmplHeader data={data} />
            <Header>
                <img src='https://via.placeholder.com/1390x500' alt='placeholder' />
            </Header>
            <Content> 
                <Container>
                    <img src='https://via.placeholder.com/1390x500' alt='placeholder' />
                    <SubContainer>
                        <img src='https://via.placeholder.com/683x450' alt='placeholder' />
                        <img src='https://via.placeholder.com/683x450' alt='placeholder' />
                    </SubContainer>
                    <img src='https://via.placeholder.com/683x450' alt='placeholder' />
                    <Header>
                        <img src='https://via.placeholder.com/1390x500' alt='placeholder' />
                    </Header>
                    <img src='https://via.placeholder.com/1037x850' alt='placeholder' />
                </Container>
                <NextProject>next project - project name up to 16 ch</NextProject>
            </Content>
        </>
    )
}

export default TmplOne
