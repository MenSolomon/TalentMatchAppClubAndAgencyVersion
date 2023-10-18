import { createSlice } from "@reduxjs/toolkit";

export const PlayersInAgencySlice = createSlice({
  name: "PlayersInAgencySlice",
  initialState: {
    playersInAgencyArray: [
      {
        firstName: "Richard",
        surName: "Attah",
        Age: "28",
        position: "GK",
        Nationality: "Ghana",
        jerseyNumber: "1",
        image: "/richard attah.jpeg",
      },
      {
        firstName: "Benjamin",
        surName: "Bature",
        Age: "26",
        Nationality: "Ghana",
        position: "CF",
        jerseyNumber: "21",
        image: "/bature.jpg",
      },
      {
        firstName: "Adams",
        surName: "Farouk",
        Nationality: "Ghana",
        Age: "34",
        position: "CB",
        jerseyNumber: "5",
        image: "/farok.jpeg",
      },
      {
        firstName: "Amos",
        surName: "Acheampong",
        Age: "30",
        position: "CDM",
        Nationality: "Ghana",
        jerseyNumber: "6",
        image: "/acheampong.webp",
      },
      {
        firstName: "Stephen",
        surName: "Owusu",
        Age: "26",
        position: "ST",
        Nationality: "Ghana",
        jerseyNumber: "9",
        image: "/stephen owusu.webp",
      },
      {
        firstName: "Solomon",
        surName: "Safo-Taylor",
        Age: "25",
        position: "CF",
        Nationality: "Ghana",
        jerseyNumber: "17",
        image: "/Solomon safo-taylor.jpg",
      },
      {
        firstName: "Solomon",
        surName: "Agbasi",
        Age: "23",
        position: "GK",
        Nationality: "Ghana",
        jerseyNumber: "32",
        image: "/solomon agbasi.jpeg",
      },
      {
        firstName: "Daniel",
        surName: "Opare",
        Age: "33",
        position: "CD",
        Nationality: "Ghana",
        jerseyNumber: "4",
        image: "/opare.jpg",
      },
    ],
  },

  reducers: {
    setPlayersInAgencyArray: (state, action) => {
      state.playersInAgencyArray = action.payload;
    },
  },
});

export const selectPlayersInAgencyArray = (state) =>
  state.PlayersInAgencySlice.playersInAgencyArray;

export const { setPlayersInAgencyArray } = PlayersInAgencySlice.actions;
export default PlayersInAgencySlice.reducer;
