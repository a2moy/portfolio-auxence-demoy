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

    const pageTransitionAnimationOut = () => {
        window.scrollTo({ top: 0 })
        anime({
            targets: transisitonDivRef.current,
            height: '0vh',
            duration: 500,
            easing: 'easeInCubic',
        });
    }

    const pageTransitionAnimationIn = () => {
        anime({
            targets: transisitonDivRef.current,
            height: '100vh',
            duration: 500,
            easing: 'easeOutCubic',
            complete: (anim) => {
                pageTransitionAnimationOut()
            },
        });
    }

    return (
        <ThemeProvider theme={currentTheme}>
            <Root>
                <PageTransition ref={transisitonDivRef} />
                <Navbar setCurrentTheme={setCurrentTheme} />
                <Routes style={{zIndex: 1}}>
                    <Route path="/" element={<HomePage mountCallback={() => { }} unmountCallback={pageTransitionAnimationIn} />} />
                    <Route path="projects" element={<ProjectsPage mountCallback={() => { }} unmountCallback={pageTransitionAnimationIn} />} />
                    <Route path="projects/:projectId" element={<ProjectPage mountCallback={() => { }} unmountCallback={pageTransitionAnimationIn} />} />
                    <Route path="about" element={<AboutPage mountCallback={() => { }} unmountCallback={pageTransitionAnimationIn} />} />
                    <Route path="contact" element={<ContactPage mountCallback={() => { }} unmountCallback={pageTransitionAnimationIn} />} />
                    <Route path="lab" element={<LabPage mountCallback={() => { }} unmountCallback={pageTransitionAnimationIn} />} />
                    <Route path="*" element={<PageNotFound mountCallback={() => { }} unmountCallback={pageTransitionAnimationIn} />} />
                </Routes>
                <Footer />
            </Root>
        </ThemeProvider>
    );
}

export default App;
