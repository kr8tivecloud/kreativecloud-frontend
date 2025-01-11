import React, { Ref } from "react";
import { motion } from "motion/react";
import { NavLinkType } from "@/lib/types";

type NavSubmenuProps = {
  selected: number;
  dir: "r" | "l" | null;
  tabs: NavLinkType[];
  ref: Ref<HTMLDivElement>;
};

export default function NavSubmenu({
  dir,
  selected,
  tabs,
  ref,
}: NavSubmenuProps) {
  return (
    <motion.div
      initial={{
        y: "-100%",
        opacity: 50,
      }}
      animate={{
        y: 0,
        opacity: 100,
      }}
      exit={{
        y: "-100%",
      }}
      transition={{
        bounce: 0,
      }}
      // top-[calc(100%_+_24px)]
      className="absolute left-0 right-0 top-0 bg-black border border-[#151515] h-[80vh] overflow-x-hidden flex flex-col"
    >
      <div className="h-28 bg-black"></div>
      {/* <Nub selected={selected} /> */}
      <div className="overflow-y-auto p-4 " ref={ref}>
        {tabs.map((t) => {
          return (
            <motion.div
              id="overlay-content"
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 8,
              }}
              key={t.id}
            >
              {selected === t.id && (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {t.subMenu ? <t.subMenu /> : null}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

// const Bridge = () => <div className="h-[80px]" />;

// const Nub = ({ selected }: { selected: number }) => {
//   const [left, setLeft] = useState(0);

//   const moveNub = useCallback(() => {
//     if (selected) {
//       const hoveredTab = document.getElementById(`shift-tab-${selected}`);
//       const overlayContent = document.getElementById("overlay-content");

//       if (!hoveredTab || !overlayContent) return;

//       const tabRect = hoveredTab.getBoundingClientRect();
//       const { left: contentLeft } = overlayContent.getBoundingClientRect();

//       const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

//       setLeft(tabCenter);
//     }
//   }, [selected]);

//   useEffect(() => {
//     moveNub();
//   }, [selected, moveNub]);

//   return (
//     <motion.span
//       style={{
//         clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
//       }}
//       animate={{ left }}
//       transition={{ duration: 0.25, ease: "easeInOut" }}
//       className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
//     />
//   );
// };
