import React from 'react'

const ImageList = ({ images }) => {
    console.log(images)
    const imgs = images.map(({id, description, urls}) => {
        return <img key={id} src={urls.regular} alt={description} />
    })
    return <div>{imgs}</div>
}

export default ImageList