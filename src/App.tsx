import React from 'react';
import {useTranslation} from 'react-i18next';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./components/pages/Auth/LoginDialog";
import LoginDialog from "./components/pages/Auth/LoginDialog";
import RegistrationDialog from "./components/pages/Auth/RegistrationDialog";
import OrderDialog from "./components/OrderDialog";

const App: React.FC = () => {
    const {t} = useTranslation();

    return (
        <Router>
            <div className="App" data-testid="app-container">
                <LoginDialog open={true} onClose={() => {}}></LoginDialog>
            </div>
        </Router>
    );
};

export default App;
