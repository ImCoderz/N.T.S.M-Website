import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";


export const searchAtom =atom("")
export const idAtom=atom("0")

export const [allBooks]=atomsWithQuery((get)=>({
    queryKey: ['users', get(searchAtom)],
    queryFn:async ({ queryKey: [, search] })=>await fetch(`http://openlibrary.org/search.json?q=${search}`)
    .then((res)=>res.json())
    .catch((err)=>console.log(err)
    )
}))