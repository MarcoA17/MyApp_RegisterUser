import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

function RegisterUser() {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function sendUser(event) {
        event.preventDefault();

        console.log("First Name;" + firstName);
        console.log("Last Name;" + lastName);
        console.log("Email;" + email);
        console.log("User Name;" + userName);
        console.log("Password;" + password);

        console.log("Inicia llamada a servicio POST");

        axios.post('http://localhost:8080/api/v1/user', {
            name: firstName,
            lastName: lastName,
            email: email,
            userName: userName,
            password: password
        }).then((response) => {
            console.log("Response: " + response);
        }).catch(error => {
            console.log(error);
        })

        console.log("Finaliza llamada a servicio POST")
    }

    return (
        <>
            <h1>Register User</h1>

            <form onSubmit={sendUser}>

                <TextField id="name"
                    label="First Name"
                    variant="outlined"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    fullWidth
                    sx={{ mb: 4 }} />

                <TextField id="lastname"
                    label="Last Name"
                    variant="outlined"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    fullWidth
                    sx={{ mb: 4 }} />

                <TextField id="email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    fullWidth
                    sx={{ mb: 4 }} />

                <TextField id="username"
                    label="User Name"
                    variant="outlined"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    fullWidth
                    sx={{ mb: 4 }} />

                <TextField id="password"
                    type='password'
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    fullWidth
                    sx={{ mb: 4 }} />

                <Button
                    variant="outlined"
                    color="primary"
                    type="submit">presioname</Button>

            </form>
        </>
    )
}

export default RegisterUser;