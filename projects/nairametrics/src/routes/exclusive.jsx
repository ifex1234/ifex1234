import { Data } from "../assets/DATA/data/exclusive"
import Box from "@mui/material/Box"
import Pages from "../components/pages"
import Pages2 from "../components/pages2"
import Footer from "../components/footer"

export default function Exclusive() {
  return (
    < >
    <Box overflow='hidden'>

    <Box display='flex' flexDirection='column' gap={1} m='10px'>
      
      <br />
      <Pages2 Header="Exclusive" subHeader=""/>
    </Box>
    <Footer/>
    </Box>
    </>
  )
}
