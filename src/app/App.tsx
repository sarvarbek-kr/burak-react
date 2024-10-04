import { Box, Button, Container, Stack, Typography } from '@mui/material';
import '../css/app.css';
import { RippleBadge } from './MaterialTheme/styled';
import { orange } from '@mui/material/colors';

function App() {
  return <Container sx={{backgroundColor: "orange"}}>
    <Stack flexDirection={"column"}>
      <Box sx={{my: 4}}>
        <Typography variant='h4' component={"h4"}>
          Create app on typescript Redux
        </Typography>
      </Box>
      <Box>
        <RippleBadge badgeContent={4}>
        <Button variant="contained">Contained</Button>
        </RippleBadge>
      </Box>
    </Stack>
  </Container>;
}

export default App;
