"use client";
import { useState, Fragment } from 'react';
import Image from 'next/image';
import { SearchManufacturerProps } from '@/types';
import { Combobox, ComboboxOptions, Transition } from '@headlessui/react';
import { manufacturers } from '@/constants';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setquery] = useState('');
  const filtereManufacturers= query === "" ? manufacturers : 
  manufacturers.filter((item) => item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")))

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="Car Logo" />
          </Combobox.Button>
          <Combobox.Input className="search-manufacturer__input" placeholder='Volkswagen'
          displayValue={(manufacturer: string)=>manufacturer} onChange={(e) => setquery(e.target.value)}/>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom='opactiy-100' afterLeave={() => setquery('')}>
            <ComboboxOptions >
                {filtereManufacturers.length === 0 && query !== "" && (
                  <ComboboxOption value={query} className="search-manufacturer__option">
                    Create "{query}"

                </ComboboxOption>):(
                  filtereManufacturers.map((item) => (
                    <Combobox.Option key={item} className={({active}) => `
                    relative search-manufacturer__option ${active ? 'bg-primary-blue text-white':'text-gray-900'}
                    `}>

                    </Combobox.Option>
                  ))
                ) }
            </ComboboxOptions>

          </Transition>

        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;