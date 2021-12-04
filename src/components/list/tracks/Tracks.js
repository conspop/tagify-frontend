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
  return (
    <Col lg={8} className={classes.column}>
      {filteredTracks
        ? filteredTracks.map((track) => (
            <TrackTile key={track.id} track={track} />
          ))
        : ""}
    </Col>
  );
}
