import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "bg-[#15151D]/60 text-base text-white p-4 outline outline-1 outline-white/25 focus:outline-white/50 transition-colors",
        className
      )}
      {...props}
    />
  );
}
