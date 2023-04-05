import React, { useState } from 'react';
import { Alert, AlertTitle, Button, Collapse, Snackbar } from '@mui/material';
import { Box } from '@mui/system';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export const TiposAlertas = () => {

    const [open, setOpen] = useState(false)

  return (
    <>
        <h2>Tipos de Alertas en Material-UI</h2>
        <Box sx={{display: "grid", gap: "1rem"}}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — check it out!
            </Alert>
            <Alert 
                severity="warning" 
                variant='filled'
                action={
                <>
                    <Button color='primary' >Update</Button>
                    <Button color='error' >Delete</Button>
                </>}>
                This is a warning alert — check it out!
            </Alert>
            <Collapse in={open} >
                <Alert severity="info" onClose={() => {setOpen(false)}}>
                    This is an info alert — check it out!
                </Alert>
            </Collapse>
            <Alert severity="success" icon={<ThumbUpOffAltIcon />} variant='outlined'>
                This is a success alert — check it out!
            </Alert>
                <Button variant='contained' onClick={() => {setOpen(true)}}>Open</Button>
            <Snackbar open={open} autoHideDuration={5000} onClose={() => {setOpen(false)}} >
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert — check it out!
            </Alert>
            </Snackbar>

        </Box>
    </>
  )
}
