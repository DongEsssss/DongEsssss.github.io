import './header.scss'
import LangeBtn from '../../../frame/langtoggle'
import { Box } from '@mui/material'

export const Header = () => {
  return (
    <header>
      <Box className="wrapper">
        <div className='header-title'>DongEsssss, Portfolio</div>
        <LangeBtn />
      </Box>
    </header>
  )
}
