import { Data } from "./data"
import "../App.css"
import { ArrowRight, ArrowBackIos, ArrowForwardIos} from "@mui/icons-material"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { useRef } from 'react';

export default function Aside() {
  const myRef = useRef(null);
  return (
    <Box overflowY= 'hidden' pb='10px' position='sticky' top='0px' ref={myRef}>
        {Data.slice(0, 10).map((item) =>(
            <li className="sideBarItems" key={item.id} > <ArrowRight sx={{height:"20px"}}/>{item.title}</li>
        ))}
        <Button  size="small" variant="contained" color='inherit'><ArrowBackIos sx={{height:"20px"}}/>Prev </Button> 
        
    </Box>
  ) 
}
