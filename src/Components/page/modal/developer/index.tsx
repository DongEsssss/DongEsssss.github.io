import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  Slide,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import help_img from "../../../../asset/image/help-developer.jpg";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface DialogProps {
  open: boolean;
  onClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
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
        "& .MuiDialog-paper": {
          position: "absolute",
          right: 0,
          top: 0,
          margin: "20px 8px",
          maxWidth: "800px",
          minWidth: "300px",
          width: "95%",
          height: "95vh",
          zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure it's on top
          overflow: "auto", // Allow scrolling within the dialog
        },
        "& .MuiDialog-paperScrollPaper": {
          maxHeight: "100vh", // Adjust as needed
          overflow: "auto", // Ensure scrolling within the dialog
        },
      }}
    >
      <div
        className="dialog-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DialogTitle className="dialog-title">
          어떤 개발자가 되고 싶은가?
        </DialogTitle>
        <Button
          onClick={onClose}
          sx={{ fontSize: "30px", color: "black" }}
          className="web-btn"
        >
          <IoIosCloseCircleOutline />
        </Button>
      </div>
      <DialogContent sx={{ padding: "0px 24px" }}>
        <DialogContentText id="alert-dialog-slide-description">
          <Typography
            variant="h6"
            sx={{ fontFamily: "initial", fontWeight: "bold" }}
          >
            "이끌어주고 밀어주는 개발자"
          </Typography>
          <img src={help_img} className="dialog-img" alt="deveolper_img" />
          <Typography variant="body2" sx={{ marginTop: "10px" }}>
            학부 시절, 고학년이라는 이유로 조장을 맡게 되었습니다. 팀원 대부분이
            1, 2학년 학우들로 구성되어 있었고, 프로젝트 진행에 어려움을
            겪었습니다. 조장으로서 책임감을 느낀 저는, 팀원들이 웹 개발자가
            되기를 목표로 하고 있을 수도 있다는 생각에 모두가 함께할 수 있는
            프로젝트로 조정하기로 했습니다.
            <br />
            <br />
            처음에 팀원들은 프로젝트 진행과 코드 작성에 어려움을 느꼈습니다.
            그래서 한 명 한 명과 개인 면담을 통해 실력을 파악하고, 역할을 적절히
            분배했습니다. 주마다 할당된 목표를 설정하고, 작은 단계씩 프로젝트를
            진행했습니다. 시간이 남으면 코드에 주석을 달아 팀원들에게 공유하며
            프로젝트와 코드에 대한 이해도를 높이려 노력했습니다.
            <br />
            <br />이 과정에서 팀원들의 프로젝트 참여도와 프로그래밍에 대한
            흥미가 크게 향상되었고, 코딩 실력 또한 눈에 띄게 발전했습니다. 그
            결과, 우리는 10개 조 중 1등을 차지할 수 있었습니다. 이 경험을 통해
            팀을 이끌며 느낀 뿌듯함과 함께, 혼자가 아닌 함께 도전하는 것이
            얼마나 가치 있는 일인지를 깨달았습니다. 이후, 선·후배 개발자들과
            함께 성장하고 이끌어가는 개발자가 되고자 하는 목표를 갖게
            되었습니다.
          </Typography>
        </DialogContentText>
        <Button
          onClick={onClose}
          sx={{ fontSize: "12px", color: "white" }}
          className="mobile-btn"
          variant="contained"
        >
          닫기
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default MyDialog;
