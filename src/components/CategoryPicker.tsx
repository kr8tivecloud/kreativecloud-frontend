import React, { ComponentProps } from "react";
import CategoryPill from "./CategoryPill";
import { cn } from "@/lib/utils";

type CategoryPickerProps = ComponentProps<"button"> & {
  categories: string[];
  selected: string[] | undefined;
  setSelected: (value: string[]) => void;
};

export default function CategoryPicker({
  categories,
  selected,
  setSelected,
  className,
  ...props
}: CategoryPickerProps) {
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
    <div className={cn("flex flex-wrap gap-2 sm:gap-3", className)}>
      {categories.map((category) => {
        return (
          <CategoryPill
            key={category}
            category={category}
            selected={selected}
            handleSelect={handleSelect}
            {...props}
          />
        );
      })}
    </div>
  );
}
