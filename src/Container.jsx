import React from 'react'
import CarouselPage from './CarouselPage'

const Container = ()=> {
    return (
        <div>
            <div className='carousel-container'>            
                <CarouselPage/>
            </div>
            <div>About Section</div>
            <div>Timeline Section</div>

        </div>
    )
}

export default Container