import { Typography } from '@mui/material'


export const Tipografia = () => {
  return (
    <>
        <h2>Typography</h2>
      <Typography variant="h1" component="h2">
        App con componentes
      </Typography>
      <Typography variant="h2" component="h3">
        App con componentes
      </Typography>
      <Typography variant="h3" component="h4" mt={2} mb={3}>
        App con componentes
      </Typography>
    </>
  )
}
