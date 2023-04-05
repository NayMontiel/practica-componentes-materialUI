import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const Cards = () => {
  return (
    <>
        <h2>Card de Material-UI</h2>
        <Card  sx={{ transition: "0.2s", "&:hover": { transform: "scale(1.05)", }, }}>
            <CardActionArea>
            <CardMedia component="img" image="https://assets.puzzlefactory.pl/puzzle/349/536/original.jpg" height="400" alt='Perrito' />

            <CardContent>
                <Typography variant='h5' >Tierno Perrito</Typography>
                <Typography component="p" variant='body2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi veritatis non excepturi atque provident? Repellendus ipsam recusandae repudiandae dolor! Modi ex reprehenderit sunt expedita perferendis facere obcaecati dignissimos, minus sapiente!</Typography>
            </CardContent>
            </CardActionArea>
            
            <CardActions>
                <Button variant='contained' startIcon={<PetsIcon/>} endIcon={<PetsIcon/>}>Agregar</Button>
                <Button variant='outlined' startIcon={<DeleteForeverIcon/>} endIcon={<DeleteForeverIcon/>} color="error" >Remover</Button>
            </CardActions>
        </Card>
    </>
  )
}
