"use client";

import { contactFormSchema } from "@/app/api/contact/contact.schemas";
import Input from "@/components/Input";
import ServiceCategoryPill from "@/components/ServiceCategoryPill";
import React, { useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "@/components/FormError";
import { AnimatedButton } from "@/components/AnimatedButton";
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Message sent successfully!");
      contactForm.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative z-[1]">
      <div className="px-4 sm:container pb-18">
        <div className="text-center">
          <h3 className="text-5xl text-white font-bold">Get in touch</h3>
          <p className="text-[#E7E9F7] text-sm mt-1">
            Looking to create, or have a question?
          </p>
        </div>

        <form
          action=""
          className="max-w-2xl mx-auto mt-4 space-y-4"
          onSubmit={contactForm.handleSubmit(onSubmit)}
        >
          <div className="flex gap-x-4 min-w-0">
            <div className="flex-1 min-w-0">
              <Input
                className="w-full"
                placeholder="First name *"
                {...contactForm.register("firstName")}
              />
              <FormError error={contactForm.formState.errors.firstName} />
            </div>
            <div className="flex-1 min-w-0">
              <Input
                className="w-full"
                placeholder="Last name *"
                {...contactForm.register("lastName")}
              />
              <FormError error={contactForm.formState.errors.lastName} />
            </div>
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email *"
              className="w-full"
              {...contactForm.register("email")}
            />
            <FormError error={contactForm.formState.errors.email} />
          </div>

          <div>
            <Input
              placeholder="Phone Number *"
              className="w-full"
              {...contactForm.register("phone")}
            />
            <FormError error={contactForm.formState.errors.phone} />
          </div>

          <div>
            <Input
              placeholder="Your business name"
              className="w-full"
              {...contactForm.register("businessName")}
            />
            <FormError error={contactForm.formState.errors.businessName} />
          </div>

          <p className="font-bold text-sm">You need help with: *</p>
          {/* SERVICE CATEGORY */}
          <div>
            <ServiceCategoryPill
              categories={[
                "Website",
                "Graphic Design",
                "Branding",
                "Content Creation",
                "Marketing",
                "Social Media",
              ]}
              selected={contactForm.watch("services")}
              setSelected={(selected) =>
                contactForm.setValue("services", selected)
              }
            />
            <FormError
              error={contactForm.formState.errors.services as FieldError}
            />
          </div>
          {/* END SERVICE CATEGORY */}

          <div>
            <textarea
              placeholder="Tell us about your idea *"
              rows={4}
              className="bg-[#15151D]/60 text-sm text-white p-4 outline outline-1 outline-white/25 focus:outline-white/50 transition-colors w-full"
              {...contactForm.register("message")}
            ></textarea>
            <FormError error={contactForm.formState.errors.message} />
          </div>

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
