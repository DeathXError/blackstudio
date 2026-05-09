"use client";
import { useForm, ValidationError } from "@formspree/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const inputClass =
  "mt-3 w-full min-w-0 rounded-lg border border-white/10 bg-[#070908] px-4 py-4 text-base text-white outline-none transition-colors duration-300 placeholder:text-white/34 focus:border-brand-accent/60 focus:bg-white/[0.035]";
const errorClass = "mt-2 text-sm text-red-300";

export default function Form() {
  const [formVersion, setFormVersion] = useState(0);

  return (
    <FormSession
      key={formVersion}
      onSubmitAnother={() => setFormVersion((current) => current + 1)}
    />
  );
}

function FormSession({ onSubmitAnother }) {
  const [projectType, setProjectType] = useState("");
  const [state, handleSubmit] = useForm("xwvyrwqv");

  if (state.succeeded) {
    return (
      <div className="grid w-full gap-5 p-6 sm:p-8">
        <div className="rounded-lg border border-white/10 bg-[#070908] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-accent">
            Project brief received
          </p>
          <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Thanks, we will get back to you soon.
          </h3>
          <p className="mt-4 max-w-[560px] text-base leading-8 text-white/58">
            Your message has been sent successfully. We will review the brief
            and reach out with the next steps.
          </p>
          <button
            type="button"
            onClick={onSubmitAnother}
            className="mt-6 inline-flex rounded-lg border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/8"
          >
            Submit another response
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/xwvyrwqv"
      method="POST"
      onSubmit={handleSubmit}
      className="grid w-full min-w-0 gap-6 p-6 sm:grid-cols-2 sm:p-8"
    >
      <input type="hidden" name="projectType" value={projectType} />
      <input
        type="hidden"
        name="subject"
        value="New Blackstudio project brief"
      />

      <label className="block min-w-0 text-base font-semibold text-white">
        Your name
        <input
          name="name"
          placeholder="John Smith"
          className={inputClass}
          required
        />
      </label>
      <label className="block min-w-0 text-base font-semibold text-white">
        Email
        <input
          name="email"
          type="email"
          placeholder="john@mail.com"
          className={inputClass}
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className={errorClass}
        />
      </label>
      <label className="block min-w-0 text-base font-semibold text-white">
        Phone
        <input
          name="phone"
          type="tel"
          placeholder="+91 8626008473"
          className={inputClass}
        />
      </label>
      <label className="block min-w-0 text-base font-semibold text-white">
        What do you need?
        <Select value={projectType} onValueChange={setProjectType}>
          <SelectTrigger className="mt-3 w-full min-w-0 py-7">
            <SelectValue placeholder="Select a project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Website or landing page">
                Website or landing page
              </SelectItem>
              <SelectItem value="Video editing">Video editing</SelectItem>
              <SelectItem value="Brand or campaign designing">
                Brand or campaign designing
              </SelectItem>
              <SelectItem value="Content writing">Content writing</SelectItem>
              <SelectItem value="Not sure yet">Not sure yet</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <ValidationError
          prefix="Project type"
          field="projectType"
          errors={state.errors}
          className={errorClass}
        />
      </label>
      <label className="block min-w-0 text-base font-semibold text-white sm:col-span-2">
        Message
        <textarea
          name="message"
          rows={6}
          placeholder="Tell us what you are building, what you already have, and what timeline you are working with."
          className={`${inputClass} resize-y`}
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className={errorClass}
        />
      </label>

      <ValidationError
        errors={state.errors}
        className={`${errorClass} sm:col-span-2`}
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-accent px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent/90 sm:col-span-2"
      >
        {state.submitting ? "Sending project brief..." : "Submit project brief"}
        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
