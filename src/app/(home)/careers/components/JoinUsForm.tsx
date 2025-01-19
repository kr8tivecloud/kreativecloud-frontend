"use client";

import Input from "@/components/Input";
import ServiceCategoryPill from "@/components/ServiceCategoryPill";
import React from "react";
import { FieldError, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "@/components/FormError";
import { AnimatedButton } from "@/components/AnimatedButton";
import { joinUsFormSchema } from "@/apis/join-us/join-us.schemas";
// import { FiX } from "react-icons/fi";
import { HiPaperClip } from "react-icons/hi2";

export default function JoinUsForm() {
  const joinUsForm = useForm<z.infer<typeof joinUsFormSchema>>({
    resolver: zodResolver(joinUsFormSchema),
  });
  // const attachmentInputRef = useRef<HTMLInputElement>(null);

  function onSubmit(values: z.infer<typeof joinUsFormSchema>) {
    console.log(values);
  }

  const setAttachment: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files[0]) {
      joinUsForm.setValue("portfolio", e.target.files[0]);
    }
  };

  // const clearAttachment: React.MouseEventHandler = (e) => {
  //   e.stopPropagation();
  //   joinUsForm.setValue("portfolio", null);
  //   if (attachmentInputRef.current?.value) {
  //     attachmentInputRef.current.value = "";
  //   }
  // };

  return (
    <section className="relative z-[1]">
      <div className="px-4 sm:container py-16">
        <div className="text-center">
          <h3 className="text-5xl text-white font-bold">Join Us</h3>
          <p className="text-[#E7E9F7] text-sm mt-1">
            Please fill in your details
          </p>
        </div>

        <form
          action=""
          className="max-w-2xl mx-auto mt-4 space-y-4"
          onSubmit={joinUsForm.handleSubmit(onSubmit)}
        >
          <div className="flex gap-x-4 min-w-0">
            <div className="flex-1 min-w-0">
              <Input className="w-full" placeholder="First name" />
              <FormError error={joinUsForm.formState.errors.firstName} />
            </div>
            <div className="flex-1 min-w-0">
              <Input className="w-full" placeholder="Last name" />
              <FormError error={joinUsForm.formState.errors.lastName} />
            </div>
          </div>

          <div>
            <Input type="email" placeholder="Email" className="w-full" />
            <FormError error={joinUsForm.formState.errors.email} />
          </div>

          <div>
            <Input placeholder="Phone Number" className="w-full" />
            <FormError error={joinUsForm.formState.errors.phone} />
          </div>

          <div>
            <Input placeholder="Your social media" className="w-full" />
            <FormError error={joinUsForm.formState.errors.socialMedia} />
          </div>

          <p className="font-bold text-sm">What is your speciality:</p>
          {/* SERVICE CATEGORY */}
          <div>
            <ServiceCategoryPill
              categories={[
                "Full stack development",
                "Graphic design",
                "UI/UX design",
                "Branding",
                "Social Media",
                "Marketing",
                "Content creation",
              ]}
              selected={joinUsForm.watch("specialty")}
              setSelected={(selected) =>
                joinUsForm.setValue("specialty", selected)
              }
            />
            <FormError
              error={joinUsForm.formState.errors.specialty as FieldError}
            />
          </div>
          {/* END SERVICE CATEGORY */}

          {/* ATTACHMENT UPLOAD */}
          <div>
            <p className="font-bold text-sm mb-3">
              Upload your portfolio or CV:
            </p>

            <label
              htmlFor="attachment"
              className="bg-[#15151D]/60 text-sm text-white p-4 outline outline-1 outline-white/25 focus:outline-white/50 transition-colors flex items-center"
            >
              <input
                id="attachment"
                type="file"
                className="opacity-0 w-0 h-0"
                accept="image/*"
                onChange={setAttachment}
              />
              <span className="flex-1 text-[#9ca3af]">
                {joinUsForm.watch("portfolio")?.name
                  ? joinUsForm.watch("portfolio")?.name
                  : "Click to browse"}
              </span>

              <HiPaperClip className="text-white text-xl" />
            </label>
            <FormError error={joinUsForm.formState.errors.portfolio} />
          </div>
          {/* END ATTACHMENT UPLOAD */}

          <AnimatedButton variant="outline" className="w-full">
            SEND
          </AnimatedButton>
        </form>
      </div>
    </section>
  );
}
