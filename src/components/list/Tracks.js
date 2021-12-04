import React from "react";
import { Col } from "react-bootstrap";
import TrackTile from "./TrackTile";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  column: {
    backgroundColor: "lightgrey",
  },
});

export default function Tracks({ tracks }) {
  const classes = useStyles();
  return (
    <Col lg={8} className={classes.column}>
      {tracks ? tracks.map((track) => <TrackTile track={track} />) : ""}
    </Col>
  );
}
