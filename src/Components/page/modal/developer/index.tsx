import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import help_img from '../../../../asset/image/help-developer.jpg'
import { IoIosCloseCircleOutline } from "react-icons/io";

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
    return <Slide direction="left" ref={ref} {...props} />;
});

function MyDialog({ open, onClose }: DialogProps) {
    return (
        <Dialog
            open={open}
            keepMounted
            TransitionComponent={Transition}
            onClose={onClose}
            aria-describedby="alert-dialog-slide-description"
            sx={{
                '& .MuiDialog-paper': {
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    margin: '20px 0px',
                    maxWidth: '800px',
                    minWidth: '400px',
                    width: '100%',
                    height: '95vh',
                    zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure it's on top
                    overflow: 'auto', // Allow scrolling within the dialog
                },
                '& .MuiDialog-paperScrollPaper': {
                    maxHeight: '100vh', // Adjust as needed
                    overflow: 'auto', // Ensure scrolling within the dialog
                },
            }}
        >
            <div className="dialog-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <DialogTitle>임동균은 어떤 개발자가 되고 싶은가?</DialogTitle>
                <Button onClick={onClose} sx={{ fontSize: '30px', color: 'black' }}><IoIosCloseCircleOutline /></Button>
            </div>
            <DialogContent sx={{ padding: '0px 24px' }}>
                <DialogContentText id="alert-dialog-slide-description">
                    <Typography variant='h6' sx={{ fontFamily: 'initial', fontWeight: 'bold' }}>" 이끌어주고 밀어주는 개발자 "</Typography>
                    <img src={help_img} style={{ width: '550px', margin: '10px auto', display: 'flex', justifyContent: 'center' }} />
                    <Typography variant='body1' sx={{ marginTop: '10px' }}>
                        이런 개발자를 목표 하게 된 계기는 학부 시절에 저는 고학년이라는 이유로 조에 조장을 맡게 되었습니다.
                        팀원이 모이고 보니 1, 2학년 학우들이 많아서 프로젝트를 진행하는 것에 있어서 난항을 겪었습니다. 그래서 저는 조장이었기에 맡은 역할을 가져가야 했다고 생각했습니다. 하지만 팀원들이 웹개발자를 목표를 두고고 있을 수도 있다는생각에 팀원들과과 다 함께 할 수 있는 프로젝트를진행하자고고 생각하였고 그 팀원들과 함께 할 수 있는 방향과 난이도로 프로젝트를 조정하였습니다. 팀원들은 처음에 프로젝트를 어떻게 진행해야 하는지 코드를 어떻게 작성해야 하는지 감을 잡지 못하였습니다. 그래서 팀원 한명 한명과 개인적인 면담을 통해 팀원들의 실력에 따라 역할 분담을 하였고, 주마다 할당치를 정하였고 계단식으로한 걸음씩씩 프로젝트를 진행했습니다. 시간이 남으면 프로젝트 코드에 주석을 달아 팀원들에게 공유하면서 팀원들에게 프로젝트에 대한 이해도와 코드에 대한 이해도를 높여주었습니다. 이를 통해 팀원들의 프로젝트에 참여도와 함께 프로그래밍에 대한 흥미를 느낄 수 있게 해주었고, 코딩 실력 또한향상할킬 수 있었습니다. 이는 10개의 조 중 1등을 하는 좋은 결과를 낳을 수 있었습니다.이 때때 저는 뿌듯함과 동시에 다 함께 나아가는 것은 어렵지만 훌륭한 일이라는 것을 느껴 혼자가 아닌 다 함께 도전할 수 있도록선·후임임 개발자들을 밀어주고 이끌어주는 함께 나아가는 개발자가 되고 싶다는 목표로 갖게 되었습니다.
                    </Typography>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}

export default MyDialog;
