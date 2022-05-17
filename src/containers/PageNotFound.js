import styled from 'styled-components';

const ErrorPage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: 500;
`

const Error = styled.div`
    color: ${props => props.theme.mainColor};
    font-weight: bold;
    font-size: 22.2vw;
    padding-left: 25px;
    margin-top: 18vh;
`

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    padding: 50px 100px;
`

const Redirect = styled.a`
    flex: 1;
`

const Texte = styled.p`
    flex: 1;
    text-align: center;
`

const PageNotFound = () => {

    return (
        <ErrorPage>
            <Error>
                404
            </Error>
            <Flex>
                <Texte>you seems lost</Texte>
                <Redirect href="/">back to home</Redirect>
            </Flex>
        </ErrorPage>
    );
}

export default PageNotFound;
