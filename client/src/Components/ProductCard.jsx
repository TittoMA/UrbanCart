import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    return (

        <div key={props.key} className='w-[330px] h-[500px] border border-slate-300 pb-4 rounded-2xl flex flex-col justify-between'>

            <div className="images flex overflow-scroll w-full h-[290px] rounded-t-2xl snap-x snap-mandatory">
                {props.ele.images.map((img, i) => {
                    return <img src={img} key={i} className='shrink-0 w-full h-full object-cover snap-center' alt='product'></img>
                })}
            </div>

            <div className="details mx-3 flex flex-col h-[210px] justify-between py-4">
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <Link to={`/product/${props.ele._id}`} className='w-[75%] text-lg font-semibold'>{props.ele.title}</Link>
                        <Link to={`/product/${props.ele._id}`} className='w-full text-sm'>{props.ele.description}</Link>
                    </div>
                    <p className='font-semibold'>${props.ele.price}</p>
                </div>

                <p>
                    {/* {props.handleStar(Math.floor(props.ele.rating)).map((ele, key) => {
                        return (
                            <span key={key}>{ele}</span>
                        )
                    })} */}

                  ⭐ {props.ele.rating}
                </p>
                {/* <h2>{ele.brand}</h2> */}
            </div>
            <button className='text-md border border-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-white transition-all px-4 py-2 rounded-lg self-start mx-3 text-[var(--secondary)]'>Add To Cart</button>
        </div>
    )
}

export default ProductCard
