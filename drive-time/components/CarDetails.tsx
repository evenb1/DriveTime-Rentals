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
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.child>
          <div className='fixed inset-0 bg-black bg-opacity-25'/>
        </Transition.child>
      </Dialog>
    </Transition>
    </>
  )
}

export default CarDetails