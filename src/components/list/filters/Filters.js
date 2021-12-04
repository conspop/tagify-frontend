import React from "react";
import { Col } from "react-bootstrap";
import FilterControls from "./FilterControls";

export default function Filters({ tracks, setFilteredTracks }) {
  return (
    <Col lg={4}>
      {tracks && (
        <FilterControls tracks={tracks} setFilteredTracks={setFilteredTracks} />
      )}
    </Col>
  );
}
