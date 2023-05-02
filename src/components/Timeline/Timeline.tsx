import React from "react";

import TimelineItem from "../TimelineItem/TimelineItem";
import {TimelineItemType} from "../../types";

type TimelineType = {
  items: TimelineItemType[],
}

const Timeline = ({items}: TimelineType): JSX.Element => (
  <>
    {
      items.map((item: TimelineItemType): JSX.Element =>
        <TimelineItem
          key={item.id}
          id={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
          currency={item.currency}
        />
      )
    }
  </>
)

export default Timeline;
