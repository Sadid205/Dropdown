"use client";
import React, { useState } from "react";
import Dropdown from './dropdown'

const DropdownMenu = () => {

  const buttonOptions1 = [
    "All",
    "Casual",
    "Contractor",
    "Full-time",
    "Internship",
    "Remote",
  ];

  const buttonOptions2 = [
    "All",
    "Casual",
    "Contractor",
    "Full-time",
    "Internship",
    "Remote",
  ];

  const buttonOptions3 = [
    "All",
    "Casual",
    "Contractor",
    "Full-time",
    "Internship",
    "Remote",
  ];
  

  return (
    <div className="h-32 p-4 bg-white rounded-lg shadow-lg w-96">
      <h1 className="font-semibold">Filter by</h1>
      <div className="relative flex w-full mt-2">
       <Dropdown options={buttonOptions1} buttonText='Location'/>
       <Dropdown options={buttonOptions2} buttonText='Team'/>
       <Dropdown options={buttonOptions3} buttonText='Work Type'/>
      </div>
    </div>
  );
};

export default DropdownMenu;
