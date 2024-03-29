import { Product } from "@/payload-types"
import { useEffect, useState } from "react"
import { Skeleton } from "./ui/skeleton"
import Link from "next/link"
import { cn, formatPrice } from "@/lib/utils"
import { PRODUCT_CATEGORIES } from "@/config"
import ImageSlider from "./ImageSlider"

interface ProductListingProps {
  product: Product | null
  index: number
}

const ProductListing = ({product, index}: ProductListingProps) => {
  const [isVisible, setVisible] = useState<boolean>(false)

  const label = PRODUCT_CATEGORIES.find(({value}) => value === product?.category)?.label

  const validUrls = product?.images.map(({image}) => typeof image === 'string' ? image: image.url).filter(Boolean) as string[]

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, index * 75)

    return () => clearTimeout(timer)
  }, [index])

  if(!product || !isVisible){
    return <ProductPlaceholder/>
  }
  
  if(isVisible && product) {
    return (
      <Link
      className={cn('invisible h-full cursor-pointer group/main',
      {
        'visible animate-in fade-in-5': isVisible
      }
      )}
      href={`/product/${product.id}`}>
        <div className="flex flex-col w-full">
          {/* Image slider */}
          <ImageSlider urls={validUrls}/>
          <div className="flex justify-between px-3">
            <div>
              <h3 className="mt-4 font-medium text-lg text-muted">
                {product.name}
              </h3>
              <p className=" text-sm  font-semibold text-gray-500">
                {label}
              </p>
            </div>
            <p className="mt-4 text-lg font-bold text-muted">{formatPrice(product.price)}</p>
          </div>
          
          
        </div>
        
      </Link>
    )
  }

}

const ProductPlaceholder = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-lg">
        <Skeleton className="h-full w-full"/>
      </div>
      <Skeleton className="mt-4 w-2/3 h-4 rounded-lg"/>
      <Skeleton className="mt-2 w-16 h-4 rounded-lg"/>
      <Skeleton className="mt-2 w-12 h-4 rounded-lg"/>
    </div>
  )
}

export default ProductListing