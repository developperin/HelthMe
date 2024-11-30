import React, { useRef, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import c6 from '../assets/c6.png'
import c7 from '../assets/c7.png'

const products = [
  {
    id: 1,
    name: "Delicious Pizza",
    description: "A classic Italian delight topped with fresh veggies, cheese, and savory sauces.",
    image: c1,
  },
  {
    id: 2,
    name: "Spicy Burger",
    description: "A mouthwatering burger packed with spicy flavors and fresh ingredients.",
    image: c2,
  },
  {
    id: 3,
    name: "Creamy Pasta",
    description: "Rich and creamy pasta made with a blend of herbs, spices, and cheese.",
    image: c3,
  },
  {
    id: 4,
    name: "Healthy Salad",
    description: "A refreshing mix of greens, fruits, and nuts topped with a tangy dressing.",
    image: c4,
  },
  {
    id: 5,
    name: "Grilled Sandwich",
    description: "A warm and crispy sandwich filled with fresh vegetables and cheese.",
    image: c5,
  },
  {
    id: 6,
    name: "Tasty Sushi",
    description: "Authentic sushi rolls prepared with the freshest seafood and rice.",
    image: c6,
  },
  {
    id: 7,
    name: "Chocolate Cake",
    description: "A rich and moist chocolate cake topped with a creamy chocolate glaze.",
    image: c7,
  },
];


const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer px-2 rounded-md m-4 p-4 ">
      <div className="relative  overflow-hidden rounded-2xl ">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
        <p className="text-xs text-gray-600 mb-3">{product.description}</p>
      </div>
    </div>
  )
}

const ProductGrid = () => {
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current
    let isDown = false
    let startX
    let scrollLeft

    const handleMouseDown = (e) => {
      isDown = true
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }

    const handleMouseLeave = () => {
      isDown = false
    }

    const handleMouseUp = () => {
      isDown = false
    }

    const handleMouseMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 2
      slider.scrollLeft = scrollLeft - walk
    }

    slider.addEventListener('mousedown', handleMouseDown)
    slider.addEventListener('mouseleave', handleMouseLeave)
    slider.addEventListener('mouseup', handleMouseUp)
    slider.addEventListener('mousemove', handleMouseMove)

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown)
      slider.removeEventListener('mouseleave', handleMouseLeave)
      slider.removeEventListener('mouseup', handleMouseUp)
      slider.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-blue-600 font-medium mb-2 text-xl">HELP TOPICS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Enhance Your Lifestyle
          </h3>
        </div>

        {/* Product Slider */}
        <div ref={sliderRef} className="overflow-hidden">
        <div>
          <Slider {...settings}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            
          </Slider>
          </div>
          <div>
          <Slider {...settings}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            
          </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductGrid

