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
    label: {
      width: 100,
    },
    link: {
      color: theme.palette.primary.main,
    },
    qiitaTitle: {
      color: theme.palette.primary.main,
    },
  })
)

export type Post = {
  node: {
    id: string
    title: string
    created_at: string
    url: string
  }
}

type QiitaItemsProps = {
  posts: Post[]
  user: string
}

const QiitaItems: FC<QiitaItemsProps> = ({ posts }) => {
  const classes = useStyles()

  return (
    <section className={classes.container}>
      <h2 className={classes.title}>Qiita</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.node.id}>
                <TableCell align="left" className={classes.label}>
                  {dayjs(post.node.created_at).format('YYYY/MM/DD')}
                </TableCell>
                <TableCell component="th" scope="row">
                  <a href={post.node.url} target="_blank" className={classes.link}>
                    <p className={classes.qiitaTitle}>{post.node.title}</p>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  )
}

export default QiitaItems
