import React from 'react'
import type { FC } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.secondary.dark,
  },
  title: {
    color: theme.palette.secondary.light,
  },
  content: {
    margin: '0 auto',
  },
}))

const Footer: FC = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.footer}>
      <Toolbar className={classes.content}>
        <Typography variant="h5" className={classes.title}>
          &copy; fo-ji
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
