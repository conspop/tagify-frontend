import React from "react";
import RangeFilter from "./RangeFilter";

export default function FilterControls({ tracks, setFilteredTracks }) {
  const [danceability, setDanceability] = React.useState(null);
  const [acousticness, setAcousticness] = React.useState(null);

  const filterDanceability = (tracks) => {
    if (danceability) {
      return tracks.filter(
        (track) =>
          track.danceability >= danceability[0] &&
          track.danceability <= danceability[1]
      );
    } else {
      return tracks;
    }
  };

  const filterAcousticness = (tracks) => {
    if (acousticness) {
      return tracks.filter(
        (track) =>
          track.acousticness >= acousticness[0] &&
          track.acousticness <= acousticness[1]
      );
    } else {
      return tracks;
    }
  };

  React.useEffect(() => {
    let result = tracks;
    console.log(result);
    result = filterDanceability(result);
    result = filterAcousticness(result);
    setFilteredTracks(result);
  }, [tracks, danceability, acousticness, setFilteredTracks]);

  return (
    <>
      <RangeFilter
        tracks={tracks}
        property="danceability"
        multiplier={100}
        setFilter={setDanceability}
      >
        Danceability
      </RangeFilter>
      <RangeFilter
        tracks={tracks}
        property="acousticness"
        multiplier={100}
        setFilter={setAcousticness}
      >
        Acousticness
      </RangeFilter>
    </>
  );
}
