import './header.scss'
import LangeBtn from '../langtoggle'
import { Box } from '@mui/material'

export const Header = () => {
  return (
    <header>
      <Box className="wrapper">
        <div>Header</div>
        <LangeBtn />
      </Box>
    </header>
  )
}
