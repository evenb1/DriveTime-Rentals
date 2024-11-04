import { carProps } from '@/types';
import React from 'react'
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface CarsDetailsProps{
    isOpen: boolean;
    closeModal: () => void;
   car: carProps; 
}

const CarDetails = ({isOpen, closeModal, car}:CarsDetailsProps) => {
   
  return (
    <>
    
    </>
  )
}

export default CarDetails