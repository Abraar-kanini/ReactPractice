import React from 'react'

export default function NavBar() {
    function toggleOpen() {
        const nav = document.getElementById("nav");
        let isTrue = nav.classList.contains("hidden");
        if (isTrue) {
          nav.classList.remove("hidden");
          nav.classList.add("none");
        } else {
          nav.classList.remove("none");
          nav.classList.add("hidden");
        }
      }
      
  return (
    <div>
        <nav>
      <div
        className="w-[100vw] h-[10vh] flex justify-between items-center sm:w-[100vw] sm:h-[10vh] sm:flex sm:justify-evenly sm:items-center"
      >
        <h1 className="font-bold">Abraar</h1>
        <ul
          className="hidden sm:flex sm:space-x-9 sm:justify-center sm:items-center font-semibold"
        >
          <li>Home</li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contactus">Contact Us</a></li>
        </ul>
        <ul className="sm:hidden">
          <li onClick={toggleOpen}>
            <span className="material-symbols-outlined"> menu </span>
          </li>
        </ul>
      </div>
      <div className="w-[100vw] hidden sm:hidden" id="nav">
        <ul className="flex flex-col">
          <li></li>
          <li className=" text-center">Home</li>
          <li className="text-center"><a href="#about">About</a></li>
          <li className="text-center"><a href="#skills">Skills</a></li>
          <li className="text-center"><a href="#service">Services</a></li>
          <li className="text-center"><a href="#project">Projects</a></li>
          <li className="text-center"><a href="#contactus">Contact Us</a></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}
