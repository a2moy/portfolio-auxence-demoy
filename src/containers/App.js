import { Routes, Route } from "react-router-dom";

import { Footer, Navbar } from '../components';
import { ProjectsPage, AboutPage, ContactPage, HomePage, PageNotFound } from ".";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
