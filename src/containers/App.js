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
`

const App = () => {
    const [currentTheme, setCurrentTheme] = useState(themes.red);
    return (
        <ThemeProvider theme={currentTheme}>
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
        </ThemeProvider>
    );
}

export default App;
