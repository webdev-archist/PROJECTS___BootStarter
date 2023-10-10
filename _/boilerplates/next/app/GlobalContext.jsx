'use client'

import { createContext, useState, useEffect, useRef } from 'react'
import expos_datas from "./expositions-gallerie-art-kynome/expos_datas.json"
import artistes_datas from "./expositions-gallerie-art-kynome/artistes_datas.json"
import oeuvres_datas from "./expositions-gallerie-art-kynome/oeuvres_datas.json"


const GlobalContext = createContext()
export default GlobalContext


export const GlobalContextProvider = ({ children }) => {
    const activedExpoImageRef = useRef()
    // console.log(datas)
    expos_datas.sort((a,b) => (new Date(a["openningDate_$_date"]) - new Date(b["openningDate_$_date"])))
    // console.log(datas)



    let nowDate = new Date()
    , dates = expos_datas.map((item,i) => ([item.openningDate_$_date, item.closingDate_$_date, i, item]))
    , currentExpo = dates.filter((item,i) => {
        // console.group()
        // console.log(new Date(item[0]))
        // console.log(new Date(item[1]))
        // console.warn(new Date(item[0])<nowDate)
        // console.error(new Date(item[1])>nowDate)
        // console.log(nowDate)
        // console.groupEnd()
        return new Date(item[0])<nowDate && new Date(item[1])>nowDate
    })
    , [activedExpo, setActivedExpo] = useState(currentExpo[0] || null)
    , [dates_before, setDates_before] = useState(dates.filter((item,i) => (new Date(item[1])<new Date(nowDate))))
    , [dates_after, setDates_after] = useState(dates.filter((item,i) => (new Date(item[0])>new Date(nowDate))))

    // console.log(dates_before)
    // console.log(dates_after)



    const context = {dates, currentExpo, activedExpoImageRef
        , activedExpo, setActivedExpo, dates_before, setDates_before, dates_after, setDates_after
        , artistes_datas, oeuvres_datas}
    return <GlobalContext.Provider value={context}>
        {children}
    </GlobalContext.Provider>
}
