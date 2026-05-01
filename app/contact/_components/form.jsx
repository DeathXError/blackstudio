import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpRight } from "lucide-react";

const email = "[EMAIL_ADDRESS]";
const inputClass =
  "mt-3 w-full min-w-0 rounded-lg border border-white/10 bg-[#070908] px-4 py-4 text-base text-white outline-none transition-colors duration-300 placeholder:text-white/34 focus:border-brand-accent/60 focus:bg-white/[0.035]";

export default function Form() {
  return (
    <form
      action={`mailto:${email}`}
      method="post"
      encType="text/plain"
      className="grid w-full min-w-0 gap-6 p-6 sm:grid-cols-2 sm:p-8"
    >
      <label className="block min-w-0 text-base font-semibold text-white">
        Your name
        <input name="name" placeholder="John Smith" className={inputClass} />
      </label>
      <label className="block min-w-0 text-base font-semibold text-white">
        Email
        <input
          name="email"
          type="email"
          placeholder="john@mail.com"
          className={inputClass}
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
        <Select>
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
      </label>
      <label className="block min-w-0 text-base font-semibold text-white sm:col-span-2">
        Message
        <textarea
          name="message"
          rows={6}
          placeholder="Tell us what you are building, what you already have, and what timeline you are working with."
          className={`${inputClass} resize-y`}
        />
      </label>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-accent px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent/90 sm:col-span-2"
      >
        Submit project brief
        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
