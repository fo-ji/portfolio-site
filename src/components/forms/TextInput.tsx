import React from 'react'
import type { FC } from 'react'
import TextField from '@material-ui/core/TextField'

type FormProps = {
  label: string
  multiline: boolean
  rows: number
  value: string
  type: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: FC<FormProps> = (props) => {
  const { label, multiline, rows, value, type, onChange } = props

  return (
    <TextField
      fullWidth={true}
      label={label}
      margin={'dense'}
      multiline={multiline}
      rows={rows}
      value={value}
      type={type}
      onChange={onChange}
    />
  )
}

export default TextInput
