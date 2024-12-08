import React from 'react'
import CategoryItem from '../components/CategoryItem'

const categories =  [
  {href:"chill-guy",name:"Chill Guy",imageUrl:"/folded-white-tshirt-mockup-on-wooden-surface.jpeg" },
  {href:"mould-candles",name:"Mould Candles",imageUrl:"/merry_christmas_tree.png" },
  {href:"hoodies",name:"Hoodies",imageUrl:"/minimal-hoodie-mockup-in-outdoor-lighting.jpeg" },
  {href:"tshirts",name:"T-Shirts",imageUrl:"/young-female-model-with-frizzy-hair-wearing-tshirt-mockup.jpeg" },
  {href:"glass-jar-candles",name:"Glass Jar Candles",imageUrl:"/Scented-Cuboid-Shaped-Glass-Jar-Candles-_-Red-and-Yellow-hues.png" },
  {href:"crop-tees",name:"Crop Tees",imageUrl:"/female-model-wearing-white-tshirt-posing-in-front-pink-background.jpeg" },
  {href:"fan-merch",name:"Fan Merch",imageUrl:"/indian-male-model-wearing-white-tshirt-posing-in-front-pink-background.jpeg" },
  {href:"tote-bag",name:"Tote Bags",imageUrl:"/totebag-mockup-hanging-on-holder-with-plain-wall-in-background.jpeg" },

]

const HomePage = () => {
  return (
    <div className='relative min-h-screen text-black overflow-hidden '>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <h1 className='text-left text-5xl sm:text-6xl font-serif text-black mb-4'>
          Collections
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {categories.map(category => (
            <CategoryItem
            category={category}
            key={category.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage


