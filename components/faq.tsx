import React from 'react'
import Link from 'next/link'

function faq() {
    return (
        <div id='faq' className="max-w-[1400px] min-h-[1320px] flex justify-center ">

<div className="max-w-[953px] mx-2 md:mx-0 min-h-[1320px]">
    <div>

        <h1 className="text-[36px] md:text-[48px] font-[700] text-center text-[#E16E4E] ">
        Frequently Asked Questions
        </h1>
        <h3 className="font-[400] leading-[26px] md:leading-[32px] m-auto max-w-[688px] text-center  text-[18px] text-[#202020]">
        Dive into the details! Here are answers to some commonly asked questions. If you don&apos;t find what you&apos;re looking for, feel free to reach out to us – we&apos;re here to help!
        </h3>
    </div>


<div className=' max-w-[563px] m-auto'>


        <div className=' mt-[52px]  border-b-2 border-b-[#FEF8F6] rounded-[84x] flex min-h-[100px] gap-[40px] items-start '>
            <h1 className='text-[32px] text-[#E16E4E] font-[700]'>01</h1>
            <div>
            <h2 className='text-[18px] font-[600] leading-[32px] text-[#333333]'>Can children drink it?</h2> 
            <p  className='text-[18px] mt-[4px] font-[600] leading-[32px] text-[#666666]'>No. Do not give to children under 1 year old.</p>
        </div>
        
        </div>
        <div className=' mt-[52px]  border-b-2 border-b-[#FEF8F6] rounded-[84x] flex min-h-[100px] gap-[40px] items-start '>
            <h1 className='text-[32px] text-[#E16E4E] font-[700]'>02</h1>
            <div>
            <h2 className='text-[18px] font-[600] leading-[32px] text-[#333333]'>Are there staples attached to the tea bag?</h2> 
            <p  className='text-[18px] mt-[4px] font-[600] leading-[32px] text-[#666666]'>There are no staples nor any metals attached. So, please drink it with peace of mind.</p>
        </div>
        </div>
        <div className=' mt-[52px]  border-b-2 border-b-[#FEF8F6] rounded-[84x] flex min-h-[100px] gap-[40px] items-start '>
            <h1 className='text-[32px] text-[#E16E4E] font-[700]'>03</h1>
            <div>
            <h2 className='text-[18px] font-[600] leading-[32px] text-[#333333]'>Is there an expiration date?</h2> 
            <p  className='text-[18px] mt-[4px] font-[600] leading-[32px] text-[#666666]'>The expiration date is 2 years after the date of manufacture.</p>
        </div>
        </div>
        <Link href="/aboutBrand">
              <button className="min-w-[270px] m-auto flex justify-center mt-[56px] bg-[#E16E4E] py-[16px] text-white text-[16px] font-[600]">
                Buy Now
              </button>
            </Link>
        </div>
</div>
        </div>
    )
}

export default faq