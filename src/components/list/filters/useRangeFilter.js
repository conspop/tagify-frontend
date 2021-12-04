import React from "react";

export default function useRangeFilter(property) {
  const [filter, setFilter] = React.useState(null);

  const filterFilter = React.useCallback(
    function filterFilter(tracks) {
      if (filter) {
        return tracks.filter(
          (track) =>
            track[property] >= filter[0] && track[property] <= filter[1]
        );
      } else {
        return tracks;
      }
    },
    [filter, property]
  );

  return [filter, setFilter, filterFilter];
}
