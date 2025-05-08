"use client";

import { AnimatedButton } from "@/components/AnimatedButton";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/shared/Select";
import React, { useState } from "react";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { useFilter } from "./filter-context-provider";

export default function FilterDetails() {
  const [sortBy, setSortBy] = useState("most-relevant");
  const { setOpen } = useFilter();

  return (
    <div className="flex flex-col-reverse md:flex-row gap-2 max-md:w-full ml-auto max-md:flex-1 md:items-center">
      <p className="text-sm text-[#B7B7B7] whitespace-nowrap max-md:ml-auto">
        12 results
      </p>
      <div className="flex flex-row gap-x-2  text-[#B7B7B7] items-center">
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="flex-1 min-w-[180px]">
            Sort by: <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="most-relevant">Most relevant</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
          </SelectContent>
        </Select>

        <AnimatedButton
          onClick={() => setOpen((v) => !v)}
          variant="outline"
          className="font-normal text-[#B7B7B7] border-[#222222] bg-[#0F0F0F] hover:bg-[#222222] hover:text-white transition-colors ease-in-out duration-300 flex-1 md:hidden flex flex-row gap-x-2 justify-center"
        >
          <TbAdjustmentsHorizontal size={20} />
          <span>Filter</span>
        </AnimatedButton>
      </div>
    </div>
  );
}
