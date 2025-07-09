"use client";

import Input from "@/components/Input";
import { CategoryPickerMulti } from "@/components/CategoryPicker";
import React, { useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "@/components/FormError";
import { AnimatedButton } from "@/components/AnimatedButton";
import { joinUsFormSchema } from "@/app/api/join-us/join-us.schemas";
import { HiPaperClip } from "react-icons/hi2";
import { toast } from "react-hot-toast";

export default function JoinUsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const joinUsForm = useForm<z.infer<typeof joinUsFormSchema>>({
    resolver: zodResolver(joinUsFormSchema),
  });

  async function onSubmit(values: z.infer<typeof joinUsFormSchema>) {
    try {
      setIsSubmitting(true);

      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value);
        } else if (value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });

      const response = await fetch("/api/join-us", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Form submitted successfully!");
      joinUsForm.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const setAttachment: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files[0]) {
      joinUsForm.setValue("portfolio", e.target.files[0]);
    }
  };

  return (
    <section className="relative z-[1]">
      <div className="px-4 sm:container pb-8">
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
              <Input
                className="w-full"
                placeholder="First name *"
                {...joinUsForm.register("firstName")}
              />
              <FormError error={joinUsForm.formState.errors.firstName} />
            </div>
            <div className="flex-1 min-w-0">
              <Input
                className="w-full"
                placeholder="Last name *"
                {...joinUsForm.register("lastName")}
              />
              <FormError error={joinUsForm.formState.errors.lastName} />
            </div>
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email *"
              className="w-full"
              {...joinUsForm.register("email")}
            />
            <FormError error={joinUsForm.formState.errors.email} />
          </div>

          <div>
            <Input
              placeholder="Phone Number *"
              className="w-full"
              {...joinUsForm.register("phone")}
            />
            <FormError error={joinUsForm.formState.errors.phone} />
          </div>

          <div>
            <Input
              placeholder="Your social media *"
              className="w-full"
              {...joinUsForm.register("socialMedia")}
            />
            <FormError error={joinUsForm.formState.errors.socialMedia} />
          </div>

          <p className="font-bold text-sm">What is your speciality: *</p>
          {/* SERVICE CATEGORY */}
          <div>
            <CategoryPickerMulti
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
                selected && joinUsForm.setValue("specialty", selected)
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
              Upload your portfolio or CV: *
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

          <AnimatedButton
            variant="outline"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "SENDING..." : "SEND"}
          </AnimatedButton>
        </form>
      </div>
    </section>
  );
}
