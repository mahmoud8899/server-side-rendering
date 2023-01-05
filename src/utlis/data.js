import meat from './popular/meat.jpg'
import fisk from './popular/fisk.jpg'
import vegataris from './popular/vegataris.jpg'
import { BiHappyAlt, BiHomeAlt } from 'react-icons/bi'
import React from 'react'

// item data....
export const ItemData = [
    {
        _id: 1,
        name: 'fisk',
        des: 'Du skapar din egen matsedel, väljer själv vilka maträtter bland våra alternativ ',
        image: fisk,
        pries: 20,
    },
    {
        _id: 2,
        name: 'meat',
        des: 'Du skapar din egen matsedel, väljer själv vilka maträtter bland våra alternativ ',
        image: meat,
        pries: 30,
    },
    {
        _id: 3,
        name: 'vegataris',
        des: 'Du skapar din egen matsedel, väljer själv vilka maträtter bland våra alternativ ',
        image: vegataris,
        pries: 40,
    }
]

// awesome services 
export const AwesomeServices = [
    {
        _id: 1,
        icon: 'BiHomeAlt',
        name: 'Quality Food',
        des: `Keep healthy food readily
        hunarv. vou're more liken to`
    },
    {
        _id: 2,
        icon: 'BiHappyAlt',
        name: 'Super Taste',
        des: ` Keep healthy food readily
        hunarv. vou're more liken to`
    },
    {
        _id: 3,
        icon: 'BiHomeAlt',
        name: 'Fast Delivery',
        des: `Keep healthy food readily
        hunarv. vou're more liken to`
    },

]

// check out icons
export function CheckOutIcons(icons) {
    switch (icons) {
        case 'BiHappyAlt': return <BiHappyAlt className='IconExtra color-all' />
        case 'BiHomeAlt': return <BiHomeAlt className='IconExtra color-all' />
        default: return <BiHomeAlt className='IconExtra color-all' />

    }
}


export const ServerUrlImage = 'https://lattspis.online/SizingImage/upload/'
// 'http://localhost:4000/SizingImage/upload/'
// 'https://mybackendtesting.jo3bo4ck669n8.eu-north-1.cs.amazonlightsail.com/upload/'
// image category
export function CategoryImage(name) {

    switch (name) {

        case 'kött': return `${ServerUrlImage}meat.jpg`
        case 'fisk': return `${ServerUrlImage}fisk.jpg`
        case 'vegataris': return `${ServerUrlImage}vegataris.jpg`
        case 'kyckling': return `${ServerUrlImage}kyckling.jpg`
        case 'efterrätt': return `${ServerUrlImage}dessert.jpg`
        default: return `${ServerUrlImage}vegataris.jpg`



    }
}



export const ImageUrl = 'https://lattspis.online/SizingImage'