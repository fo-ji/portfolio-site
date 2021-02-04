import React from 'react'
import type { FC } from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'

import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  createStyles({
    wrapper: {
      position: 'relative',
    },
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      position: 'absolute',
      right: 30,
      top: 160,
      '&:first-letter': {
        fontSize: 55,
      },
    },
    img: {
      height: 'calc(100vh - 128px)',
    },
  })
)

const Page: FC = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    {
      background: file(relativePath: { eq: "background.jpg" }) {
        id
        childImageSharp {
          fluid {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={classes.wrapper}>
        <Img fluid={data.background.childImageSharp.fluid} alt="背景画像" className={classes.img} />
        <h1 className={classes.title}>Welcome to my portfolio site!</h1>
      </div>
    </Layout>
  )
}

export default Page
