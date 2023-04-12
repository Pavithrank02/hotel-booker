import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Background from '../Background/Background'
import styles from './AdminLogin.module.css'

const AdminLogin = () => {


  return (
    <Grid className={styles.container}>
      <Background />
      <Grid className={styles.logincontainer} xs={8}>
        <Grid className={styles.header} style={{textDecoration: 'none'}}>
          <Typography variant="h6" fontWeight='bold' className={styles.admin} >
            <Link to='/'  >
            Admin
            </Link>
          </Typography>
          <Typography variant="h6" fontWeight='bold' className={styles.admin}>
          <Link to='/customer' style={{textDecoration: 'none'}}>
            Customer
            </Link>
          </Typography>
        </Grid>
        <Typography variant="h4" component="h2">
          Sign in your account!
        </Typography>
        <Typography variant='subtitle1'>Login with your personal details for continue</Typography>
        <Grid className={styles.formcontainer}>
          <TextField
            className={styles.TextField}
            label="Username"
            multiline
            maxRows={4}
            variant="filled"
          />
          <TextField
            className={styles.TextField}
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <Button size="large" variant="contained" >Login</Button>
        </Grid>
        <Typography variant="body">
          Dont have account!<span> <Link>Signup</Link> </span>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AdminLogin