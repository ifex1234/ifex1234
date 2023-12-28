import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
import { Exclusive } from './constants';


export default function InnerNavContents({dis}) {
  return (
    <>
    <List sx={{height:"20px", width:"100px", color:"#fff", display:{dis} }}>
        {Exclusive.map((item, idx) =>(
            <ListItem key={idx}>{item}</ListItem>
        ))}
    </List>
    </>
  )
}
