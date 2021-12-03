import React from 'react'
import { getSongs } from '../../services/api'


export default function List() {

    const [songs, setSongs] = React.useState("")

    React.useEffect(() => {
        (async function() {
          const songs = await getSongs();
          setSongs(songs);
        })();
    }, []);

    console.log(songs)

    return (
        "Yes"
    )
}