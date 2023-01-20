import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";


export const searchAtom =atom("")

export const [allBooks]=atomsWithQuery(()=>({
    queryKey:["books"],
    queryFn:async ()=>await fetch('http://openlibrary.org/search.json?q=react')
    .then((res)=>res.json())
    .catch((err)=>console.log(err)
    )
}))
