import * as React from 'react';
import { Dialog, DialogContent, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';

interface RegistrationDialogProps {
    open: boolean;
    onClose: () => void;
}

const RegistrationDialog: React.FC<RegistrationDialogProps> = ({ open, onClose }) => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const handleAgreeToTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAgreeToTerms(event.target.checked);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Здесь можно добавить логику для обработки формы
        console.log('First Name:', firstName);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        console.log('Agree to Terms:', agreeToTerms);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <h2>Регистрация</h2>
                    <p>У вас уже есть аккаунт? <a href="#">Войдите</a></p>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <Button variant="contained" color="error" fullWidth startIcon={<img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />} onClick={() => console.log('Google')}>
                            Google
                        </Button>
                        <Button variant="contained" color="primary" fullWidth startIcon={<img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />} onClick={() => console.log('Facebook')}>
                            Facebook
                        </Button>
                    </div>
                    <TextField
                        label="Имя / Фамилия"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        label="E-mail / Логин"
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
                        label="Номер телефона"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        fullWidth
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        label="Пароль"
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
                    <TextField
                        label="Повторить пароль"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        fullWidth
                        required
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={agreeToTerms} onChange={handleAgreeToTermsChange} />}
                        label="Согласен с публичным договором предоставления услуг"
                    />
                    <Button variant="contained" color="error" fullWidth type="submit" style={{ marginTop: '20px' }}>
                        Регистрация
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default RegistrationDialog;