import React, { useContext, useEffect } from 'react'
import Header from '../components/Header/Header'
import AddProduct from '../components/AddProduct/AddProduct'
import MyContext from '../context/MyContext'
import { useNavigate } from 'react-router-dom'

const AddProductPage = () => {
  const {user} = useContext(MyContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!user){
      navigate("/login")
    }
  })
  return (
    <React.Fragment>
        <Header />
        <AddProduct />
    </React.Fragment>
  )
}

export default AddProductPage