import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import challenge_img from '../../../../asset/image/challenge.png'
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
    return <Slide direction="right" ref={ref} {...props} />;
});


const Intro = ({ open, onClose }: DialogProps) => {
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
                    left: 0,
                    top: 0,
                    margin: '20px 10px',
                    maxWidth: '800px',
                    minWidth: '400px',
                    width: '95%',
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
                <DialogTitle>임동균은 어떤 사람인가?</DialogTitle>
                <Button onClick={onClose} sx={{ fontSize: '30px', color: 'black' }}><IoIosCloseCircleOutline /></Button>
            </div>
            <DialogContent sx={{ padding: '0px 24px' }}>
                <DialogContentText id="alert-dialog-slide-description">
                    <Typography variant='h6' sx={{ fontFamily: 'initial', fontWeight: 'bold' }}>" 도전하는 자가 아름답다. "</Typography>
                    <img src={challenge_img}style={{ maxWidth: '550px',minWidth:'350px',width:'100%', margin: '10px auto', display: 'flex', justifyContent: 'center' }} alt="intro_img"/>
                    <Typography variant='body2' sx={{ margin: '20px 0px' }}>
                        이 말을 어느 영상 매체에서 보고 나서 어떠한 목표가 있다면 늘 도전하는 저에게 정말 도움과 열정을 주는 문장이었습니다.
                        어떤 목표를 만들면 저는 늘 그것에 대해서 도전했습니다. 늘 실패뿐인 도전들이었습니다. 늘 실패만 하였기 때문에 도전을 포기하고 남들이 하는 것을 따라 하는 시도 있었습니다. 하지만 그것은 제 인생에 있어서 가장 지루하고 재미없는 시간이었다는 것을 깨닫게 되었습니다.
                        <br /> <br />
                        그 시기에 책에서 실패를 두려워하지 말라 그 실패들은 나 자신을 좀 더 업그레이드 해줄 것이고, 남은 삶의 발판이 될 것이라고, 그래서 저는 실패만 했지만, 다시 도전해 보자 한 번 더 벽에 부딫혀 보자는 생각으로 새로운 목표를 정하여 도전하였습니다. 이번에는 세분화하여 큰 목표를 한 번에 이루기 전에 큰 목표를 작은 목표들로 나눠 도전해 보자 그럼 성공할 수 있다고 믿었습니다. 남들과 다르게 도전하는 삶은 즐거웠고, 실패가 있어도 실망하지 않고, 문제점을 찾아 보완하는 습관을 갖게 되었고, 늘 제 생각이 옳다며 타인의 말을 듣지 않았던 점도 어른들 혹은 친구들에게 조언을 얻어 생각하는 태도도 갖게 되었습니다.
                        <br /> <br />
                        이후 모든 목표에 대해서 도전하는 태도가 달라졌습니다. 목표에 도달하지 못해 힘들고, 기분이 안 내킬 때도, 화가 날 때도 늘 한 번 더 한 번 더 도전해 보고, 그래도 잘 안될 때는 지인분들의 조언을 얻어 문제점에 대해서 생각하고 보완점을 찾는 태도를 가지게 되었습니다. 그러니 저의 도전은 실패보다 성공을 끌어냈고, 자신감도 생기게 되었습니다. 늘 도전은 저에게 있어서 삶의 원동력이 되었고, 새로운 도전은 늘 저를 두근거리게 합니다. 늘 겸손의 자세로 도전을 이어 나갈 것입니다.
                    </Typography>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}

export default Intro;
