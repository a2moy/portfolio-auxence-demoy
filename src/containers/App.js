import { Footer, Navbar } from '../components';
import styled from 'styled-components';

const Content = styled.div`
    padding: 0 25px;
    height: 500px;
`

const ScrollText = styled.div`  
    text-align: right;
    font-weight: 400;
    font-size: 144px;
    white-space: nowrap;

    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    
    -moz-animation: homepage-scroll-text 15s linear infinite;
    -webkit-animation: homepage-scroll-text 15s linear infinite;
    animation: homepage-scroll-text 15s linear infinite;
`

function App() {
    return (
        <div>
            <Navbar />
            <Content>
                {/* <ScrollText>selected works - selected works</ScrollText> */}
            </Content>
            <Footer />
        </div>
    );
}

export default App;
