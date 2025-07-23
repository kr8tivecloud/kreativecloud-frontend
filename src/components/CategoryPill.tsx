import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

interface CategoryPillProps extends ComponentProps<"button"> {
  category: string;
  selected: boolean;
  handleSelect: (category: string) => void;
}

export default function CategoryPill({
  category,
  selected,
  handleSelect,
  className,
  ...props
}: CategoryPillProps) {
  return (
    <button
      key={category}
      type="button"
      className={cn(
        selected ? "bg-white/25" : "bg-[#15151D] hover:bg-[#0D0D11]",
        "text-white text-sm lg:text-base border border-white/25 px-3 py-1 rounded-full transition-colors",
        className
      )}
      onClick={() => handleSelect(category)}
      {...props}
    >
      {category}
    </button>
  );
}
