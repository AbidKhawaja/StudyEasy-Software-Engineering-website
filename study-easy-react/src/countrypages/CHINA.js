import React from 'react'
import College from './College';
import { Majors } from "../components/Majors";
import {useState} from "react";
import '../styling/Country.css'


export const CHINA = () => {
  return (
    <div>
      <h1 className='h1'>Welcome to CHINA</h1><div className='Country'>
    <div className='Country'>
    <College collegeName="Peking University" Logo='https://mcdonnell.wustl.edu/wp-content/uploads/2020/10/PKU.png' zipCode={100871} url= "https://english.pku.edu.cn/"number={1}/>
    <College collegeName="Nanjing University" Logo='https://www.12consultants.com/wp-content/uploads/2022/03/Nanjing-University.jpg' zipCode={210093} url= "https://www.nju.edu.cn/EN/main.htm"number={2}/>
  </div>
  </div>

  </div>
  )
}
