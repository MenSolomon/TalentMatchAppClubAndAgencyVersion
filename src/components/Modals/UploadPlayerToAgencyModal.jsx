import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import playerShadowImage from "../../assets/images/playernowatermarks.png";
import youngerPlayerShadowImage from "../../assets/images/youngerplayer.png";
import { Typography } from "@mui/material";
import { Card } from "react-bootstrap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
  height: "94%",
  bgcolor: "background.paper",
  border: "transparent",
  boxShadow: 24,
  borderRadius: "1vw",
  padding: "2vw",
  display: "flex",
  flexDirection: "column",
  paddingTop: "3vh",
};

// MODAL TO CREATE A new profile

function CreateAPlayerProfileModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Card
        onClick={handleOpen}
        className="background primaryTextColor uploadPlayerModalCard"
        style={{
          // background: "#E0FA55",
          height: "45vh",
          width: "20vw",
          display: "flex",
          flexDirection: "column",
          padding: ".4vw",
        }}
      >
        {/* CARD HEADER */}

        <div style={{ flex: ".2" }}>
          <h4>Create a player profile</h4>
        </div>

        {/* Card CONTENT */}
        <div style={{ flex: ".4" }}>
          Profile will include the following: <br />
          <ul>
            <li>Name</li>
            <li>Date of birth</li>
            <li>Nationality</li>
            <li>Profile image , etc</li>
          </ul>
        </div>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          className="cardBackground primaryTextColor"
          sx={{ ...style, width: 1000 }}
        >
          <h2 id="child-modal-title">Create a player profile</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

// MODAL TO ADD EXISTING PLAYER TO AGENCY

function AddPlayerFromDatabaseModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Card
        className="background primaryTextColor uploadPlayerModalCard"
        onClick={handleOpen}
        style={{
          // background: "#E0FA55",
          height: "45vh",
          width: "20vw",
          display: "flex",
          flexDirection: "column",
          padding: ".4vw",
        }}
      >
        {/* CARD HEADER */}

        <div style={{ flex: ".2" }}>
          <h4>Add existing player</h4>
        </div>

        {/* Card CONTENT */}
        <div style={{ flex: ".4" }}>
          Add any player(s) from our existing databases across our the world:{" "}
          <br />
        </div>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          className="cardBackground primaryTextColor"
          sx={{ ...style, width: 1000 }}
        >
          <h2 id="child-modal-title">Add existing player</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function UploadPlayerToAgencyModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Upload player</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 1000,
            display: "flex",
            flexDirection: "column",
          }}
          className="cardBackground primaryTextColor"
        >
          {/* // UPLOAD A PLAYER HEADER */}

          <div style={{ flex: ".2", textAlign: "center" }}>
            <h2 style={{ margin: 0 }} id="parent-modal-title">
              Upload a player
            </h2>
            <Typography>
              Create a new player's profile or select an existing player from
              our database
            </Typography>
          </div>

          {/* // Create a new player profile or upload a player from database */}
          <div style={{ flex: ".7", display: "flex" }}>
            {/* Create a new player profile Area */}
            <div style={{ flex: ".5", display: "flex" }}>
              {/* IMAGE AREA   */}
              <div style={{ flex: ".4" }}>
                <img
                  style={{
                    width: "150px",
                    height: "300px",
                    marginTop: "30%",
                  }}
                  src={youngerPlayerShadowImage}
                />
              </div>

              {/* Card AREA */}
              <div
                style={{
                  flex: ".6",
                  padding: ".4vw",
                  display: "grid",
                  placeContent: "center",
                }}
              >
                <CreateAPlayerProfileModal />
              </div>
            </div>

            {/* upload a player from database  */}

            <div style={{ flex: ".5", display: "flex" }}>
              {/* Card AREA */}
              <div
                style={{
                  flex: ".6",

                  padding: ".4vw",
                  display: "grid",
                  placeContent: "center",
                }}
              >
                <AddPlayerFromDatabaseModal />
              </div>

              {/* IMAGE AREA   */}
              <div style={{ flex: ".4" }}>
                <img
                  style={{ width: "200px", height: "400px" }}
                  src={playerShadowImage}
                />
              </div>
            </div>
          </div>

          {/* <ChildModal /> */}
        </Box>
      </Modal>
    </div>
  );
}

// const PlayerShadowAndCardComponent =()=>{

// return(
//   <div style={{ flex: ".5", display: "flex" }}>
//               {/* IMAGE AREA   */}
//               <div style={{ flex: ".4" }}>
//                 <img
//                   style={{ width: "200px", height: "400px" }}
//                   src={playerShadowImage}
//                 />
//               </div>

//               {/* Card AREA */}
//               <div
//                 style={{
//                   flex: ".6",

//                   padding: ".4vw",
//                   display: "grid",
//                   placeContent: "center",
//                 }}
//               >
//                 <Card
//                   style={{
//                     background: "#E0FA55",
//                     height: "45vh",
//                     width: "20vw",
//                     display: "flex",
//                     flexDirection: "column",
//                     padding: ".4vw",
//                   }}
//                 >
//                   {/* CARD HEADER */}

//                   <div style={{ flex: ".2" }}>
//                     <h4>Create a player profile</h4>
//                   </div>

//                   {/* Card CONTENT */}
//                   <div style={{ flex: ".4" }}>
//                     Profile will include the following: <br />
//                     <ul>
//                       <li>Name</li>
//                       <li>Date of birth</li>
//                       <li>Nationality</li>
//                       <li>Profile image , etc</li>
//                     </ul>
//                   </div>
//                 </Card>
//               </div>
//             </div>

// )

// }
