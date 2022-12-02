import { ButtonBase, Card, CardActions, CardContent, CardMedia, Grid, Typography, Button, FormControl } from "@mui/material";
import Box from '@mui/material/Box';

export default function BakeryItems(props) {
    const cards = [];
    const data = props.items;


    data.forEach((item,index) => { 
        // let btn;
        // if (item.id in props.fav) {
        //     btn = <Button variant="contained" onClick={() => props.deleteFav(item.id)}>Remove from Favorites</Button>
        // } else {
        //     btn = <Button variant="contained" onClick={() => props.addFav(item.id)}>Add to Favorites</Button>
        // }
        
        cards.push(
            <Grid key={index} item xs={6}>
                    <Card sx={{ display: 'flex', justifyContent: 'space-between' }} >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                                <Typography align="left" gutterBottom variant="h4" component="div">
                                    {item.name}
                                </Typography>
                                <Typography align="left" variant="body2">
                                    ${item.price} Calories: {item.calories}
                                </Typography>
                                <Typography align="left" variant="body2">
                                    Type: {item.type}
                                </Typography>
                                <Typography align="left" variant="body2">
                                    Dietary Restrictions: {item.dietaryRestrictions}
                                </Typography>
                                <Typography align="left" variant="body2">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                            {(item.id in props.fav) ? <Button variant="contained" onClick={() => props.deleteFav(item.id)}>Remove from Favorites</Button> : <Button variant="contained" onClick={() => props.addFav(item.id)}>Add to Favorites</Button>}
                            </CardActions>
                        </Box>
                        <CardMedia component="img" sx={{ width: 200, }} image={item.image} alt={item.name} />
                    </Card>
            </Grid>
        )
    });
    return (
        <Grid item container xs={12} spacing={4} className="main" mr="auto">
            {cards}
        </Grid>
    )
    // let btn;
    // if (props.item.id in props.fav) {
    //     btn = <Button variant="contained" onClick={() => props.deleteFav(props.item.id)}>Remove from Favorites</Button>
    // } else {
    //     btn = <Button variant="contained" onClick={() => props.addFav(props.item.id)}>Add to Favorites</Button>
    // }
    // return (
    //     <>
    //         <Card sx={{ display: 'flex', justifyContent: 'space-between' }} >
    //             <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    //                 <CardContent>
    //                     <Typography align="left" gutterBottom variant="h4" component="div">
    //                         {props.item.name}
    //                     </Typography>
    //                     <Typography align="left" variant="body2">
    //                         ${props.item.price} Calories: {props.item.calories}
    //                     </Typography>
    //                     <Typography align="left" variant="body2">
    //                         Type: {props.item.type}
    //                     </Typography>
    //                     <Typography align="left" variant="body2">
    //                         Dietary Restrictions: {props.item.dietaryRestrictions}
    //                     </Typography>
    //                     <Typography align="left" variant="body2">
    //                         {props.item.description}
    //                     </Typography>
    //                 </CardContent>
    //                 <CardActions>
    //                     {btn}
    //                 </CardActions>
    //             </Box>
    //             <CardMedia component="img" sx={{ width: 200, }} image={props.item.image} alt={props.item.name} />
    //         </Card>
    //     </>
    // );
}