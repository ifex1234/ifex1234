import { Box, Card, CardContent, Typography } from "@mui/material";
import PropTypes from 'prop-types'

export default function Pages({info, header}) {
  const { image, title} = info;
  return (
    <Box
      minWidth="96%"
      mx="5px"
      my="5px"
      py="20px"
      display="flex"
      flexDirection={{ xs: "column", sm: "row", md: "row", lg: "row" }}
    >
      <Card
        sx={{
          width: { xs: "99%", sm: "50%", md: "50%", xl: "50%", lg: "50%" },
          height: "520px",
          position: "relative",
          margin:"5px"
        }}
      >
        <img
          src={image}
          alt=""
          height="100%"
          width="100%"
          style={{ objectFit: "cover" }}
        />
        <CardContent sx={{ position: "absolute", bottom: "5%", m:"10px" }}>
          <Box bgcolor="blue" width="80px" mb="20px" borderRadius='2px' p='2px'>
            <Typography color="#fff">{header}</Typography>
          </Box>
          <Box>
            <Typography color="#fff" fontWeight="bold" variant="h4">
              {title}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Box
        display="flex"
        flexDirection="column"
        width={{ xs: "95%", sm: "50%", md: "50%", xl: "50%", lg: "50%" }}
        height="520px"
        m='5px'
        
      >
        <Box height="270px" width="100%" mx="5px" position= "relative">
          <img
            src={image}
            alt=""
            height="100%"
            width="99%"
            style={{ objectFit: "fill" }}
          />
          <CardContent sx={{ position: "absolute", bottom: "5%", m:"10px"}}>
          <Box bgcolor="blue" width="80px" mb="20px" borderRadius='2px' p='2px'>
            <Typography color="#fff">{header}</Typography>
          </Box>
          <Box>
            <Typography color="#fff" fontWeight="bold" variant="h6">
              {title}
            </Typography>
          </Box>
        </CardContent>
        </Box>

        <Box
          height="250px"
          width="100%"
          display="flex"
          mt="5px"
          position= "relative"
          flexDirection={{ xs: "column", sm: "row", md: "row", lg: "row" }}
        >
          <Box height="100%" width="100%" ml="5px" position='relative' >
            <img
              src={image}
              alt=""
              height="100%"
              width="100%"
              style={{ objectFit: "fill" }}
            />
            <CardContent sx={{ position: "absolute", bottom: "5%", m:"10px" }}>
          <Box bgcolor="blue" width="80px" mb="20px" borderRadius='2px' p='2px'>
            <Typography color="#fff">Exclusive</Typography>
          </Box>
          <Box>
            <Typography color="#fff" fontWeight="bold" variant="body2">
              {title}
            </Typography>
          </Box>
        </CardContent>
          </Box>
          <Box height="100%" width="100%" ml="5px" position= "relative" >
            <img
              src={image}
              alt=""
              height="100%"
              width="100%"
              style={{ objectFit: "fill" }}
            />
            <CardContent sx={{ position: "absolute", bottom: "5%" , m:"10px" }}>
          <Box bgcolor="blue" width="80px" mb="20px" borderRadius='2px' p='2px'>
            <Typography color="#fff">{header}</Typography>
          </Box>
          <Box>
            <Typography color="#fff" fontWeight="bold" variant="body2">
              {title}
            </Typography>
          </Box>
        </CardContent>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
