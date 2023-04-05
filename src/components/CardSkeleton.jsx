import { Card, CardContent, Skeleton } from '@mui/material'
import React from 'react'

export const CardSkeleton = () => {
  return (
    <Card sx={{maxWidth: 250,}}>
        <Skeleton variant='rectangular' height={250} width={250} /> 

        <CardContent>
            <Skeleton height={25} />
        </CardContent>
    </Card>
  )
}
