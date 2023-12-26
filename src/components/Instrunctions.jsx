import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';

import InstructionBox from './InstructionBox';

import img1 from '../assets/instructions/ins1.jpg';
import img2 from '../assets/instructions/ins2.jpg';
import img3 from '../assets/instructions/ins3.jpg';
import img4 from '../assets/instructions/ins4.jpg';
import img5 from '../assets/instructions/ins5.jpg';
import img6 from '../assets/instructions/ins6.jpg';
import img7 from '../assets/instructions/ins7.jpg';
import img8 from '../assets/instructions/ins8.jpg';
import img9 from '../assets/instructions/ins9.jpg';
import img10 from '../assets/instructions/ins10.jpg';
import img11 from '../assets/instructions/ins11.jpg';

const Instructions = () => {
  const { t } = useTranslation()
  const isMobile = useMediaQuery('(max-width: 900px)')

  const instructions = getInstructions(t)
  console.log('ins',instructions)

  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '3rem',
        my: 20,
        mx: isMobile ? 5 : 10,
        }}>
          <Typography sx={{ fontSize: '3.5rem' }}>
            {t('instructions.header')}
          </Typography>
          <Divider sx={{ width: '75%' }} />
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '5rem',
            mx: isMobile ? 5 : 10,
            mt: 12
            }}>
            {instructions.map((obj, index) => (
              <InstructionBox 
                img={obj.img}
                header={obj.header}
                text={obj.text}
                key={index}
              />
            ))}
          </Box>
      </Box>
    </>   
  )
}

export default Instructions

const getInstructions = (t) => { 
  return ( 
    [
      {
        img: img1,
        header: t('instructions.step1.header'),
        text: t('instructions.step1.text')
      },
      {
        img: img2,
        header: t('instructions.step2.header'),
        text: t('instructions.step2.text')
      },
      {
        img: img3,
        header: t('instructions.step3.header'),
        text: t('instructions.step3.text')
      },
      {
        img: img4,
        header: t('instructions.step4.header'),
        text: t('instructions.step4.text')
      },
      {
        img: img5,
        header: t('instructions.step5.header'),
        text: t('instructions.step5.text')
      },
      {
        img: img6,
        header: t('instructions.step6.header'),
        text: t('instructions.step6.text')
      },
      {
        img: img7,
        header: t('instructions.step7.header'),
        text: t('instructions.step7.text')
      },
      {
        img: img8,
        header: t('instructions.step8.header'),
        text: t('instructions.step8.text')
      },
      {
        img: img9,
        header: t('instructions.step9.header'),
        text: t('instructions.step9.text')
      },
      {
        img: img10,
        header: t('instructions.step10.header'),
        text: t('instructions.step10.text')
      },
      {
        img: img11,
        header: t('instructions.step11.header'),
        text: t('instructions.step11.text')
      },
      {
        img: img11,
        header: t('instructions.step12.header'),
        text: t('instructions.step12.text')
      }
    ]
  )
}