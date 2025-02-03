import * as React from 'react';
import { Dialog, DialogContent, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';

interface LoginDialogProps {
    open: boolean;
    onClose: () => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ open, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(event.target.checked);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Здесь можно добавить логику для обработки формы
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember me:', rememberMe);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <h2>Вход</h2>
                    <p>У вас еще нету аккаунта? <a href="#">Зарегистрируйтесь</a></p>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <Button variant="contained" color="error" fullWidth startIcon={<img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />} onClick={() => console.log('Google')}>
                            Google
                        </Button>
                        <Button variant="contained" color="primary" fullWidth startIcon={<img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />} onClick={() => console.log('Facebook')}>
                            Facebook
                        </Button>
                    </div>
                    <TextField
                        label="Введите e-mail"
                        value={email}
                        onChange={handleEmailChange}
                        fullWidth
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        label="Введите пароль"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        fullWidth
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                        <FormControlLabel
                            control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} />}
                            label="Запомнить меня"
                        />
                        <a href="#">Забыли пароль?</a>
                    </div>
                    <Button variant="contained" color="error" fullWidth type="submit" style={{ marginTop: '20px' }}>
                        Войти
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default LoginDialog;