"use client";
import { useState } from "react";
import Image from "next/image";
import { carProps } from "@/types";
import CustomButton from "./CustomButton";

interface CarCardProps{
    car: carProps;
}
const CarCard = ({car}: CarCardProps) => {
     const {city_mpg, year, make, model, transmission, drive} = car;
  return (
    <div>CarCard</div>
  )
}

export default CarCard