import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

export default () => {
  const container = useRef(null);
  const [num, setNum] = useState(1);

  useEffect(() => {
    if (container.current) {
      const data = new Array(num).fill(20);
      const root = d3.select(container.current);

      const render = root.selectAll("rect").data(data);

      render
        .enter()
        .append("rect")
        .attr("fill", "red")
        .attr("width", 20)
        .attr("height", 20)
        .attr("x", (d, i) => d * i)
        .attr("y", (d, i) => d * i)
        .text(d => d);

      render.exit().remove();
    }
  }, [container, num]);

  return (
    <div>
      <input
        type="number"
        max="15"
        min="0"
        onChange={e => setNum(parseInt(e.target.value, 0))}
        value={num}
      />{" "}
      Add or remove
      <br />
      <svg
        style={{ marginTop: 20, width: 300, height: 300, background: "#eee" }}
        ref={container}
      />
    </div>
  );
};
