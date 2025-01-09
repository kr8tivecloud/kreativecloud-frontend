import React, { useState, useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import cn from "classnames";
import { useWindowSize } from "@/lib/hooks/useWindowSize";

interface TimelineItem {
  id: number;
  title: string;
  tag: string;
  content: string;
}

const timelines = [
  {
    id: 1,
    title: "Consultation",
    tag: "30mins",
    position: "left",
    content:
      "We'll schedule a meeting to understand your vision, goals, and project, ensuring we align with your expectations.",
  },
  {
    id: 2,
    title: "Initial Submission",
    tag: "",
    position: "right",
    content:
      "Send in necessary materials needed to kickstart the design process.",
  },
  {
    id: 3,
    title: "Design & Development",
    tag: "Flexible",
    position: "left",
    content:
      "Our team will begin the creative process, developing concepts and structuring the project to bring your vision to life.",
  },
  {
    id: 4,
    title: "Review & Revisions",
    tag: "Flexible",
    position: "right",
    content:
      "Project/Design will be reviewed to ensure it's tailored to your desired needs & expectation.",
  },
  {
    id: 5,
    title: "Launch & Support",
    tag: "",
    position: "left",
    content:
      "Once finalized, we’ll deliver the completed project and provide any necessary support to ensure a seamless experience.",
  },
];

const TimelineCard = ({
  timeline,
  position,
  isActive,
  onHover,
  onClick,
}: {
  timeline: TimelineItem;
  position: "left" | "right";
  isActive: boolean;
  onHover: (id: number | null) => void;
  onClick: (id: number) => void;
}) => {
  const width = useWindowSize();

  return (
    <VerticalTimelineElement
      className={cn("", {
        "active-element": isActive,
      })}
      intersectionObserverProps={{
        threshold: 0.2,
        triggerOnce: false,
      }}
      contentStyle={{
        background: "transparent",
        border: "none",
        boxShadow: "none",
        margin: 0,
        padding: 0,
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
        cursor: "pointer",
        transition: "all 0.3s ease",

        padding: width >= 1170 ? "0" : width <= 480 ? "1.5rem" : "2rem",
      }}
      iconOnClick={() => onClick(timeline.id)}
      icon={
        <div
          className="font-encodeMedium timeline-icon flex items-center justify-center transition-all duration-300"
          onClick={() => onClick(timeline.id)}
          onMouseEnter={() => onHover(timeline.id)}
          onMouseLeave={() => onHover(null)}
          role="button"
          tabIndex={0}
        >
          {timeline.id}
        </div>
      }
    >
      <div
        className={cn("relative", {
          "pt-4 2xs:pt-5 min-[1170px]:pt-4": !timeline.tag,
          "pt-1 2xs:pt-2 min-[1170px]:pt-0": timeline.tag,
          "text-right mr-10 2xs:mr-12 min-[1170px]:mr-4": position === "left",
          "text-left ml-10 2xs:ml-12 min-[1170px]:ml-4": position === "right",
        })}
      >
        <p
          className="text-[#00E5FF] text-xs 2xs:text-sm xl:text-base"
          style={{ margin: 0 }}
        >
          {timeline.tag}
        </p>
        <h3 className="text-white text-sm 2xs:text-base xl:text-lg 2xl:text-xl">
          {timeline.title}
        </h3>

        {isActive && (
          <div
            className={cn(
              "absolute flex justify-center items-center text-center text-[8px] min-[400px]:text-[10px] 2xs:text-xs xs:text-sm z-10 p-3 xs:p-4 w-32 min-[400px]:w-40 2xs:w-48 xs:w-56 sm:w-64 lg:w-56 xl:w-60 h-32 min-[400px]:h-40 2xs:h-48 xs:h-56 sm:h-64 lg:h-56 xl:h-60 bg-transparent opacity-0 animate-cloud-fadeIn",
              {
                "left-[calc(100%+70px)] min-[400px]:left-[calc(100%+75px)] 2xs:left-[calc(100%+85px)] xl:left-[calc(100%+100px)] right-cloud-bg":
                  position === "left",
                "right-[calc(100%+70px)] min-[400px]:right-[calc(100%+75px)] 2xs:right-[calc(100%+85px)] xl:right-[calc(100%+100px)] left-cloud-bg":
                  position === "right",
              }
            )}
            style={{
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {timeline.content}
          </div>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Timeline = () => {
  const [activeElement, setActiveElement] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const width = useWindowSize();

  useEffect(() => {
    const checkIfMobile = () => {
      const mediaQuery = window.matchMedia("(hover: none)");
      setIsMobile(mediaQuery.matches);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        timelineRef.current &&
        !timelineRef.current.contains(event.target as Node)
      ) {
        setActiveElement(null);
      }
    };

    if (isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMobile]);

  const handleElementHover = (id: number | null) => {
    if (!isMobile) {
      setActiveElement(id);
    }
  };

  const handleElementClick = (id: number) => {
    if (isMobile) {
      setActiveElement(activeElement === id ? null : id);
    }
  };

  const customTimelineStyles = `
  .vertical-timeline.vertical-timeline--two-columns:before {
    width: 2px;
    background: linear-gradient(180deg, #00E5FF 0%, #00ffff 50%, #00E5FF 100%);
  }
  
  .vertical-timeline-element.active-element .vertical-timeline-element-icon {
    background: #00E5FF !important;
    transition: background-color 0.3s ease;
    box-shadow: 0 0 15px #00E5FF;
  }
  
  .vertical-timeline.highlight-effect:before {
    background: linear-gradient(180deg, #00E5FF 0%, #00ffff 50%, #00E5FF 100%);
    box-shadow: 
      0 0 7px #00E5FF,
      0 0 10px #00E5FF,
      0 0 21px #00E5FF,
      0 0 42px #00E5FF;
    animation: lightningPulse 1.5s infinite;
  }
  
  .vertical-timeline-element-icon {
    border-radius: 50% !important;
    overflow: hidden;
  }
  
  .timeline-icon {
    width: 100% !important;
    height: 100% !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 50% !important;
  }
  
  @keyframes lightningPulse {
    0% {
      opacity: 1;
      box-shadow: 
        0 0 7px #00E5FF,
        0 0 10px #00E5FF,
        0 0 21px #00E5FF,
        0 0 42px #00E5FF;
    }
    50% {
      opacity: 0.7;
      box-shadow: 
        0 0 10px #00E5FF,
        0 0 20px #00E5FF,
        0 0 40px #00E5FF,
        0 0 80px #00E5FF;
    }
    100% {
      opacity: 1;
      box-shadow: 
        0 0 7px #00E5FF,
        0 0 10px #00E5FF,
        0 0 21px #00E5FF,
        0 0 42px #00E5FF;
    }
  }

  @media (hover: hover) {
    .timeline-icon:hover {
      background: #00E5FF !important;
      box-shadow: 0 0 15px #00E5FF;
    }
  }
  
  .vertical-timeline::before {
    transition: all 0.3s ease;
  }

  @media only screen and (max-width: 1170px) {
    .vertical-timeline.vertical-timeline--two-columns {
      width: 100%;
    }

    .vertical-timeline.vertical-timeline--two-columns:before {
      left: 50%;
    }

    .vertical-timeline-element {
      margin: 3rem 0;
    }

    .vertical-timeline--two-columns .vertical-timeline-element-icon {
      left: 50%;
      margin-left: -${
        width >= 1170 ? "2rem" : width <= 480 ? "1.5rem" : "2rem"
      };
    }

    .vertical-timeline--two-columns .vertical-timeline-element-content {
      margin-left: 0;
      padding: 0;
      width: 50%;
    }

    .vertical-timeline--two-columns .vertical-timeline-element.vertical-timeline-element--right .vertical-timeline-element-content,
    .vertical-timeline--two-columns .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content {
      float: right;
    }
  }
`;

  return (
    <div
      className="font-encodeRegular w-full flex justify-center items-center"
      ref={timelineRef}
    >
      <style>{customTimelineStyles}</style>
      <VerticalTimeline
        animate={true}
        layout="2-columns"
        lineColor="#00E5FF"
        className={cn({
          "highlight-effect": activeElement !== null,
        })}
      >
        {timelines.map((timeline, index) => (
          <TimelineCard
            key={`timeline-${index}`}
            timeline={timeline}
            position={index % 2 === 0 ? "left" : "right"}
            isActive={activeElement !== null && timeline.id <= activeElement}
            onHover={handleElementHover}
            onClick={handleElementClick}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
