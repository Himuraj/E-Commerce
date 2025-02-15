import { BarChart, PlusCircle, ShoppingBasket } from 'lucide-react';
import React, { useState } from 'react';
import {motion} from 'framer-motion';

import CreateProductForm from '../components/CreateProductForm';
import ProductList from '../components/ProductList';
import AnalyticsTab from '../components/AnalyticsTab';

const tabs =[
    {id: "create", label:"Create Product", icon:PlusCircle },
    {id: "products", label:"Products", icon:ShoppingBasket },
    {id: "analytics", label:"Analytics", icon:BarChart },
];

const AdminPage = () => {
    const [activeTab,setActiveTab]= useState("create");
  return (
    <div className='min-h-screen bg-white text-black relative overflow-hidden'>
        <div className='relative z-10 container mx-auto px-4 py-16'>
            <motion.h1
            className='text-4xl font-bold mb-8 text-grey-900 text-center'
            initial={{opacity:0,y:-20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8}}
            >
                Admin Dashboard
            </motion.h1>
            
            <div className='flex justify-center mb-8'>
                {tabs.map((tab)=>(
                    <button
                    key={tab.id}
                    onClick={()=> setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${
                        activeTab === tab.id
                        ? "bg-black text-white"
                        : "bg-neutral-300 text-black hover:bg-neutral-400"
                    }`}
                    >
                        <tab.icon className='mr-2 h-5 w-5' />
                        {tab.label}
                    </button>
                ))}
            </div>
            {activeTab === 'create' && <CreateProductForm/>}
            {activeTab === 'products' && <ProductList/>}
            {activeTab === 'analytics' && <AnalyticsTab/>}
        </div>
    </div>
  )
}

export default AdminPage;