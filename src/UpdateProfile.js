import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert } from '@mui/material';
import { Stack } from '@mui/system';
import { useAuth } from './context/AuthContext';
import { EmailAuthProvider } from 'firebase/auth';
import db from "./firebase.js";
import { doc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";
const theme = createTheme();

export default function UpdateProfile() {
  const { currentUser, updateUserEmail, updateUserPassword, reauthenticate } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const state = {button: 1};

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setLoading(true);
    setMessage("");
    setError("");

    const credential = EmailAuthProvider.credential(currentUser.email, data.get('currentPassword'));

    reauthenticate(credential).then(async () => {
        if (state.button === 1) 
        {
            if (data.get('email') !== currentUser.email && data.get('email')) {
                try {
                    // update email in firestore database
                    const q = query(collection(db, "users"), where("email", "==", currentUser.email));
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((document) => {
                      const userRef = doc(db, "users", document.id);
                      updateDoc(userRef, {
                        email: data.get('email')
                      });
                    });
                    // update email in firebase auth
                    await updateUserEmail(data.get('email'));
                    setMessage("Success: Email Updated");
                } catch (error) {
                    setError(error.message);
                    console.log(error)
                }
            }
        }

        if (state.button === 2) 
        {
            if (data.get('newPassword')) {
                try {
                    await updateUserPassword(data.get('newPassword'));
                    setMessage("Success: Password Updated");
                } catch (error) {
                    setError(error.message);
                    console.log(error)
                }
            }
        }
    }).catch((error) => {
        setError(error.message);
    });
    setLoading(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: 2,
            borderRadius: 4,
            borderColor: 'grey.400',
            padding: 5
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Profile
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          {message && <Alert severity="success">{message}</Alert>}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              defaultValue={currentUser.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="currentPassword"
              type="password"
              id="password"
              label="Current Password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              fullWidth
              name="newPassword"
              type="password"
              id="password"
              label="New Password"
              autoComplete="current-password"
              sx={{width: { md: 350 }}}
            />
            <Button
              onClick={() => (state.button = 1)}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              disabled={loading}
            >
              Update Email
            </Button>
            <Button
              onClick={() => (state.button = 2)}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 0, mb: 2 }}
              disabled={loading}
            >
              Update Password
            </Button>
            <Stack spacing={1} alignItems="center" justifyContent="center">
              <Link to="/profile">Back to Profile</Link>
            </Stack>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
