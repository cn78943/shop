import React, {} from 'react';

export default function Category({ selectedCategory }) {
  const categories = ['모두', '전자기기', '쥬얼리', '남성의류', '여성의류'];


  const clickCategory = (category) => {
    if (category === '남성의류') {
      selectedCategory("men's clothing");
    } else if (category === '쥬얼리') {
      selectedCategory("jewelery");
    } else if (category === '여성의류') {
      selectedCategory("women's clothing");
    } else if (category === '전자기기') {
      selectedCategory("electronics");
    } else if (category === '모두') {
      selectedCategory("all");
    }
    // console.log(category, selectedCategory);
  };




  return (
    <div className='w-full'>
      <div className='flex w-full h-20 justify-between'>
        <div className='flex w-full items-center justify-center text-3xl font-bold'>
          Products
        </div>
      </div>
      <div className='flex justify-center items-center'>
        {categories.map(category => (
          <button
            key={category}
            className='font-notoSansKR mx-2 border hover:bg-gray-500 w-40 h-14 rounded text-black hover:text-white'
            onClick={() => clickCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
