import './header.scss'
// import LangeBtn from '../../../frame/langtoggle'
import { Box } from '@mui/material'

export const Header = () => {
  return (
    <header>
      <div className='header'>
        <Box className="wrapper">
          <div className='header-title'>DongEsssss</div>
          {/* <LangeBtn /> */}
        </Box>
      </div>
    </header>
  )
}
