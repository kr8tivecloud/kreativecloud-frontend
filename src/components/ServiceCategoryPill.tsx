import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

type ServiceCategoryPillProps = ComponentProps<"button"> & {
  categories: string[];
  selected: string[] | undefined;
  setSelected: (value: string[]) => void;
};

export default function ServiceCategoryPill({
  categories,
  selected,
  setSelected,
  className,
  ...props
}: ServiceCategoryPillProps) {
  function handleSelect(category: string) {
    let newSelected: string[] = [];
    if (selected?.includes(category)) {
      newSelected = selected.filter((item) => item !== category);
    } else {
      newSelected = [...(selected ?? []), category];
    }
    setSelected(newSelected);
  }

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {categories.map((category) => {
        return (
          <button
            key={category}
            type="button"
            className={cn(
              selected?.includes(category)
                ? "bg-white/25"
                : "bg-[#15151D] hover:bg-[#0D0D11]",
              "text-white text-sm border border-black/25 px-3 py-1 rounded-full transition-colors",
              className
            )}
            onClick={() => handleSelect(category)}
            {...props}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
