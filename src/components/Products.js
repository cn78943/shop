import React, {} from 'react';

export default function Products({ productList }) {



    // 카테고리

    return (
        <div className='h-full overflow-y-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 mt-5'>
                {productList.map(product => (
                    <div key={product.id} className='border p-5'>
                        <img className='object-contain w-full h-64 mb-4' src={product.image} alt={`${product.id}`} />
                        <div className='flex justify-center font-notoSansKR h-10 mb-2'>
                            {product.title.length > 10 ? product.title.slice(0, 10) + '...' : product.title}
                        </div>
                        <div className='flex justify-between items-center'>
                            <button className='font-notoSansKR w-1/2 h-10 border rounded border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white'>
                                장바구니 담기
                            </button>
                            <div className='font-notoSansKR'>
                                {`price ${product.price}$`}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
