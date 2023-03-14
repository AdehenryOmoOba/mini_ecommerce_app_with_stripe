'use client'
import React from 'react'
import Image from "next/image"
import iphone11 from '../../../public/products/phone1.png'

export default function ProductCard() {

  return (
    <div>
    <h2 className="text-2xl">Mobile Phones</h2>
    <div className="py-4">
      <div className="w-64">
        <div className="p-5 bg-blue-100 rounded-lg">
          <Image src={iphone11} alt='iphone11' width={200} height={200}/>
          {/* <img src={iphone11} alt="iphone11" width='200px' height='200px'/> */}
        </div>
        <div className="mt-2">
          <h3 className="font-bold text-lg">iPhone 11 Pro Max</h3>
        </div>
        <p className="mt-2 text-sm">The iPhone 11 features a 6.1-inch Liquid Retina display, A13 Bionic chip, dual 12-megapixel ultra-wide and wide cameras, 4K video recording, Night mode, and up to 256GB of storage. It also comes with iOS 13 pre-installed, which offers new features such as Dark Mode and improved privacy settings. The iPhone 11 is available in six colors: Black, White, Green, Yellow, Purple.</p>
        <div className="flex mt-1">
          <p className="text-2xl font-bold grow">$999</p>
          <button className="bg-emerald-400 text-white py-1 px-3 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
  )
}
