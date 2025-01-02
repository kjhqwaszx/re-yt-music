'use client'
import {useMemo} from "react";
import {usePathname} from "next/navigation";
import {FiCompass, FiMusic, FiPlus} from "react-icons/fi";
import {GoHome} from "react-icons/go";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {dummyPlaylistArray} from "@/lib/dummyData";
import PlayListNav from "@/components/elements/PlayListNav";

export default function Navigator(){
  const pathname = usePathname()

  const routes = useMemo(()=>{
    return [
      { icon: <GoHome size={24} />, label: '홈', isActive: pathname === '/', href: '/'},
      { icon: <FiCompass size={24} />, label: '둘러보기', isActive: pathname === '/explore', href: '/explore'},
      { icon: <FiMusic size={24}/>, label: '보관함', isActive: pathname === '/library', href: '/library'}
    ]
  }, [pathname])


  return(
    <div>
      {/* 홈, 둘러보기, 보관함 */}
      <section className='flex flex-col gap-2 p-4'>
        {routes.map(({icon, label, isActive, href}) => {
          return (
            <Link key={label} href={href}>
              <div
                className={cn('flex flex-row items-center gap-4 text-[16px] hover:bg-neutral-700 rounded-lg p-2',
                  isActive && "bg-neutral-800")}>
                {icon}
                <span>
                {label}
              </span>
              </div>
            </Link>
          )
        })}
      </section>


      <section className='px-6'>
        <div className='w-full h-[1px] bg-neutral-700'/>
      </section>

      {/* 새 재생목록*/}
      <section className='px-6'>
        <div className='flex flex-row items-center justify-center bg-neutral-800 my-6 rounded-3xl p-2 font-[200] gap-2 hover:bg-neutral-700 cursor-pointer '>
          <FiPlus size={24}/>
          <span> 새 재생목록</span>
        </div>
      </section>

    {/*  플레이 리스트 */}
      <section>
        <ul className='flex flex-col'>
          {
            dummyPlaylistArray.map((playlist)=> {
              return(
                <PlayListNav key={playlist.id} playlist={playlist}/>
              )
            })
          }
        </ul>
      </section>
    </div>

  )
}