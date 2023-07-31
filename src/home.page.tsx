import { AppBar, Box, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const Home:React.FC=()=>{
    return<>
        <Box >
            <Stack >
                <Grid>
                    <DenseAppBar/>
                </Grid>
                <Grid>
                <Imgcard />
                </Grid>
            </Stack >
        </Box>
    </>
} /* this is end */


export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Test
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}/* end of bar*/

export const Imgcard:React.FC=()=> {
    
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="..."
          height="140"
          image="https://api.slingacademy.com/public/sample-photos/1.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Test Api
          </Typography>
          
        </CardContent>
        <CardActions>
        
        </CardActions>
      </Card>
    );
  } /* end of card*/

