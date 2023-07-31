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
                
                <App/>
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

export const Imgcard:React.FC<{img:any;p:any;t:any;}>=(prop)=> {
    
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="..." height="200" image={prop.img} />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div">
            Title:{prop.t}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Test Api
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Price:{prop.p}
          </Typography>
          
        </CardContent>
        <CardActions>
        
        </CardActions>
      </Card>
    );
  } /* end of card*/

const url='https://fakestoreapi.com/products'
export const App:React.FC=()=>{
    var [data,setData] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then((result)=>{setData(result);
        })
    },[])

    return<>
        
        <h1>This test call for Build</h1>
        <Grid container direction='row' spacing={2} >
           {data?.map((item:any)=> {
            return <>
            <Imgcard img={item.image} p={item.price} t={item.title} />
            </>
           })}
        </Grid>

        </>
}

