import React from 'react'
import {fetchData} from './helper.js'
import { Outlet, useLoaderData } from 'react-router-dom';
import wave from './photo/wave.svg'
import Nav from './component/Nav'
export function mainLoader(){
    const userName=fetchData("userName");
    return {userName}
}
const Main=()=>{
    const {userName} = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  )
}
export default Main