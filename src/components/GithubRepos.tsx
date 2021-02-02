import React from 'react'
import type { FC } from 'react'
import dayjs from 'dayjs'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: 20,
    },
    title: {
      fontSize: 30,
    },
    table: {
      minWidth: 650,
    },
    link: {
      color: theme.palette.primary.main,
    },
    gitTitle: {
      color: theme.palette.primary.main,
    },
  })
)

export type Repo = {
  node: {
    url: string
    name: string
    primaryLanguage: {
      name: string
    }
    updatedAt: string
  }
}

type GithubReposProps = {
  gitRepos: Repo[]
  user: string
}

const GithubRepos: FC<GithubReposProps> = ({ gitRepos }) => {
  const classes = useStyles()

  return (
    <section className={classes.container}>
      <h2 className={classes.title}>Github</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {gitRepos.map((repo, idx) => (
              <TableRow key={idx}>
                <TableCell align="right">{dayjs(repo.node.updatedAt).format('YYYY/MM/DD')}</TableCell>
                <TableCell component="th" scope="row">
                  <a href={repo.node.url} target="_blank" className={classes.link}>
                    <p className={classes.gitTitle}>{repo.node.name}</p>
                  </a>
                </TableCell>
                {/* [TODO]primaryLanguage.nameを表示できるようにする */}
                {/* <TableCell align="right">{repo.node.primaryLanguage.name}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  )
}

export default GithubRepos
