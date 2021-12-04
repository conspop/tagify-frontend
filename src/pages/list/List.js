import React from 'react'
import { getTracks } from "../../services/api";
import Tracks from "../../components/list/Tracks";
import Filters from "../../components/list/Filters";
import { Container, Row } from "react-bootstrap";

export default function List() {
  const [tracks, setTracks] = React.useState("");

  console.log(tracks);

  React.useEffect(() => {
    (async function () {
      const tracks = await getTracks();
      setTracks(tracks);
    })();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Filters />
        <Tracks tracks={tracks} />
      </Row>
    </Container>
  );
}