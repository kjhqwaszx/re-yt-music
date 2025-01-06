'use client'
import Image from 'next/image';
import UserIcon from '@/components/UserIcon';
import PagePadding from '@/components/PagePadding';
import {FaChromecast} from 'react-icons/fa';
import {FiSearch} from 'react-icons/fi';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger
} from '@/components/ui/drawer';
import Logo from '@/components/elements/Logo';
import Navigator from '@/components/elements/Navigator';
import {useEffect, useRef, useState} from 'react';
import {cn} from '@/lib/utils';

const HeaderDrawer = ({children}) =>{
  const [isOpen, setIsOpen] = useState(false);

  return(
    <Drawer direction='left' open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className='w-[240px] h-full'>
        <div className='py-3'>
          <div className='px-3'>
            <Logo isInDrawer onClickClose={()=>{setIsOpen(false)}}/>
          </div>
        </div>
        <Navigator/>
      </DrawerContent>
    </Drawer>
  )
}
export default function Header({children}) {
  const [isScroll, setIsScroll] = useState(false);
  const headRef = useRef(null);

  const handleScroll = () =>{
    const scrollValue = headRef?.current?.scrollTop
    setIsScroll(scrollValue !== 0)
  }

  useEffect(() => {

      headRef?.current?.addEventListener('scroll', handleScroll)

      return () =>{
        headRef?.current?.removeEventListener('scroll', handleScroll)
      }

  }, []);

  useEffect(() => {
    console.log('isScroll', isScroll);
  }, [isScroll]);

  return (
    <header ref={headRef} className='relative overflow-y-auto w-full h-full'>

      {/* bg section*/}
      <section className='absolute top-0 w-full'>
        <div className='relative h-[400px] w-full'>
          <Image fill className='object-cover'
                 src='https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                 alt='Header Img'/>
        </div>
        <div className='absolute top-0 bg-black opacity-40 w-full h-[400px]'></div>
        <div className='absolute top-0 bg-gradient-to-t from-black w-full h-[400px]'></div>
      </section>

      {/* Search Section*/}
      <section className={cn('sticky top-0 left-0 z-10', isScroll && 'bg-black')}>
        <PagePadding>
          <div className='flex flex-row h-[64px] justify-between items-center'>
            <article className='hidden lg:flex flex-row items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500'>
              <div>
                <FiSearch size={24}/>
              </div>
              <input type='text'  className='h-full w-full bg-transparent' placeholder='노래, 앨범, 아티스트, 팟캐스트 검색' />
            </article>

            <HeaderDrawer>
              <article className='lg:hidden'>
                <Logo/>
              </article>
            </HeaderDrawer>

            <article className='flex flex-row gap-6 items-center'>
              <FaChromecast size={26}/>
              <UserIcon/>
            </article>
          </div>
        </PagePadding>
      </section>

      <section className='relative'>
        {children}
      </section>
    </header>
  )
}