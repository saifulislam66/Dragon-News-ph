import React from "react";
import Marquee from "react-fast-marquee";
function Markquee() {
  return (
    <div className="flex w-11/12 items-center justify-center p-3 bg[#F3F3F3] gap-5">
      <p className="bg-[#D72050] px-3 py-2 m-0">Latest</p>
      <Marquee>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
}

export default Markquee;
