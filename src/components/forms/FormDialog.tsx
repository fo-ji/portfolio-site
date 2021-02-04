import React, { useCallback, useState } from 'react'
import type { FC } from 'react'
import TextInput from './TextInput'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

type FormDialogProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

type PayloadType = {
  text: string
}

const FormDialog: FC<FormDialogProps> = (props) => {
  const { open, setOpen } = props
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [description, setDescription] = useState<string>('')

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

  const submitForm = () => {
    const payload: PayloadType = {
      text:
        'お問い合わせがありました\n' +
        'お名前' +
        name +
        '\n' +
        'Email ' +
        email +
        '\n' +
        'お問い合わせ内容\n' +
        description,
    }

    const url: string | undefined = process.env.SLACK_WEBHOOK_URL

    if (typeof url === 'string') {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
      }).then(() => {
        alert('お問い合わせ有り難うございます。送信が完了いたしました。おってご連絡いたします。')
        setName('')
        setEmail('')
        setDescription('')
        setOpen(false)
      })
    } else {
      alert('送信に失敗しました。もう一度送信してください。')
      setOpen(false)
    }
  }

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
        <Button onClick={submitForm} color="primary" autoFocus>
          送信する
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog
