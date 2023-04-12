import React from 'react'
import { Grid } from '@mui/material'
import img from '../../assets/images/wave.png'
import styles from './Background.module.css'


const Background = () => {
  return (
    <Grid container xs={12}>
      <img src={img} className={styles.background}/> 
    </Grid>
  )
}

export default Background