import { Button } from '@mui/material'
import { useSnackbar } from 'notistack'
import React from 'react'

export const Login = () => {

  const {enqueueSnackbar} = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("Suscribete a mi canal", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    })
  }

  return (
    <>
        <h2>Alert con Notistack</h2>
        <Button variant='contained' onClick={handleClick} >Open</Button>
    </>
  )
}
