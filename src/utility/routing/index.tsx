import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { About } from "../../pages/about";
import { LandingPage } from "../../pages/landing";

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<LandingPage />} />
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </Router>
    )
};