import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import  Container  from '@material-ui/core/Container';
import  Grid  from '@material-ui/core/Grid';
import  Card  from '@material-ui/core/Card';
import  CardActionArea  from '@material-ui/core/CardActionArea';
import  CardMedia  from '@material-ui/core/CardMedia';
import  CardContent  from '@material-ui/core/CardContent';



const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1593068120923-19050f52c177?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
        },
  
  blogContainer: {
    paddingTop: theme.spacing(3)
  },

  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },

  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  }
}));


function BlogContent() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>My Blog</Box>
      </Box>

      <Container maxWidth="lg" className={classes.blogContainer}>
             <Typography variant="h4" className={classes.blogTitle}>
                Articles
              </Typography>

             <Grid container spacing={3}>

                <Grid item xs={12} sm={6} md={4}>
                          <Card className={classes.card}>
                              <CardActionArea>
                                <CardMedia
                                  className={classes.media}
                                  image="https://images.unsplash.com/photo-1558252470-8d9cd259d247?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
                                  title="Contemplative Reptile"
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    First written
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                              
                          </Card>
                </Grid>



                <Grid item xs={12} sm={6} md={4}>
                         <Card className={classes.card}>
                              <CardActionArea>
                                <CardMedia
                                  className={classes.media}
                                  image="https://images.unsplash.com/photo-1558252470-8d9cd259d247?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
                                  title="Contemplative Reptile"
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    First written
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                              
                          </Card>
                 
                </Grid>


                <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                              <CardActionArea>
                                <CardMedia
                                  className={classes.media}
                                  image="https://images.unsplash.com/photo-1558252470-8d9cd259d247?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
                                  title="Contemplative Reptile"
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    First written
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                              
                           </Card>
                 
                </Grid>


                <Grid item xs={12} sm={6} md={4}>
                          <Card className={classes.card}>
                              <CardActionArea>
                                <CardMedia
                                  className={classes.media}
                                  image="https://images.unsplash.com/photo-1558252470-8d9cd259d247?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
                                  title="Contemplative Reptile"
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    First written
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                              
                          </Card>
                 
                </Grid>




                <Grid item xs={12} sm={6} md={4}>
                          <Card className={classes.card}>
                              <CardActionArea>
                                <CardMedia
                                  className={classes.media}
                                  image="https://images.unsplash.com/photo-1558252470-8d9cd259d247?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
                                  title="Contemplative Reptile"
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    First written
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                              
                          </Card>
                </Grid>

                

             </Grid>
      </Container>
    </div>
  );
}

export default BlogContent;
