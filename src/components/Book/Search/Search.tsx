import React from 'react'
import { useAtom} from 'jotai'
import { searchAtom } from '../../../store'
const Search = () => {
    const [search,setSearch]=useAtom(searchAtom)
    setSearch('react')
    return (
        <div>Search</div>
    )
}

export default Search