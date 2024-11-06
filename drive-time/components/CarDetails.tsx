"use client"
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
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom='opacity-o' enterTo='opacity-100' leave='ease-in duration-200'
        leaveFrom='opactiy-100' leaveTo='opactiy-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25'/>
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
        <Transition.Child 
        as={Fragment} 
        enter="ease-out duration-300" 
        enterFrom='opacity-o scale-95' 
        enterTo='opacity-100 scale-100' 
        leave='ease-in duration-200'
        leaveFrom='opactiy-100 scale-100' 
        leaveTo='opactiy-0 scale-100'
        >
          <Dialog.Panel>
            
          </Dialog.Panel>
        </Transition.Child>
        </div>
        </div>
      </Dialog>
    </Transition>
    </>
  )
}

export default CarDetails