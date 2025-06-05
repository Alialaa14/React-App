import React from 'react'
import ProductCard from '../../../components/ProductCard'
import { productsInSale } from '../../../assets/dataTest'
import SectionHeading from '../../../components/SectionHeading'

const BestSelling = () => {
  return (
    <div className='mt-[140px]'> 
        <SectionHeading name={"best selling"} desc={"Top sale in this week"} />
        <div className='wrapper'>
            <div className='best-sell-container flex gap-x-[2.5%] gap-y-[40px] flex-wrap  mt-[50px]'>
                {
                    productsInSale.map((prod)=>{
                        return <div className='  flex-shrink-0 flex-grow-0 basis-[48.7%] md:basis-[31.6%] lg:basis-[23.1%]'>
                            <ProductCard  product={prod}/>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default BestSelling