import styled from '@emotion/styled'
import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Product = () => {

    const Img = styled("img")({
        width: 200, height: "100%", objectFit: "cover", objectPosition: "center" })

  return (
    <>
        <h2>Mini Practica de lo Aprendido Haciendo una Card</h2>
        <Paper sx={{display: "flex", alignItems: "center", gap: 2, overflow: "hidden", mt: 5  }}>
            <Img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1631188850-41eMJ5wRzKL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=480:*" alt='<hermosa plantita' />

            <Box sx={{ flexGrow: 1, display: "grid", gap: 2 }}>
                <Typography variant='h4'>Hermosa Platita Bellalia</Typography>
                <Typography variant='body1' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi eveniet quos accusamus magnam quis dolorum, velit repellendus id nulla, sed illo. Iste nostrum necessitatibus delectus reprehenderit doloremque cupiditate maiores cumque?</Typography>
                <Button variant='contained' endIcon={<ShoppingCartIcon />} sx={{mt: 2}} >Agregar Al </Button>
            </Box>
            <Box component="p"  sx={{ mr: 4, padding: 5, color: "green"}}   >
                $19.99
            </Box>
        </Paper>
    </>
    
  )
}
