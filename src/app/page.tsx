"use client";
import React, { useEffect } from "react"
import Auth from "./Auth"
import Feed from "./Feed/page"
import { useState } from 'react'

export default function Home() {
  const [isUserAuthenticate, setIsUserAuthenticate] = useState(false)

  useEffect(()=>{
    localStorage.getItem("userToken") ? setIsUserAuthenticate(true) : setIsUserAuthenticate(false)
  },[])
  return (
    isUserAuthenticate ? <Feed/> : <Auth/>
  )
}
