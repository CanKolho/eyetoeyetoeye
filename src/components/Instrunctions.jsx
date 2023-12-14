import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';

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
  const isMobile = useMediaQuery('(max-width: 900px)')
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
          <Typography sx={{ fontSize: '2.5rem' }}>
            Instructions
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

const instructions = [
  {
    img: img1,
    header: 'Step 1',
    text: 'EyeToEyeToEye -Telepresence – katsekamera kotelossaan.'
  },
  {
    img: img2,
    header: 'Step 2',
    text: `Kotelo avattuna, kamera kiinnittimineen ja kiinnitysliuska.Kameran kuvauspää nojaa suojaavaa 
    pehmeää päätyä vasten ja kiinnitysliuskan kiinnike
    kotelon toisessa päässä.`
  },
  {
    img: img3,
    header: 'Step 3',
    text: 'Kiinnitysliuska, kamera ja kotelo (kokoon taitettuna).'
  },
  {
    img: img4,
    header: 'Step 4',
    text: 'Kiinnitysliuskan ripustus näytön reunaan ennen kiinnikkeen taivuttamista näytön yläreunan ympäri.'
  },
  {
    img: img5,
    header: 'Step 5',
    text: `Kiinnitysliuskan kiinnike väännetään näytön yläreunan ympäri kiinnitys/käyttöasentoonsa.
    ! Varmista että  kiinnitysliuskan ja näytön pinnat ovat puhtaita, eikä 
    niiden pinnassa ole näyttöä  naarmuttavia roskia tai hiekanjyviä !`
  },
  {
    img: img6,
    header: 'Step 6',
    text: `Kameran korkeuden  arviointi kiinnitysliuskassa  näytöllä vähän alle 
    puoliväliin alhaalta mitaten. Kamera sijoitetaan liuskan kanssa hieman 
    näytön vasemmalle puoliskolle.`
  },
  {
    img: img7,
    header: 'Step 7',
    text: `Kameran kiristinrenkaan (jossa EyeToEyeToEye-teksti) kierto 
    myötäpäivään auki-asentoonsa mahdollisimman kauas imukupista.`
  },
  {
    img: img8,
    header: 'Step 8',
    text: `Kameran imukupin painaminen kiinnitysliuskan pintaan  (lujasti, 
      kiinteää pintaa kuten pöytää vastaan). Kiristinrengas kierretään johto  
      alaspäin lähtien ja linssin päällä oleva numeroteksti vaakasuorassa.`
  },
  {
    img: img9,
    header: 'Step 9',
    text: `Kameran kiristinrengas (valkoinen nuoli) kunnolla kiristettynä 
    heilumattomaksi (kierteitä 2-2,5 uraa näkyvissä), yhdistelmä valmiina 
    ruudulle ripustettavaksi. Irrotus tapahtuu imukupin pienestä 
    kielekkeestä (keltainen nuoli) ulospäin sormilla kevyesti vetäen.`
  },
  {
    img: img10,
    header: 'Step 10',
    text: `Kamera valmiina ruudun vasemmalla puolella,  vastaanottajan 
    kuva osaikkunassa ja tuotuna kameran viereen, silmät kameran linssin 
    tasalla. Sininen valo kamerassa ilmoittaa sen olevan päällä.
    Käytössä oleva kamera vaihdetaan tämän ikonin takaa.`
  },
  {
    img: img11,
    header: 'Step 11',
    text: `Osaikkunan muodostaminen näyttöruutuun.
    Helposti liikuteltava ja kooltaan säädettävä ”osaikkuna” voidaan avata 
    hiirellä klikaten ikkunan/näytön oikeassa ylänurkassa olevasta 
    ruudusta, viivan ja X välissä.
    Ottamalla syntyneen osaikkunan yläreunasta kiinni, sitä voidaan 
    siirtää,  ja sivu-tai alareunasta tai ikkunan kulmasta tarttumalla ja 
    venyttämällä sen kokoa voi muuttaa. Osaikkunan yläreunan osuessa 
    näytön yläreunaan automatiikka avaa harmillisesti osaikkunan koko 
    näytön suuruiseksi. Muualle yläreunasta siirtämällä se jälleen pienenee.`
  },
  {
    img: img11,
    header: 'Step 12',
    text: `Omat kasvot pikkuruudussa (PR) on hyvä tuoda 
    keskustelukuppanin kasvojen viereen, jos mahdollista, kameran 
    (punainen pallo) suhteen toiselle, vastaanottajan  kasvojen oikealle 
    puolelle, kaikki samalle tasalle.
    Lähettäjän (kameran käyttäjän) on hyvä seurata pikkuruudusta (PR) 
    omien kasvojen sijoittumista pikkuruudun keskelle  sopivan kokoisina 
    ja hyvällä korkeudella.  Pystysuunnassa omia kasvoja voi  myös 
    nostaa/laskea näyttöä eteen/taakse kallistamalla. Etäisyys kameraan 
    määrää kasvojen koon. Omien kasvojen valaistusta on hyvä kuvassa 
    välillä seurata.
    Mikrofonin voit vaihtaa oikealla alhaalla olevaa kovaäänisen kuvaa 
    hiiren oikealla painikkeella painaen. Valitse ”avaa ääniasetukset” ja 
    valitse tarvittaessa ”1080P PC kamera”. Mikrofonin toimintaa voi tässä 
    myös ikkunassa testata, samoin vaihtaa käytettävää kameraa jos 
    tarpeen.`
  }
]