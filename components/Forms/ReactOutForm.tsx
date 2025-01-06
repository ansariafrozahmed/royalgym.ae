"use client";

import React, { useState } from "react";
import { CalendarDays, Goal, Mail, Phone, Pointer, User } from "lucide-react";
import { goals } from "@/lib/constants";

const InputField = ({ icon: Icon, ...props }: any) => (
  <div className="flex items-center w-full gap-2 md:gap-3">
    {Icon && <Icon className="text-templatePrimary h-4 mt-1" strokeWidth={2} />}
    <div className="border-b w-full py-1 md:py-2">
      <input
        className="bg-transparent text-xs md:text-sm w-full focus:outline-none placeholder-gray-400"
        {...props}
      />
    </div>
  </div>
);

const SelectField = ({ icon: Icon, options, defaultLabel, ...props }: any) => (
  <div className="flex items-center gap-2 md:gap-3">
    {Icon && <Icon className="text-templatePrimary h-4 mt-1" strokeWidth={2} />}
    <div className="border-b w-full py-1 md:py-2">
      <select
        className="w-full bg-white text-xs md:text-sm focus:outline-none focus:ring-0 focus:border-none text-gray-700"
        {...props}
      >
        <option value="" disabled hidden>
          {defaultLabel}
        </option>
        {options.map((option: string, index: number) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
);

interface Props {
  text?: string;
}

const ReactOutForm: React.FC<Props> = (props) => {
  const { text } = props;
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    dob: "",
    interested: "",
    goal: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="space-y-4 bg-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-md w-full md:w-[460px] px-4 md:px-6 py-8 md:py-6">
      {/* Form Header */}
      <div className="text-center">
        <h2 className="text-[24px] lg:text-[30px] uppercase text-templatePrimary tracking-wide font-semibold">
          Fill The Form
        </h2>
        <p className="text-xs lg:text-base text-gray-600">
          {text} will reach out soon!
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* First and Last Name */}
        <div className="flex gap-3">
          <InputField
            icon={User}
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <InputField
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>

        {/* Email */}
        <InputField
          icon={Mail}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        {/* Phone */}
        <InputField
          icon={Phone}
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Number"
          required
        />

        {/* Date of Birth */}
        <InputField
          icon={CalendarDays}
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        {/* Interests */}
        <SelectField
          icon={Pointer}
          name="interested"
          value={formData.interested}
          onChange={handleChange}
          options={[
            "Gym Workout & Personal Training",
            "Swimming",
            "Group Fitness Classes",
          ]}
          defaultLabel="Pick your interest"
        />

        {/* Goals */}
        <SelectField
          icon={Goal}
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          options={goals}
          defaultLabel="Select your goal"
        />

        {/* Message */}
        <div className="flex items-start gap-2 md:gap-3">
          <Mail
            size={20}
            className="text-templatePrimary h-4 mt-2 md:mt-3"
            strokeWidth={2}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent w-full text-xs md:text-sm focus:outline-none border-b py-2 placeholder-gray-400"
            placeholder="Message"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-templatePrimary w-full text-white border border-templatePrimary py-3 px-6 text-sm font-medium tracking-wider transition-all duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
      <p className="text-xs text-center leading-normal">
        By proceeding, you confirm that you have read and agree to our{" "}
        <a
          href="/privacy-policy"
          target="_blank"
          className="text-templatePrimary underline"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="/terms-conditions"
          target="_blank"
          className="text-templatePrimary underline"
        >
          Terms & Conditions
        </a>
        .
      </p>
    </div>
  );
};

export default ReactOutForm;
