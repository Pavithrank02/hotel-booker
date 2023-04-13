import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Background from '../Background/Background'
import styles from './Register.module.css'

const Registration = () => {
  return (
    <Grid className={styles.container}>
    <Background />
    <Grid className={styles.logincontainer} xs={8}>
      <Grid className={styles.header} >
      <Typography variant="h4" component="h2">
          Register
        </Typography>
      </Grid>
      <Typography variant='subtitle1'>Register with your personal details for continue</Typography>
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
         <TextField
          className={styles.TextField}
          label="Phone Number"
          type="text"
          variant="filled"
        />
         <TextField
          className={styles.TextField}
          label="Address"
          type="text"
          variant="filled"
        />
         <TextField
          className={styles.TextField}
          type="date"
          variant="filled"
        />
        <Button size="large" variant="contained" >Login</Button>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default Registration