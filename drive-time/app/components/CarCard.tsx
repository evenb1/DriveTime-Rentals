"use client";
import { useState } from "react";
import Image from "next/image";
import { carProps } from "@/types";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: carProps;
}

// Map of car makes to their respective main images
const carImages: { [key: string]: string } = {
  lexus: "/fleet/lexus1.png",
  land: "/fleet/land1.png",
  wagon: "/fleet/wagon1.png",
  cadillac: "/fleet/cadillac1.png",
  sclass: "/fleet/sclass1.png",
  sprinter: "/fleet/sprinter1.png",
  range: "/fleet/range1.png",
  cayenne: "/fleet/cayenne1.png",
};