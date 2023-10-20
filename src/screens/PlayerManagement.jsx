import { Avatar, Card } from "@mui/material";
import PlayerManagementTabs from "../components/Tabs/PlayerManagementTabs";
import { selectPlayersInAgencyArray } from "../statemanager/slices/PlayersInAgencySlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PlayerManagement = () => {
  const { playerfullname } = useParams();
  const [filteredPlayerArray, setFilteredPlayerArray] = useState([]);
  const [playerData, setPlayerData] = useState({
    firstName: "",
    surName: "",
    image: "",
    Age: "",
    position: "",
    jerseyNumber: "",
  });
  // const history = useHistory();

  // const handleUsernameChange = (newUsername) => {
  //   // Change the username in the URL
  //   history.push(`/user/${newUsername}`);
  // };

  const subscreensTabArray = [
    "Dashboard",
    "Videos",
    "Inbox",
    "Interested Scouts",
    "Analytics",
    "Settings",
  ];

  const PlayerArray = useSelector(selectPlayersInAgencyArray);

  useEffect(() => {
    const selectedArray = PlayerArray.filter((data) => {
      const { firstName, surName } = data;
      return playerfullname === `${firstName}${surName}`;
    });

    setFilteredPlayerArray(selectedArray);
  }, [playerfullname]);

  useEffect(() => {
    console.log(filteredPlayerArray);
  }, [filteredPlayerArray]);

  // Setting the filtered array to playerData state only when it is not undefined and has a length of greater than 0 which prevents page break down // write a no reults when page array is less than 0
  useEffect(() => {
    if (filteredPlayerArray && filteredPlayerArray.length > 0) {
      const { firstName, surName, image, Age, position, jerseyNumber } =
        filteredPlayerArray[0];

      setPlayerData({
        firstName,
        surName,
        image,
        Age,
        position,
        jerseyNumber,
      });
    } else {
      // Set default values or handle the case when filteredPlayerArray is undefined or empty
      setPlayerData({
        firstName: "",
        surName: "",
        image: "",
        Age: "",
        position: "",
        jerseyNumber: "",
      });
    }
  }, [filteredPlayerArray]);

  // Destructuring the items of playerData

  const { firstName, surName, Age, image, position, jerseyNumber } = playerData;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      {/* // Player Name , Image an jerseyNumber */}
      <div style={{ flex: ".25", display: "flex" }}>
        {/* Player Image */}
        <div
          style={{
            flex: ".25",
            // background: "red",
            paddingTop: "1.5vh",
            position: "relative",
          }}
        >
          {/* // Image Canvas */}
          <Card
            style={{
              float: "right",
              width: "8.5vw",
              height: "18vh",
              background: "blue",
              marginRight: ".5vw",
              borderRadius: "1vw",
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
            }}
          ></Card>

          {/* Club Logo Canvas */}

          <Avatar
            sx={{
              width: 56,
              height: 56,
              position: "absolute",
              bottom: "-3vh",
              left: "30%",
            }}
            src="/ghana.png"
          />
        </div>
        {/* Player Name */}
        <div style={{ flex: ".6", padding: "1vw", paddingLeft: "1vw" }}>
          <h2 style={{ margin: "0" }}> {firstName} </h2>
          <h1 style={{ margin: "0" }}>{surName} </h1>
        </div>
        {/* Jersey Number*/}
        <div style={{ flex: ".15", display: "grid", placeContent: "center" }}>
          <h1 style={{ fontSize: "5em" }}>{jerseyNumber}</h1>
        </div>
      </div>

      {/* // Player details */}
      <div style={{ flex: ".75", display: "flex" }}>
        {/* Player basic information */}

        <div
          style={{
            flex: ".22",
            // background: "white",
            paddingTop: "6vh",
            // background: "red",
            padding: ".8vw",
          }}
        >
          <Card
            className="cardBackground"
            style={{
              width: "100%",
              height: "100%",
              //   background: "red",
              display: "flex",
              flexDirection: "column",
              borderRadius: "1vw",
              padding: "1vw",
            }}
          >
            {/* // Player position , age , height */}
            <div style={{ flex: ".3", paddingRight: "3vw" }}></div>
          </Card>
        </div>

        {/* // TABS AND SUBSCREEMS SECTION */}
        <div style={{ flex: ".78" }}>
          <PlayerManagementTabs
            PlayerManagementTabItemsArray={subscreensTabArray}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerManagement;
