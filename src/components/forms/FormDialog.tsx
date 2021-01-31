import React, { useCallback, useState } from 'react'
import type { FC } from 'react'
import TextInput from './TextInput'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

type FormDialogProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {},
  })
)

const FormDialog: FC<FormDialogProps> = (props) => {
  const { open, setOpen } = props
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const classes = useStyles()

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const inputName = useCallback(
    (e) => {
      setName(e.target.value)
    },
    [setName]
  )

  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value)
    },
    [setEmail]
  )

  const inputDescription = useCallback(
    (e) => {
      setDescription(e.target.value)
    },
    [setDescription]
  )

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
      <DialogContent>
        <TextInput
          label={'お名前（必須）'}
          multiline={false}
          rows={1}
          value={name}
          type={'text'}
          onChange={inputName}
        />
        <TextInput
          label={'メールアドレス（必須）'}
          multiline={false}
          rows={1}
          value={email}
          type={'email'}
          onChange={inputEmail}
        />
        <TextInput
          label={'お問い合わせ内容（必須）'}
          multiline={true}
          rows={5}
          value={description}
          type={'text'}
          onChange={inputDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          キャンセル
        </Button>
        {/* <Button onClick={submitForm} color="primary" autoFocus>
          送信する
        </Button> */}
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog
