import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export const BotonesIcon = () => {
  return (
    <>
         <h2>Botones e Iconos</h2>
      <Button variant="text" color="info" sx={{ marginRight: 2 }}>
        Mi primer boton
      </Button>
      <Button variant="contained" color="primary" sx={{ marginRight: 3 }}>
        Mi primer boton
      </Button>
      <Button variant="outlined" color="error" sx={{ marginRight: 2 }}>
        Mi primer boton
      </Button>
      <br />
      <br />
      <Button variant="outlined" color="error" sx={{ marginRight: 2 }} startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" color="success" endIcon={<SendIcon />}>
        Send
      </Button>
    </>
  )
}
