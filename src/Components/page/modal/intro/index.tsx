import React from 'react';
import './intro.scss';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

interface DialogProps {
    open: boolean;
    onClose: () => void;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="right" ref={ref} {...props} />;
});


const Intro = ({ open, onClose }: DialogProps) => {
    return (
        <Dialog open={open} keepMounted TransitionComponent={Transition}
            onClose={onClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Disagree</Button>
                <Button onClick={onClose}>Agree</Button>
            </DialogActions>
        </Dialog>
    );
}

export default Intro;
