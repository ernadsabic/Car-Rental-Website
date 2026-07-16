"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!formValues.name || !formValues.email || !formValues.message) {
      toast.error("Please fill out all fields.");
      return;
    }
    toast.success("Your message has been sent successfully!");
    setFormValues({ name: "", email: "", message: "" });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 bg-white shadow-md flex flex-col gap-6 rounded-md"
    >
      <div className="flex gap-4 flex-wrap">
        <div className="flex flex-col gap-2 flex-1">
          <label className="text-gray-600 font-medium">Full Name</label>
          <input
            minLength={3}
            type="text"
            name="name"
            placeholder="Julian Vane"
            className="p-4 border rounded-sm"
            onChange={handleInput}
            value={formValues.name}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label className="text-gray-600 font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="julian.vane@gmail.com"
            className="p-4 border rounded-sm"
            onChange={handleInput}
            value={formValues.email}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-600 font-medium">Subject</label>
        <select name="subject" className="p-4 border rounded-sm">
          <option value="1">Premium Fleet Inquiry</option>
          <option value="2">Business Partnership</option>
          <option value="3">Customer Support</option>
          <option value="4">Other</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-600 font-medium">Message</label>
        <textarea
          minLength={10}
          name="message"
          placeholder="Tell us about your requirements..."
          className="p-4 border h-32 rounded-sm"
          onChange={handleInput}
          value={formValues.message}
        ></textarea>
      </div>
      <Button
        variant={"default"}
        className="inline-flex gap-2 justify-center items-center p-6 cursor-pointer"
      >
        Send Message
        <ArrowRight className="size-5" />
      </Button>
    </form>
  );
};

export default ContactForm;
