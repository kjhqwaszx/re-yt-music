import {ReactNode} from 'react';
import Header from '@/components/Header';

export default function layout({children}: {children: ReactNode}) {
  return (
    <div className='w-full h-full'>
      <Header>
        {children}
      </Header>
    </div>
  );
}
