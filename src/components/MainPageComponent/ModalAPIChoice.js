import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Api from "../../assets/logoCorp/API.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalAPIChoice() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="button">
        <img
          src={Api}
          style={{
            height: 100,
            width: 100,
            margin: 10,
            zindex: 1,
          }}
        ></img>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h3">Choice API:</Typography>
          <Typography id="modal-modal-description" variant="h6" component="h5">
            Main API <a href="https://api-kl.herokuapp.com/">https://api-kl.herokuapp.com/</a>
          </Typography>
          <br />
          <Typography id="modal-modal-description" variant="h6" component="h5">
            API MassMedia Krivbass Lions <a href="https://api-kl.herokuapp.com/MassMedia">https://api-kl.herokuapp.com/MassMedia</a> 
          </Typography>
          <br />
          <Typography id="modal-modal-description" variant="h6" component="h5">
            API Teams Krivbass Lions <a href="https://api-kl.herokuapp.com/team"> https://api-kl.herokuapp.com/team</a>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
