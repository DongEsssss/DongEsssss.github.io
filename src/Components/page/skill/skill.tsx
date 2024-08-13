import { Box, Typography } from "@mui/material"
import './skill.scss'

const Skill = () => {
  return (
    <section>
      <Typography variant='h3' sx={{ margin: '0 auto' }}>SKILL</Typography>
      <div style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'center' }}>
        <Box className="skill_box">
          <Typography variant='h6' sx={{ margin: '0 auto' }}>Frontend</Typography>
        </Box>
        <Box className="skill_box">
          <Typography variant='h6' sx={{ margin: '0 auto' }}>Version Control</Typography>
        </Box>
        <Box className="skill_box">
          <Typography variant='h6' sx={{ margin: '0 auto' }}>Backend</Typography>
        </Box>
      </div>
    </section>
  )
}

export default Skill
