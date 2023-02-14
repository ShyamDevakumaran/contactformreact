import React from 'react'
import { db } from '../firebaseConfig'
import { useState } from 'react'
import { addDoc , collection } from 'firebase/firestore'




const Contact = () => {

    const [fname , setfName] = useState();
    const [lname , setlName] = useState();
    const [Data , setData] = useState();
    const [Gender , setGender] = useState();
    const [Phone , setPhone] = useState();
    const [email , setEmail] = useState();
    const [message , setMessage] = useState();



    const userCollectionRef = collection(db , "contactdata")

    const handlesubmit = ()=>{
        addDoc(userCollectionRef,{
            fname:fname,
            lname:lname,
            Data:Data,
           Gender:Gender,
            Phone:Phone,
            email:email,
            message:message
        }).then(()=>{
            if(!alert("form summited success!"))document.location = '/home'
        }).catch((error)=>{
           alert(error.message) 
        })
    }

  


  return (
     <div className='outer-container'>
       

     

    
       <form className='contactform'>
        <p>CONTACT FORM</p><br />
        <img src='https://firebasestorage.googleapis.com/v0/b/makingminds0.appspot.com/o/photos%2FContact.png?alt=media&token=27d23ee5-76bc-48bf-814b-543262ba9589' />
       
        <label>FIRST NAME</label>
        <input type='text' placeholder="Enter Your First Name" 
        onChange={(event)=>{
           setfName(event.target.value)
        }}/>

         <label>LAST NAME</label>
        <input type='text' placeholder="Enter Your Last Name" 
        onChange={(event)=>{
           setlName(event.target.value)
        }}/>

       <label>DATE OF BIRTH</label>
        <input type='date' placeholder="Enter Your Date Of Birth" 
        onChange={(event)=>{
           setData(event.target.value)
        }}/>

        <label>GENDER</label>
        
        <input type="text" placeholder='' name="gender" 
        onChange={(event)=>{
            setGender(event.target.value)
         }}/> 

       

         <label>PHONE NUMBER</label>
        <input type='text' placeholder="Enter Your Phone Number" 
        onChange={(event)=>{
           setPhone(event.target.value)
        }}/>

        <label>EMAIL</label>
        <input type='text' placeholder="Enter Your Email" 
         onChange={(event, )=>{
            setEmail(event.target.value)
         }}
         />

        <label>FEEDBACK</label>
        <textarea type='text' placeholder="Enter Your Feedback"
         onChange={(event)=>{
            setMessage(event.target.value)
         }} ></textarea>
         
        </form>
        
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Contact