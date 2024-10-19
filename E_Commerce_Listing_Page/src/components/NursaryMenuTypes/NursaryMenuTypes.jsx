import React, { useState } from 'react'
import "./NursaryMenuTypes.css"
import { nursary_list } from '../../assets/assets'

const NursaryMenuTypes = () => {

    const [category, setCategory] = useState("All")

    return (
        <div className='explore-nursary' id='explore-nursary'>
            <h1>Nursary</h1>
            <div className='explore-nursary-list'>
                {nursary_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className='explore-nursary-list-item' key={index}>
                            <img className={category === item.menu_name ? "active" : "nursary-type"} src={item.menu_image} alt='' />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default NursaryMenuTypes