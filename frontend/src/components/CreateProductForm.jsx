import React, { useState } from 'react'
import { motion } from 'framer-motion';

const categories = ["chill-guy","mould-candles","hoodies","tshirts","glass-jar-candles","crop-tees","fan-merch","tote-bag"];

const CreateProductForm = () => {
  const {newProduct,setNewProduct} = useState({
    name:"",
    description:"",
    price:"",
    categories:"",
    image:"",
  });
  const handleSubmit = (e) => {
    e.preventDefault(),
    console.log(newProduct)
  };
  return (
    <motion.div
    className='bg-neutral-400 shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:20}}
    transition={{duration:0.8}}
    >
      <h2 className='text-2xl font-semibold mb-6 text-black '>
        Create New Product
      </h2>
      <form onSubmit='handleSubmit'>
        <div>
          <label>
            Product Name
          </label>
          <input
          type='text'
          id='name'
          name='name'
          value={newProduct.name}
          onChange={(e)=> setNewProduct({...newProduct,name:e.target.value})}
          className='mt-1 block w-full bg-neutral-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 fo 
          '
          />
        </div>
      </form>
    </motion.div>
  )
};

export default CreateProductForm;