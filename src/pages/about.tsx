import React from 'react'
import type { FC } from 'react'
import Layout from '../components/Layout'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: 'flex',
      paddingTop: 20,
      paddingBottom: 20,
    },
    leftContainer: {
      width: '50%',
    },
    rightContainer: {
      width: '50%',
    },
    title: {
      fontSize: 30,
    },
    labelGroup: {
      paddingLeft: 16,
    },
    label: {
      marginTop: 5,
      marginBottom: 8,
      marginRight: 10,
      '&:disabled': {
        color: '#fff',
        backgroundColor: '#6cb6f5',
      },
    },
  })
)

const Page: FC = () => {
  const classes = useStyles()

  return (
    <Layout>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.mainContainer}>
        <div className={classes.leftContainer}>
          <h2 className={classes.title}>Profile</h2>
          <List>
            <ListItem>
              <ListItemText primary="職業" secondary="フロントエンドエンジニア" />
            </ListItem>
            <ListItem>
              <ListItemText primary="年齢" secondary="31才" />
            </ListItem>
            <ListItem>
              <ListItemText primary="居住地" secondary="東京" />
            </ListItem>
            <ListItem>
              <ListItemText primary="出身地" secondary="兵庫" />
            </ListItem>
            <ListItem>
              <ListItemText primary="学歴" secondary="関西学院大学 社会学部卒" />
            </ListItem>
            <ListItem>
              <ListItemText primary="経歴" secondary="[2013/4 ~ 2020/10] 求人広告、専門商社、メーカーでの営業" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="[2020/10 ~ 現在] システム開発会社でフロント担当及びディレクション業務" />
            </ListItem>
          </List>
        </div>
        <div className={classes.rightContainer}>
          <h2 className={classes.title}>Skill</h2>
          <List>
            <ListItem>
              <ListItemText
                primary="得意分野"
                secondary="受発注システムやワークフロー等の業務用システムの機能開発において、フロントエンドを担当しています。また、クライアント対応をしながら、ECCUBEのカスタマイズも行っています。"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="業界・ジャンル" />
            </ListItem>
            <div className={classes.labelGroup}>
              <Button color="secondary" size="small" variant="contained" disabled className={classes.label}>
                システム
              </Button>
              <Button size="small" variant="contained" disabled className={classes.label}>
                ECサイト
              </Button>
            </div>
            <ListItem>
              <ListItemText primary="スキル" />
            </ListItem>
            <div className={classes.labelGroup}>
              <Button size="small" variant="contained" disabled className={classes.label}>
                React
              </Button>
              <Button size="small" variant="contained" disabled className={classes.label}>
                Javascript
              </Button>
              <Button size="small" variant="contained" disabled className={classes.label}>
                MySQL
              </Button>
              <Button size="small" variant="contained" disabled className={classes.label}>
                mongoDB
              </Button>
              <Button size="small" variant="contained" disabled className={classes.label}>
                html/css(sass)
              </Button>
              <Button size="small" variant="contained" disabled className={classes.label}>
                docker
              </Button>
              <Button size="small" variant="contained" disabled className={classes.label}>
                Github
              </Button>
              <Button size="small" variant="contained" disabled className={classes.label}>
                Typescript
              </Button>
            </div>
            <ListItem>
              <ListItemText primary="担当範囲" />
            </ListItem>
            <div className={classes.labelGroup}>
              <Button size="small" variant="contained" disabled className={classes.label}>
                要件定義
              </Button>
              <Button size="small" variant="contained" disabled className={classes.label}>
                ディレクション
              </Button>
              <Button size="small" variant="contained" disabled className={classes.label}>
                フロント開発
              </Button>
              <Button size="small" variant="contained" disabled className={classes.label}>
                設計
              </Button>
            </div>
          </List>
        </div>
      </Container>
    </Layout>
  )
}

export default Page
