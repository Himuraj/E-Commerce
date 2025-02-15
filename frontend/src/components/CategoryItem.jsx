import React from 'react'
import {Link} from 'react-router-dom';

const CategoryItem = ({category}) => {
  return (
    <div className='relative overflow-hidden h-98 w-full group'>
        <Link to={"/category"+ category.href}>
        <div className='w-full h-full cursor-pointer'>
            <div className='absolute insert-0 bg-gradient-to-b from-transparent to-grey-900 opacity-50 z-10' />
            <img 
            src={category.imageUrl}
            alt={category.name}
            className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110'
            loading='lazy'
            />
            <div className='absolute bottom-0 left-0 right-0 p-4 z-20'>
                <h3 className='text-white text-2xl font-sans mb-2'>{category.name} </h3>
                <p className='text-neutral-100 text-sm'>Explore</p>
            </div>
        </div>
        </Link>
    </div>
  );
};

export default CategoryItem;