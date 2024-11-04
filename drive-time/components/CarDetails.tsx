import { carProps } from '@/types';
import React from 'react'

interface CarsDetailsProps{
    isOpen: boolean;
    closeModal: () => void;
   car: carProps; 
}

const CarDetails = ({isOpen, closeModal, car}:CarsDetailsProps) => {
   
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails