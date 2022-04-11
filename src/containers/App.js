import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';

import { Footer, Navbar } from '../components';
import { ProjectsPage, AboutPage, ContactPage, HomePage, PageNotFound, ProjectPage } from ".";
import { ThemeProvider } from "styled-components";
import themes from '../theme';

const Root = styled.div`
    display: flex;
    flex-flow: column;
    height: 100vh;
    z-index: 1;
`

/*const PageTransition = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0px;
    left: 0px;
    background-color: ${props => props.theme.mainColor};
    z-index: 999;
`*/

const App = () => {
    const [currentTheme, setCurrentTheme] = useState(themes.red);

    const InAnimationStart = () => {}
    //const InAnimationEnd = () => {}

    return (
        <ThemeProvider theme={currentTheme}>
            <Root>
                <Navbar setCurrentTheme={setCurrentTheme} />
                <Routes>
                    <Route path="/" element={<HomePage                          mountCallback={() => {}} unmountCallback={InAnimationStart}/>}/>
                    <Route path="projects" element={<ProjectsPage               mountCallback={() => {}} unmountCallback={InAnimationStart}/>} />
                    <Route path="projects/:projectId" element={<ProjectPage     mountCallback={() => {}} unmountCallback={InAnimationStart}/>} />
                    <Route path="about" element={<AboutPage                     mountCallback={() => {}} unmountCallback={InAnimationStart}/>} />
                    <Route path="contact" element={<ContactPage                 mountCallback={() => {}} unmountCallback={InAnimationStart}/>} />
                    <Route path="*" element={<PageNotFound                      mountCallback={() => {}} unmountCallback={InAnimationStart}/>} />
                </Routes>
                <Footer />
            </Root>
        </ThemeProvider>
    );
}

export default App;
