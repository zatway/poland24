import * as React from 'react';
import { Dialog, DialogContent, TextField, Button, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import { useState } from 'react';

interface OrderDialogProps {
    open: boolean;
    onClose: () => void;
}

interface Item {
    link: string;
    quantity: number;
    cost: number;
    delivery: number;
}

interface CustomerData {
    name: string;
    phone: string;
    email: string;
}

const OrderDialog: React.FC<OrderDialogProps> = ({ open, onClose }) => {
    const [items, setItems] = useState<Item[]>([{ link: '', quantity: 1, cost: 0, delivery: 0 }]);
    const [customerData, setCustomerData] = useState<CustomerData>({ name: '', phone: '', email: '' });
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleAddItem = () => {
        setItems([...items, { link: '', quantity: 1, cost: 0, delivery: 0 }]);
    };

    const handleRemoveItem = (index: number) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number, field: keyof Item) => {
        const newItems = [...items];
        if (field === 'quantity') {
            newItems[index][field] = parseInt(event.target.value, 10) || 0;
        }
        setItems(newItems);
    };

    const handleCustomerDataChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof CustomerData) => {
        setCustomerData({ ...customerData, [field]: event.target.value });
    };

    const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTermsAccepted(event.target.checked);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Items:', items);
        console.log('Customer Data:', customerData);
        console.log('Terms Accepted:', termsAccepted);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h4" gutterBottom>
                        Сделать заказ
                    </Typography>

                    {items.map((item, index) => (
                        <Grid container spacing={2} key={index}>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">Товар {index + 1}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Вставьте ссылку на товар"
                                    value={item.link}
                                    onChange={(e) => handleInputChange(e, index, 'link')}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    label="К-во"
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleInputChange(e, index, 'quantity')}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    label="Стоимость, €"
                                    type="number"
                                    value={item.cost}
                                    onChange={(e) => handleInputChange(e, index, 'cost')}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField
                                    label="Доставка, €"
                                    type="number"
                                    value={item.delivery}
                                    onChange={(e) => handleInputChange(e, index, 'delivery')}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Комментарий к товару"
                                    multiline
                                    rows={3}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    Доставка по Украине: Новой почтой
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    Удобный канал для обратной связи:
                                </Typography>
                                <FormControlLabel control={<Checkbox />} label="Почта" />
                                <FormControlLabel control={<Checkbox />} label="Вайбер" />
                                <FormControlLabel control={<Checkbox />} label="Телеграм" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    Стоимость позиции: {item.cost + item.delivery}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="error" onClick={() => handleRemoveItem(index)}>
                                    Удалить
                                </Button>
                            </Grid>
                        </Grid>
                    ))}

                    <Button variant="contained" color="success" onClick={handleAddItem}>
                        Добавить товар
                    </Button>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Фамилия"
                                value={customerData.name}
                                onChange={(e) => handleCustomerDataChange(e, 'name')}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Phone Number"
                                value={customerData.phone}
                                onChange={(e) => handleCustomerDataChange(e, 'phone')}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Email"
                                value={customerData.email}
                                onChange={(e) => handleCustomerDataChange(e, 'email')}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Комментарий"
                                multiline
                                rows={3}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox checked={termsAccepted} onChange={handleTermsChange} />}
                                label="Я согласен с условиями покупки и доставки"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="error" type="submit" fullWidth>
                                Отправить
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default OrderDialog;