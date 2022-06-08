import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { Card, CardContent, CardActions } from "@mui/material";
// import Button from "@mui/material/Button";

const Desc = (props) => {
  return (
    <Box sx={{ display: "flex", flexGrow: "2" }} gutterBottom gutterTop>
      <Box>
        <Typography variant="h4">{props.title}</Typography>
        <Typography sx={{textAlign: 'justify'}} variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, possimus
          blanditiis laboriosam officiis laboriosam nulla, veritatis quae
          corrupti adipisci illo nesciunt, laboriosam nulla, veritatis quae
          corrupti adipisci illo nesciunt iusto ipsum? Harum, consequatur
          exercitationem soluta nobis adipisci ex.
        </Typography>
      </Box>
      {/*<Card>
         <CardContent>
          <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi nesciunt, molestias necessitatibus quaerat vero dicta nostrum vel, debitis numquam eum libero nam eligendi aliquid mollitia tempora delectus error veniam voluptates suscipit, ratione blanditiis eveniet? Asperiores, laudantium explicabo, aliquam tenetur atque alias repellat velit molestias ex animi, illo minus eaque. Fugit, minima! A temporibus placeat nam quod quo sunt quas corrupti, corporis debitis vero praesentium fugit, iste aut! A eaque magni assumenda molestias perferendis, explicabo sed quam aliquid facilis doloremque veritatis fuga amet eveniet optio iste aliquam non labore commodi quibusdam dolore. Necessitatibus amet nisi perferendis illum deleniti eius repudiandae dolor.</Typography>
        </CardContent>
        <CardActions>
          <Button>Click me!</Button>
        </CardActions>
      </Card> */}
    </Box>
  );
};

export default Desc;
