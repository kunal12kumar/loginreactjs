import React, { useState } from 'react'
import './Header.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

export default function Login() {

  // statemangement for email value
  let [adduserData,setadduserData]=useState({
    uemail:'',
    upassword:''

  }
 )
  // this is to store the value in the object or in adduserData ,when we put value of each section 
 let getvalue=(event)=>{
  let oldData={...adduserData}
  let inputname=event.target.name
  let inputvalue=event.target.value
  oldData[inputname]=inputvalue
  setadduserData(oldData)

 }

//  this is when we press the submit button to save all the userdata ,this active the form and save all the data in a array that is created by state function now.

  let [saveudata,setsaveudata]=useState([])
  let notreload=(event)=>{
    let eachuserdata={
      uemail:adduserData.uemail,
      upassword:adduserData.upassword
    }

    let newalldata=[...saveudata,eachuserdata]
    setsaveudata(newalldata)
    console.log(newalldata)
    setadduserData({
      uemail:'',
      upassword:''
  
    })
    event.preventDefault()
  }

  // for the display of password makeing a state for true or false

  let [pdisplay,setpdisplay]=useState(true)









  return (
    <div>
      
      <form  onSubmit={notreload}>
        <div className='login pb-9 '>

          <div className='w-[55%] h-[80%] my-auto mx-auto  text-center py-[40px] font-serif text-[18px] '>

            <h1 className='m-4 font-bold text-3xl'>LOGIN</h1>
            <h1 className='m-4'>Please Enter your Email and Password</h1>

            <div className='w-[90%] h-[90%] border-[1.5px] border-black shadow-2xl box'>
              <input type="text" placeholder='Email' onChange={getvalue} className='inputbox' value={adduserData.uemail} name='uemail' required></input>
              <input type={pdisplay? 'text':'password'} onChange={getvalue} value={adduserData.upassword} name='upassword' placeholder='Password' className='inputbox' required></input>
              <span className='passworddisplay' onClick={()=>setpdisplay(!pdisplay)}><FontAwesomeIcon  icon={pdisplay? faEye:faEyeSlash}></FontAwesomeIcon></span>
              <button className='inputbox bg-red-300 hover:scale-95' >LOGIN</button>
            </div>

            <h1 className='m-4'>Don't have account?</h1>
            <span className='cursor-pointer m-2'></span>
          </div>

        </div>
      </form>
    </div>
  )
}
