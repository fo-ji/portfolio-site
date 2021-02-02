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
    wordpressTitle: {
      color: theme.palette.primary.main,
    },
  })
)

export type Post = {
  node: {
    title: string
    date: string
    link: string
  }
}

type WordpressItemsProps = {
  posts: Post[]
}

const WordpressItems: FC<WordpressItemsProps> = ({ posts }) => {
  const classes = useStyles()

  return (
    <section className={classes.container}>
      <h2 className={classes.title}>Blog</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {posts.map((post, idx) => (
              <TableRow key={idx}>
                <TableCell align="left" className={classes.label}>
                  {dayjs(post.node.date).format('YYYY/MM/DD')}
                </TableCell>
                <TableCell component="th" scope="row">
                  <a href={post.node.link} target="_blank" className={classes.link}>
                    <p className={classes.wordpressTitle}>{post.node.title}</p>
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

export default WordpressItems
