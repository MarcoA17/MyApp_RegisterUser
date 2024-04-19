import { TextField, Button, Link } from '@mui/material';



function Login() {
    return (
        <>
            <h1>Login</h1>

            <form>
                <TextField id="username"
                    label="username or email"
                    variant="outlined"
                    fullWidth 
                    sx={{mb:4}} />
                <TextField id="password"
                    label="password"
                    variant="outlined"
                    fullWidth
                    sx={{mb:4}} />
                <Button variant="contained">Login</Button>
            </form>

        <small>Create account <Link to="/createAccount"> Here</Link></small>
        </>
    )
}

export default Login;