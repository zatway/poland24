import React from 'react';
import {useTranslation} from 'react-i18next';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./components/pages/Auth/LoginPage";

const App: React.FC = () => {
    const {t} = useTranslation();

    return (
        <Router>
            <div className="App" data-testid="app-container">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/MainPage" element={<>asdasdas</>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
