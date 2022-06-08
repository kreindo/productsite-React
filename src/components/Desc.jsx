import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";


const Desc = (props) => {
  return (
    <Box sx={{ m: 2, display: "flex", flexGrow: "2" }} gutterBottom gutterTop>
      <Box maxWidth="sm" sx={{display: 'flex'}}>
        {/* <Typography variant="h4">{props.title}</Typography>
        <Typography sx={{ textAlign: "justify" }} variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, possimus
          blanditiis laboriosam officiis laboriosam nulla, veritatis quae
          corrupti adipisci illo nesciunt, laboriosam nulla, veritatis quae
          corrupti adipisci illo nesciunt iusto ipsum? Harum, consequatur
          exercitationem soluta nobis adipisci ex. 
        </Typography> */}
        <Paper
          sx={{ backgroundColor: '#F8D842' }}
          elevation = {12}
          variant = 'outlined' square
        >
          <Typography sx={{mx: 5}} variant="h5">{props.title}</Typography>
          <Typography sx={{mx: 5}} >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            nesciunt, molestias necessitatibus quaerat vero dicta nostrum vel,
            debitis numquam eum libero nam eligendi aliquid mollitia tempora
            delectus error veniam.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Desc;
