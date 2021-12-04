import React from 'react'
import { getTracks } from "../../services/api";
import Tracks from "../../components/list/tracks/Tracks";
import Filters from "../../components/list/filters/Filters";
import { Container, Row } from "react-bootstrap";

export default function List() {
  const [tracks, setTracks] = React.useState("");
  const [filteredTracks, setFilteredTracks] = React.useState("");

  React.useEffect(() => {
    (async function () {
      const tracks = await getTracks();
      setTracks(tracks);
    })();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Filters tracks={tracks} setFilteredTracks={setFilteredTracks} />
        <Tracks filteredTracks={filteredTracks} />
      </Row>
    </Container>
  );
}