import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';

import { Footer, Navbar } from '../components';
import { ProjectsPage, AboutPage, ContactPage, HomePage, PageNotFound, ProjectPage } from ".";
import { ThemeProvider } from "styled-components";
import themes from '../theme';
import styled from 'styled-components';


const AppContainer = styled.div`
    min-height: 100vh;
    background-color: ${props => props.theme.mainColor};
`

const Root = styled.div`
    display: flex;
    flex-flow: column;
    height: 100vh;
`

const App = () => {
    const [currentTheme, setCurrentTheme] = useState(themes.red);
    return (
        <ThemeProvider theme={currentTheme}>
<<<<<<< HEAD
            <AppContainer>
            <Navbar setCurrentTheme={setCurrentTheme}/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="projects/:projectId" element={<ProjectPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
            </AppContainer>
=======
            <Root>
                <Navbar setCurrentTheme={setCurrentTheme} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="projects/:projectId" element={<ProjectPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </Root>
>>>>>>> e24e7251bf007189d4652f50c7a060f7b91c3262
        </ThemeProvider>
    );
}

export default App;
