"use client"

import {GridLoader} from 'react-spinners';

export default function ErrorMessage() {

  return (
    <div className=' my-20 flex flex-col justify-center items-center gap-4'>
      <GridLoader color='red'/>
      <div className='text-[50px]'> Oops!</div>
      <div> 잠시 후 다시 시도해주세요...</div>
    </div>
  );
}
