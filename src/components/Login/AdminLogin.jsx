import React from 'react'
import { Grid } from '@mui/material'
import Background from '../Background/Background'
import styles from'./AdminLogin.module.css'

const AdminLogin = () => {
  return (
    <Grid>
      <Background />
      <Grid className={styles.logincontainer} xs={8}>
        AdminLogin
      </Grid>
    </Grid>
  )
}

export default AdminLogin