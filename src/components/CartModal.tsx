"use client"

import React from 'react'
import Image from 'next/image'

const CartModal = () => {
    
    const cartItems = true
 
    return (
        <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
            {!cartItems ? (
                <div className=''>Cart is empty</div>
            ) : (
                <>
                <h2 className='text-xl'>Shopping Cart</h2>
                <div className='flex flex-col gap-8'>
                    {/* ITEMS */}
                    <div className='flex gap-4'>
                        <Image src="https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt='' width={72}
                        height={96} 
                        className='object-cover rounded-md' 
                        />
                        <div className='flex flex-col justify-between w-full'>
                            {/* TOP */}
                            <div className=''>
                                {/* TITLE */}
                                <div className='flex items-center justify-between gap-8'>
                                    <h3 className='font-semibold'>Product Name</h3>
                                    <div className='p-1 bg-gray-50 rounded-sm'>$50</div>
                                </div>
                                {/* DESC */}
                                <div className='test-sm text-gray-500'>
                                    available
                                </div>
                            </div>
                            {/* B0TTOM */}
                            <div className='flex justify-between text-sm'>
                                <span className='text-grray-500'>Qty. 2</span>
                                <span className='text-red-500 cursor-pointer'>Remove</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <Image src="https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt='' width={72}
                        height={96} 
                        className='object-cover rounded-md' 
                        />
                        <div className='flex flex-col justify-between w-full'>
                            {/* TOP */}
                            <div className=''>
                                {/* TITLE */}
                                <div className='flex items-center justify-between gap-8'>
                                    <h3 className='font-semibold'>Product Name</h3>
                                    <div className='p-1 bg-gray-50 rounded-sm'>$50</div>
                                </div>
                                {/* DESC */}
                                <div className='test-sm text-gray-500'>
                                    available
                                </div>
                            </div>
                            
                            <div className='flex justify-between text-sm'>
                                <span className='text-grray-500'>Qty. 2</span>
                                <span className='text-red-500 cursor-pointer'>Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* B0TTOM */}
                <div className=''>
                    <div className='flex items-center justify-between font-semibold'>
                        <span className=''>Subtotal</span>
                        <span className=''>$49</span>
                    </div>    
                    <p className='text-grray-500 text-sm mt-2 mb-4'>
                        Shipping and taxes calculated at checkout.
                    </p>
                    <div className='flex justify-between text-sm'>
                        <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
                        <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
                    </div>
                </div>
                </>
            )}
        </div>
    )
}

export default CartModal
