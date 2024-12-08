import { useStore } from "@/store/products"
import React from "react"

export const useStoreState = ()=>{
    const state = useStore((state)=> state)
    React.useEffect(()=>{
        state.fetchProductsState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return state
}