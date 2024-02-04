import { useEffect } from "react"
import React from 'react'

export default function UseEffectNavbar() {

useEffect(() => {
  console.log("hii this is useeffectnavbar component. i will run everything when component render")
})


useEffect(() => {
    console.log("hii this is useeffectnavbar component, i will run one time when component will render")
  },[])


  
  

  return (
    <>
    
    
    
    
    
    </>
  )
}
