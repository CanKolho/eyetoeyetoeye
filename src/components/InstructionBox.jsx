import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Reveal } from './motion/Reveal';

const scrollbarStyles = {
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#f5f5f5',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#888888',
  },
}

const InstructionBox = ({ img, header, text }) => {
  return (
    <Reveal>
      <Card sx={{ maxWidth: 345, height: 450, overflow: 'auto', ...scrollbarStyles }}>
        <CardMedia
          sx={{ height: 200 }}
          image={img}
          title={header}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {header}
            <Divider sx={{ mt: 0.5, mb: 3, width: '4.5rem' }} />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Reveal>
  );
}

export default InstructionBox;
