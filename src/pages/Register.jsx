import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export const Register = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState({error: false, message: "Ingrese un Email Válido"});

  const emailValidation = (email) => {
    // expresion regular para validar email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if (emailValidation(email)) {
      setError({
        error: false,
        message: "",
      });
      console.log("formato de Email Correcto")
    } else{
      setError({
        error: true,
        message: "formato de Email Incorrecto"
      })
    }


  }

  return (
    <>
        <h2>Formulario con TextField y Validación </h2>
        <Box component="form" onSubmit={handleSubmit} >
          <TextField 
            id="email"
            label="Email"
            type="email"
            required
            variant="outlined"
            fullWidth
            helperText={error.message}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error.error}
        
          />
          <Button type='submit' variant='outlined' sx={{mt: 2}} >Register</Button>

        </Box>
        
    </>
  )
}
