import React, { Component } from 'react';

import './Homepage.css';
import Fade from 'react-reveal/Fade';
import {Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Banner from '../Banner/Banner';
import {machines} from '../../json/data';


// import acMotorThumb from "../../assets/ac-motor-thumb.png";
// import acGeneratorThumb from "../../assets/ac-generator-thumb.png";

class Homepage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    let show = this.props.routeName;
    if(show =="notProd"){
        document.getElementsByClassName("prodRedirect")[0].style.display = "none";
    }else {
        document.getElementsByClassName("prodRedirect")[0].style.display = "inline";
    }
  }
  render() {
    return (
      <div>
        <Banner></Banner>
        <Container className="content-container">
          <section>
            <h1 className="sectionHeading">Products :</h1>
            <div id="products">
              
          
              <Grid container spacing={5}>
                {machines.homePageProd.map(function(data){
                return(
                <Grid item xs={12} md={3}>
                <Fade bottom>
                  <Card className="cardActn">
                  <Link to={"products/"+data.routeURL}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={data.name} 
                        image={data.imagePath}
                        title={data.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className='tileTitle'>{data.name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                  </Card>
              </Fade>
                </Grid>
                )
                })}
              </Grid>
            </div>
          </section>
        </Container>
      </div>
    )
  }
}

export default Homepage;


