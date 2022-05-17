import { useState, createRef } from "react";
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import anime from 'animejs/lib/anime.es.js';

import { Footer, Navbar } from '../components';
import { ProjectsPage, AboutPage, ContactPage, HomePage, PageNotFound, ProjectPage, LabPage } from ".";
import { ThemeProvider } from "styled-components";
import themes from '../theme';

const Root = styled.div`
    display: flex;
    flex-flow: column;
    height: 100vh;
    z-index: 1;
`

const PageTransition = styled.div`
    position: fixed;
    height: 0vh;
    width: 100vw;
    bottom: 0px;
    left: 0px;
    background-color: ${props => props.theme.mainColor};
    z-index: 990;
`

const App = () => {
    const [currentTheme, setCurrentTheme] = useState(themes.red);

    const transisitonDivRef = createRef();

    const pageTransitionAnimationIn = () => {
        anime({
            targets: transisitonDivRef.current,
            height: '100vh',
            duration: 500,
            easing: 'easeOutCubic',
            complete: (anim) => {
                StartOutAnimation()
            },
        });
    }

    const pageTransitionAnimationOut = () => {
        anime({
            targets: transisitonDivRef.current,
            height: '0vh',
            duration: 500,
            easing: 'easeInCubic',
        });
    }

    const StartInAnimation = () => {pageTransitionAnimationIn()}
    const StartOutAnimation = () => {pageTransitionAnimationOut()}

    return (
        <ThemeProvider theme={currentTheme}>
            <Root>
                <PageTransition ref={transisitonDivRef}/>
                <Navbar setCurrentTheme={setCurrentTheme} />
                <Routes>
                    <Route path="/" element={<HomePage                          mountCallback={() => {}} unmountCallback={StartInAnimation}/>}/>
                    <Route path="projects" element={<ProjectsPage               mountCallback={() => {}} unmountCallback={StartInAnimation}/>} />
                    <Route path="projects/:projectId" element={<ProjectPage     mountCallback={() => {}} unmountCallback={StartInAnimation}/>} />
                    <Route path="about" element={<AboutPage                     mountCallback={() => {}} unmountCallback={StartInAnimation}/>} />
                    <Route path="contact" element={<ContactPage                 mountCallback={() => {}} unmountCallback={StartInAnimation}/>} />
                    <Route path="lab" element={<LabPage                         mountCallback={() => {}} unmountCallback={StartInAnimation}/>} />
                    <Route path="*" element={<PageNotFound                      mountCallback={() => {}} unmountCallback={StartInAnimation}/>} />
                </Routes>
                <Footer />
            </Root>
        </ThemeProvider>
    );
}

export default App;
