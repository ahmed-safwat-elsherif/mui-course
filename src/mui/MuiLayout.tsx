import { Box, Container, Grid, Typography } from "@mui/material";
//SEO -> Search Engine Optimization
function MuiLayout() {
  return (
    <>
      <section>
        <Typography variant="h3">Box Trials</Typography>

        <Box>this is a div</Box>
        <Box component="article">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque
          dolor. Eos atque nulla aspernatur, possimus debitis sint. Mollitia
          excepturi quidem repellendus ut dolore cum illum iste quod illo
          molestias!
        </Box>
        <Box
          sx={{
            backgroundColor: "darkblue",
            color: "wheat",
          }}
        >
          <Box>this is box gwa box</Box>
          this box is styled with SX prop
        </Box>
      </section>
      <section>
        <Typography variant="h3">Grid Trials</Typography>
        <Container>
          <Grid container rowSpacing={3} columnSpacing={1}>
            <Grid item sm={8} md={4}>
              <Box sx={{ backgroundColor: "red", color: "white", padding: 2 }}>
                this is item 1
              </Box>
            </Grid>
            <Grid item sm={4} md={8}>
              <Box sx={{ backgroundColor: "blue", color: "white", padding: 2 }}>
                this is item 2
              </Box>
            </Grid>
            <Grid item sm={8} md={4}>
              <Box sx={{ backgroundColor: "red", color: "white", padding: 2 }}>
                this is item 1
              </Box>
            </Grid>
            <Grid item sm={4} md={8}>
              <Box sx={{ backgroundColor: "blue", color: "white", padding: 2 }}>
                this is item 2
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default MuiLayout;
