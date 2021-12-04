import React from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

export default function RangeFilter({
  tracks,
  property,
  multiplier,
  setFilter,
  children,
}) {
  const propertyArray = tracks?.map((track) => track[property] * [multiplier]);
  const min = Math.min(...propertyArray);
  const max = Math.max(...propertyArray);

  return (
    <>
      <div>{children}</div>
      <Range
        min={min}
        max={max}
        defaultValue={[min, max]}
        onAfterChange={(value) => {
          setFilter([value[0] / [multiplier], value[1] / [multiplier]]);
        }}
        step={1 / [multiplier]}
      />
    </>
  );
}
