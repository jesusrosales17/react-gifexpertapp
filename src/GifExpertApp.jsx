import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
 
  return (
    <>
      <header className='header'>
        <h2>GifExpertApp</h2>
      </header>
      
      <main className='main'>
      <AddCategory setCategories={setCategories} />
        
        
            {
              categories.map(category => (
                <GifGrid 
                  key={category} 
                  category={category} 
                >{category}</GifGrid>
              ))
            }
      </main>
    </>
  )
}

export default GifExpertApp