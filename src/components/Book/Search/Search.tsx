import React from 'react'
import { useAtom} from 'jotai'
import { searchAtom } from '../../../store'
import { FiSearch } from 'react-icons/fi';
const Search = () => {
    const [search,setSearch]=useAtom(searchAtom)
    setSearch('react')
    return (
            <div className="relative rounded-4 bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mr-auto">
               <div className="mr-auto max-w-md">
                  <form action='' className='relative w-max mx-auto'>
                     <input type="search" placeholder='search' name="search" id="search" className='relative cursor-pointer z-10 bg-transparent w-full h-12 rounded-full border
                    pl-16  focus:w-full focus:border-lime-300 focus:cursor-text focus:pl-16 focus:pr-4'/>
                    <FiSearch className='absolute inset-y-2 h-8 w-12 px-3.5 border-r border-lime-300 stroke-gray-500 '/>
                  </form>
               </div>
            </div>
      
    )
}

export default Search