import React from 'react'
import {menu_list} from '../../assets/assets'
import './ExploreMenu.css'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu">
        <h1>Explore Our Menu</h1>
        <br></br>
        <p  className="explore-menu-text">Embark on a delightful journey through our carefully curated menu, where every dish is crafted to tantalize your taste buds and satisfy your cravings. From mouthwatering appetizers to indulgent main courses and decadent desserts, our menu offers a variety of flavors that cater to every palate.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                    return(
                        <div onClick={()=>{ setCategory(category=>category===item.menu_name?'All':item.menu_name)}} key=      {index}     className="explore-menu-list-item">
                            <img src={item.menu_image} className={category===item.menu_name?'active':''} alt=""/>
                            <p>{item.menu_name}</p>
                            </div>

                    )
                })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu