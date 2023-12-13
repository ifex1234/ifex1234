import { Data } from "./data"
import "../App.css"
import { ArrowRight} from "@mui/icons-material"
import { Box,} from "@mui/material"

export default function Aside() {
  return (
    <Box overflowY= 'hidden' >
        {Data.map((item) =>(
            <li className="sideBarItems" key={item.id} > <ArrowRight sx={{height:"20px"}}/>{item.title}</li>
        ))}
    </Box>
  )
}
