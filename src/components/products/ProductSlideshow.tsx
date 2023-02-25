import React from 'react'
import { Slide } from 'react-slideshow-image'
import style from './ProductSlideshow.module.css'
import 'react-slideshow-image/dist/styles.css'

interface Props {
    images: string[]
}

export const ProductSlideshow = ({ images }: Props) => {


    return (
        <Slide
            easing="ease"
            duration={7000}
            indicators
        >
            {
                images.map((image) => {
                    const url = `/products/${image}`;
                    return (
                        <div key={image} className={style['each-slide']}>
                            <div style={{
                                backgroundImage: `url(${url})`,
                                backgroundSize: "cover"
                            }}>
                                <span>Slide 1</span>
                            </div>
                        </div>
                    )
                })
            }

        </Slide >
    )
}
