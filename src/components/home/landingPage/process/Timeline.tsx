import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <VerticalTimeline
      lineColor="#00E5FF"
      className="custom-line-width"
      layout="2-columns"
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "transparent",
          border: "none",
          boxShadow: "none",
          margin: 0,
          padding: 0,
          position: "relative",
        }}
        contentArrowStyle={{ display: "none" }}
        iconStyle={{
          background: "#191919",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          boxShadow: "none",
          color: "white",
        }}
        icon={<span className="text-white">1</span>}
      >
        <div className="relative text-right" style={{ marginRight: "0.8rem" }}>
          <h3 className="text-[#00E5FF] text-base m-0 p-0 leading-[1] block">
            30min
          </h3>
          <p
            className="text-white !text-2xl m-0 p-0 leading-[1] block"
            style={{ marginTop: "0.5rem" }}
          >
            Consultation
          </p>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
