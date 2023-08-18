'use client'
import bg from '../assets/images/2floor.jpg';
import Image from 'next/image';

export function SearchBand(){
    return (
        <>
            <div className='absolute top-[40%] h-[60%] bg-secondary w-full' >
                {/* <Image src={bg} alt="search-image" className='w-full h-full object-fill'/> */}
            </div>
        </>
    )
}