import Box from "@mui/material/Box"
import Pages from "../components/pages"
import Pages2 from "../components/pages2"
import Footer from "../components/footer"

export default function Economy() {
  return (
    <>
    <Box display='flex' flexDirection='column' gap={1} m='10px'>
      <Pages/>
      <br />
      <Pages2/>
    </Box>
    <Footer/>
    </>
  )
}
