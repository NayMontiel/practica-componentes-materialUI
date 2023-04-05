import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { CardSkeleton } from './CardSkeleton';
import { CardEsqueleto } from './CardEsqueleto';


const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 3000))


export const Esqueleto = () => {

    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        getData();
    }, []);    


    const getData = async() => {
        setLoading(true)
        try {
            await fakePromise();
            const resp = await fetch("https://rickandmortyapi.com/api/character");
            const data = await resp.json();
            setPersonajes(data.results);
            
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }



  return (
    <>
        <h2>Skeleton</h2>
    <Container spacing={2} >
        <Typography variant='h2' textAlign="center" mt={3} mb={4}>
            Rick And Morty
        </Typography>
        <Box sx={{ display: "flex", flexWrap:"wrap", gap: 3 }} xs={12} sm={6} md={4} lg={3} >
            {
                loading ?
                Array.from(new Array(4)).map((_, index) => (
                    <CardSkeleton key={index} />
                ))
                : personajes.map((personaje) => (
                    <CardEsqueleto 
                        key={personaje.id} name={personaje.name} image={personaje.image}  />
                ))
            }
            
            
        </Box>
    </Container>
    </>
  )
}
