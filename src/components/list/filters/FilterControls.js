import React from "react";
import RangeFilter from "./RangeFilter";
import useRangeFilter from "./useRangeFilter";

export default function FilterControls({ tracks, setFilteredTracks }) {
  const [danceability, setDanceability, filterDanceability] =
    useRangeFilter("danceability");
  const [acousticness, setAcousticness, filterAcousticness] =
    useRangeFilter("acousticness");

  React.useEffect(() => {
    let result = tracks;
    console.log(result);
    result = filterDanceability(result);
    result = filterAcousticness(result);
    setFilteredTracks(result);
  }, [
    tracks,
    danceability,
    acousticness,
    setFilteredTracks,
    filterAcousticness,
    filterDanceability,
  ]);

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
