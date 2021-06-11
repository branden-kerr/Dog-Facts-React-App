import React, { useState, useEffect, MouseEvent } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import { useFirestore, useFirestoreDocData } from 'reactfire';

const useStyles = makeStyles((Theme) => createStyles({
  root: {
    minWidth: 645,
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
    height: 80,
    display: 'flex',
    alignItems: 'center',

  },
  button: {
    marginTop: 20,
    marginRight: 10,
    color: "#5AFF3D",
    backgroundColor: "#03ACB4",
    textOutline: "black",
    fontWeight: 900,
    fontFamily: "Nunito",
    textShadow: "-.5px -.5px 0 #000, .5px -.5px 0 #000, -.5px .5px 0 #000, .5px .5px 0 #000",
    // border: "3px solid orange"
  }
}));


// const getRandomDogFact = () => {
//   return Axios.get("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1").then(
//     (response) => {
//       return response.data[0].fact;
//     }
//   )
// }
export default function ImageCard({ place, checked }: { place: any, checked: any }) {

  const classes = useStyles();

  const dogCollection = useFirestore()
    .collection('tryreactfire')
    .doc('burrito');

  const { status, data }: { status: any; data: any } = useFirestoreDocData(dogCollection);

  const [dogNumber, setDogNumber] = useState(0);

  const [count, setCount] = useState(1);

  const handleNewDoggoClick = () => {

    let inter = 0;

    if (count < 9) {
      inter = count + 1;
    } else {
      inter = 1;
    }
    setCount(inter);

    setDogNumber(count);
  }

  const getRandomNumber = () => {
    const x = 18;
    return Math.floor(Math.random() * x) + 1;
  }

  const [factNumber, setFactNumber] = useState(getRandomNumber);
  const handleNewFactClick = () => {
    let num = getRandomNumber();

    while (num === factNumber) {
      num = getRandomNumber();
    }

    setFactNumber(num);
  }

  // useEffect(() => {
  //   getRandomDogFact().then((res) => setFact(res));
  // }, []);

  // function handleClick(e: MouseEvent): void {
  //   e.preventDefault();
  //   getRandomDogFact().then((newFact) => setFact(newFact));
  // }

  return (

    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={data && data[`dog${dogNumber}`] || './assets/dog.jpg'}
          title="Contemplative Reptile"
        />
        <CardContent>

          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {data && data[`fact${factNumber}`]}
          </Typography>
          <Button variant="contained" onClick={handleNewFactClick} className={classes.button}>
            Fact
              </Button>
          <Button variant="contained" onClick={handleNewDoggoClick} className={classes.button}>
            New Doggo
              </Button>
        </CardContent>
      </Card>
    </Collapse>
  );
}



