import { Box, Typography } from '@mui/material';
import './footer.scss'
import { useTranslation } from 'react-i18next'

//icon
import { FaInstagram, FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";
import { useNavigate, useNavigation } from 'react-router-dom';

export const Footer = () => {
  const { t } = useTranslation();

  //my sns links
  const gitpage = 'https://github.com/DongEsssss'
  const instagrampage = 'https://www.instagram.com/dong_punch'
  const tistorypage = 'https://developer-donge.tistory.com/'

  return (
    <footer>
      <Box>
        <div className='nav-item'>
          <div className="icon">
            <FaGithub onClick={() => window.open(`${gitpage}`)} />
          </div>
          <div className="icon">
            <FaInstagram onClick={() => window.open(`${instagrampage}`)} />
          </div>
          <div className="icon">
            <SiTistory onClick={() => window.open(`${tistorypage}`)} />
          </div>
        </div>
        <Typography variant='h6'>Copyright ⓒ 2024. DongGyun All rights reserved.</Typography>
      </Box>
    </footer>
  )
}
