import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;

        console.log(form.elements.name.value);

        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <Box
            content="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                }}
                onSubmit={handleSubmit}
            >
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name="name"
                    size="small"
                    type="name"
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size="small"
                    type="email"
                    name="email"
                    required
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    type="password"
                    name="password"
                    size="small"
                />
                <Button variant="contained" type="submit">
                    Reggister
                </Button>
            </form>
        </Box>
    );
};
