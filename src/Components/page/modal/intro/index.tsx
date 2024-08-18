import './intro.scss';
import { Box, Button, Typography, Modal } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IntroProps {
    open: boolean;
    onClose: () => void;
}

const Intro = ({ open, onClose }: IntroProps) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Button onClick={onClose}>Close</Button>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    );
}

export default Intro;
