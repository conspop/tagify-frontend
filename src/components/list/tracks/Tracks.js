import React from "react";
import { Col } from "react-bootstrap";
import TrackTile from "./TrackTile";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  column: {
    backgroundColor: "lightgrey",
  },
});

export default function Tracks({ filteredTracks }) {
  const classes = useStyles();
  console.log(filteredTracks);
  return (
    <Col lg={8} className={classes.column}>
      {filteredTracks
        ? filteredTracks.map((track) => <TrackTile track={track} />)
        : ""}
    </Col>
  );
}
