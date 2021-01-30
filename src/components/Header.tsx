import React from 'react'
import type { FC } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import type { HeaderComponentQuery } from '../../types/graphql-types'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const useStyles = makeStyles((theme) => ({
  header: {
    background: theme.palette.secondary.dark,
  },
  title: {
    color: theme.palette.secondary.light,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    color: theme.palette.primary.main,
  },
}))

const Header: FC = () => {
  const data = useStaticQuery<HeaderComponentQuery>(graphql`
    query HeaderComponent {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar className={classes.content}>
        <Typography variant="h4" className={classes.title}>
          Portfolio..
        </Typography>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          <Link to="/about" className={classes.link}>
            <Button className={classes.button}>About</Button>
          </Link>
          <Link to="/output" className={classes.link}>
            <Button className={classes.button}>Output</Button>
          </Link>
          <Link to="/contact" className={classes.link}>
            <Button className={classes.button}>Contact</Button>
          </Link>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  )
}

export default Header
