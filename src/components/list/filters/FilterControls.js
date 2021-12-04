import React from "react";
import RangeFilter from "./RangeFilter";
import useRangeFilter from "./useRangeFilter";

export default function FilterControls({ tracks, setFilteredTracks }) {
  const [acousticness, setAcousticness, filterAcousticness] =
    useRangeFilter("acousticness");
  const [danceability, setDanceability, filterDanceability] =
    useRangeFilter("danceability");
  const [energy, setEnergy, filterEnergy] = useRangeFilter("energy");
  const [instrumentalness, setInstrumentalness, filterInstrumentalness] =
    useRangeFilter("instrumentalness");
  const [key, setKey, filterKey] = useRangeFilter("key");
  const [liveness, setLiveness, filterLiveness] = useRangeFilter("liveness");
  const [loudness, setLoudness, filterLoudness] = useRangeFilter("loudness");
  const [mode, setMode, filterMode] = useRangeFilter("mode");
  const [popularity, setPopularity, filterPopularity] =
    useRangeFilter("popularity");
  const [speechiness, setSpeechiness, filterSpeechiness] =
    useRangeFilter("speechiness");
  const [tempo, setTempo, filterTempo] = useRangeFilter("tempo");
  const [timeSignature, setTimeSignature, filterTimeSignature] =
    useRangeFilter("time_signature");
  const [valence, setValence, filterValence] = useRangeFilter("valence");

  React.useEffect(() => {
    let result = tracks;
    result = filterAcousticness(result);
    result = filterDanceability(result);
    result = filterEnergy(result);
    result = filterInstrumentalness(result);
    result = filterKey(result);
    result = filterLiveness(result);
    result = filterLoudness(result);
    result = filterMode(result);
    result = filterPopularity(result);
    result = filterSpeechiness(result);
    result = filterTempo(result);
    result = filterTimeSignature(result);
    result = filterValence(result);
    setFilteredTracks(result);
  }, [
    tracks,
    acousticness,
    filterAcousticness,
    danceability,
    filterDanceability,
    energy,
    filterEnergy,
    instrumentalness,
    filterInstrumentalness,
    key,
    filterKey,
    liveness,
    filterLiveness,
    loudness,
    filterLoudness,
    mode,
    filterMode,
    popularity,
    filterPopularity,
    speechiness,
    filterSpeechiness,
    tempo,
    filterTempo,
    timeSignature,
    filterTimeSignature,
    valence,
    filterValence,
    setFilteredTracks,
  ]);

  return (
    <>
      <RangeFilter
        tracks={tracks}
        property="acousticness"
        multiplier={100}
        setFilter={setAcousticness}
      >
        Acousticness
      </RangeFilter>
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
        property="energy"
        multiplier={100}
        setFilter={setEnergy}
      >
        Energy
      </RangeFilter>
      <RangeFilter
        tracks={tracks}
        property="instrumentalness"
        multiplier={100}
        setFilter={setInstrumentalness}
      >
        Instrumentalness
      </RangeFilter>
      <RangeFilter
        tracks={tracks}
        property="key"
        multiplier={1}
        setFilter={setKey}
      >
        Key
      </RangeFilter>
      <RangeFilter
        tracks={tracks}
        property="liveness"
        multiplier={100}
        setFilter={setLiveness}
      >
        Liveness
      </RangeFilter>
      <RangeFilter
        tracks={tracks}
        property="loudness"
        multiplier={100}
        setFilter={setLoudness}
      >
        Loudness
      </RangeFilter>
      <RangeFilter
        tracks={tracks}
        property="mode"
        multiplier={1}
        setFilter={setMode}
      >
        Mode
      </RangeFilter>
      <RangeFilter
        tracks={tracks}
        property="popularity"
        multiplier={1}
        setFilter={setPopularity}
      >
        Popularity
      </RangeFilter>
      <RangeFilter
        tracks={tracks}
        property="speechiness"
        multiplier={100}
        setFilter={setSpeechiness}
      >
        Speechiness
      </RangeFilter>
      <RangeFilter
        tracks={tracks}
        property="tempo"
        multiplier={1}
        setFilter={setTempo}
      >
        Tempo
      </RangeFilter>
      <RangeFilter
        tracks={tracks}
        property="time_signature"
        multiplier={1}
        setFilter={setTimeSignature}
      >
        Time Signature
      </RangeFilter>
      <RangeFilter
        tracks={tracks}
        property="valence"
        multiplier={100}
        setFilter={setValence}
      >
        Valence
      </RangeFilter>
    </>
  );
}
