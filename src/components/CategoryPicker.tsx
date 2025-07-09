import React, { ComponentProps } from "react";
import CategoryPill from "./CategoryPill";
import { cn } from "@/lib/utils";

// Base props for both pickers
type CategoryPickerBaseProps = ComponentProps<"button"> & {
  categories: string[];
  className?: string;
};

// Single-select picker
export type CategoryPickerSingleProps = CategoryPickerBaseProps & {
  selected: string | undefined;
  setSelected: (value: string | undefined) => void;
};

export function CategoryPickerSingle({
  categories,
  selected,
  setSelected,
  className,
  ...rest
}: CategoryPickerSingleProps) {
  function handleSelect(category: string) {
    // if (selected === category) {
    //   setSelected(undefined);
    // } else {
    setSelected(category);
    // }
  }

  return (
    <div className={cn("flex flex-wrap gap-2 sm:gap-3", className)}>
      {categories.map((category) => (
        <CategoryPill
          key={category}
          category={category}
          selected={selected === category}
          handleSelect={handleSelect}
          {...rest}
        />
      ))}
    </div>
  );
}

// Multi-select picker
export type CategoryPickerMultiProps = CategoryPickerBaseProps & {
  selected: string[] | undefined;
  setSelected: (value: string[] | undefined) => void;
};

export function CategoryPickerMulti({
  categories,
  selected,
  setSelected,
  className,
  ...rest
}: CategoryPickerMultiProps) {
  const selectedArr = Array.isArray(selected) ? selected : [];

  function handleSelect(category: string) {
    let newSelected: string[];
    if (selectedArr.includes(category)) {
      newSelected = selectedArr.filter((item) => item !== category);
    } else {
      newSelected = [...selectedArr, category];
    }
    setSelected(newSelected.length > 0 ? newSelected : undefined);
  }

  return (
    <div className={cn("flex flex-wrap gap-2 sm:gap-3", className)}>
      {categories.map((category) => (
        <CategoryPill
          key={category}
          category={category}
          selected={selectedArr.includes(category)}
          handleSelect={handleSelect}
          {...rest}
        />
      ))}
    </div>
  );
}

// For backward compatibility, you can export a default that throws or guides usage
// export default function CategoryPicker() {
//   throw new Error(
//     "CategoryPicker has been split into CategoryPickerSingle and CategoryPickerMulti. Please use the appropriate component."
//   );
// }
