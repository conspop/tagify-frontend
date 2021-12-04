import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  grid: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "1fr 1fr 3fr 3fr 3fr",
    gridTemplateAreas: `
        "selector image title artist album"
        "selector image tags tags tags"
    `,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
  selector: {
    gridArea: "selector",
    padding: 5,
  },
  imageArea: {
    gridArea: "image",
  },
  image: {
    width: "100%",
    padding: 5,
  },
  title: {
    gridArea: "title",
    padding: 5,
  },
  artist: {
    gridArea: "artist",
    padding: 5,
  },
  album: {
    gridArea: "album",
    padding: 5,
  },
  tags: {
    gridArea: "tags",
    padding: 5,
  },
});

export default function TrackTile({ track }) {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      <div className={classes.selector}></div>
      <div className={classes.imageArea}>
        <img
          className={classes.image}
          src={track.album_image}
          alt="album cover"
        />
      </div>
      <div className={classes.title}>{track.title}</div>
      <div className={classes.artist}>{track.artist}</div>
      <div className={classes.album}>{track.album}</div>
      <div className={classes.tags}>tags</div>
    </div>
  );
}
