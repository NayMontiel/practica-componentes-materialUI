import { Grid } from "@mui/material"


export const Grilla = () => {
  return (
    <>
        <h2>Grid</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}  sx={{color: "green"}} >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, amet ipsam ad provident, magnam harum molestias magni accusantium perspiciatis aliquid rerum consequatur hic doloremque enim dignissimos dolorem commodi alias! Doloremque!</p>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{color: "purple"}} >
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, amet ipsam ad provident, magnam harum molestias magni accusantium perspiciatis aliquid rerum consequatur hic doloremque enim dignissimos dolorem commodi alias! Doloremque!</p>
        </Grid>
        <Grid
          item xs={12} sm={12} md={4} sx={{color: "red"}}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
            quisquam minima provident, ad magnam saepe impedit voluptatem
            ratione quas molestias! Nisi.
          </p>
        </Grid>
      </Grid>
    </>
  )
}
