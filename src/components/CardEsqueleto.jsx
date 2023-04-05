import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const CardEsqueleto = ({name, image}) => {
  return (
    <Card sx={{maxWidth: 250,}}>
        <CardMedia  image={image} sx={{height:250, width: 250}} title={name}
                
        />

        <CardContent>
            <Typography variant='h5' >
                {name}
            </Typography>
        </CardContent>
                
    </Card>
  )
}
