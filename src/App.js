import './App.css';
import * as React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, FormGroup, Grid, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import BakeryItems from './BakeryItem';
import bakeryData from "./assets/bakery-data.json";

bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});


function App() {
  return (
    <div className="App">
      <div className="img-header">
        <img src={process.env.PUBLIC_URL + "/" + "images/header.png"} alt="header" width={450} height={190} padding={100} />
      </div>
      <FilterTable></FilterTable>
    </div>
  );
}

function FilterTable() {
  const [sort, setSort] = useState('0');
  const [type, setType] = useState("all");
  const [dietary, setDietary] = useState("all");
  const [fav, setFav] = useState([]);
  const [checked, setChecked] = useState(false);
  const total = () => { 
    let sum = 0;
    fav.forEach((item) => {
      sum += item.price;
    });
    return sum;
  };
  
  function addFav(favItem) {

    if (favItem in fav) return;
      setFav([...fav, favItem]);
  }
  function deleteFav(favItem){
    setFav(fav.filter((item) => item !== favItem));
  }

  const sortFilter = (a,b) => {
    if (sort === '0') {
      return a;
    } else if (sort === '1') {
      return a.price - b.price;
    } else if (sort === '2') {
      return a.calories - b.calories;
    }
  }

  const typeFilter = (item) => {
    if (checked === false) { 
      if (type === "all" && dietary === "all") {
        return true;
      } else if (type == "all" ) {
        return item.dietaryRestrictions === dietary;
      } else if (dietary === "all" ) {
        return item.type === type;
      } else {
        return item.type === type && item.dietaryRestrictions === dietary;
      }
    } else {
      if (fav.indexOf(item) !== -1) {
        if (type === "all" && dietary === "all") {
          return true;
        } else if (type === "all") {
          return item.dietaryRestrictions === dietary;
        } else if (dietary === "all" ) {
          return item.type === type;
        } else {
          return item.type === type && item.dietaryRestrictions === dietary;
        }
      }
    }
  }
    



  return (
    <Grid container spacing={2}>
      <Grid item xs={2} className="sidebar" container ml="auto">
        <Stack spacing={2}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Sort By</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <FormControlLabel value="0" control={<Radio />} label="Popular" />
              <FormControlLabel value="1" control={<Radio />} label="Price" />
              <FormControlLabel value="2" control={<Radio />} label="Calories" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Types</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel value="Bread" control={<Radio />} label="Bread" />
              <FormControlLabel value="Cake" control={<Radio />} label="Cake" />
              <FormControlLabel value="Pastry" control={<Radio />} label="Pastry" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Dietary Restrictions</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={dietary}
              onChange={(e) => setDietary(e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel value="Gluten-free" control={<Radio />} label="Gluten-free" />
              <FormControlLabel value="Diary-free" control={<Radio />} label="Diary-free" />
              <FormControlLabel value="Nut-free" control={<Radio />} label="Nut-free" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Favorites</FormLabel>
          <FormControlLabel
            label="Favorites"
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                inputProps={{ 'aria-label': 'controlled' }}
              />  
            }
            />
          </FormControl>
          <Typography align="left" gutterBottom variant="h5" component="div">
            {`Total: $${total()}`}
          </Typography>


        </Stack>
      </Grid>
      <Grid item container xs={8} spacing={4} className="main" mr="auto">
        <BakeryItems items={bakeryData.filter(typeFilter).sort(sortFilter)} addFav={addFav} deleteFav={deleteFav} fav={fav}></BakeryItems>
      </Grid>
    </Grid>
  );
}

export default App;
