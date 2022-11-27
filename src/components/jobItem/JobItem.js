import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import {Rating} from 'react-simple-star-rating'
import {differenceInMonths} from 'date-fns'
import {ReactComponent as BookMark} from '../../img/Rectangle 31.svg';
import {ReactComponent as MapStamp} from '../../img/mapStamp.svg';
import './jobItem.scss'

const JobItem = ({job}) => {
    const [, setRating] = useState(0)
    const handleRating = (rate: number) => {
        setRating(rate)
        // other logic
    }
    const {title, id, createdAt, pictures, address} = job;
    const difference = differenceInMonths(new Date(), new Date(createdAt));
    return (
        <li className='card'>
            <picture><img src={pictures[0]} className='picture' alt="Job title"></img></picture>
            <div className='cardContainer'>
                <div className='starsContainerMobile'>
                    <Rating
                        onClick={handleRating}
                        className='stars'
                        fillColor='#384564'
                        size='10px'
                    />
                    <p className='timeAgo'>Posted {difference} month ago</p>
                </div>

                <NavLink className='link' to={`/job/${id}`}>
                    <p className='title'>{title}</p>
                </NavLink>
                <p className='subTitle'>Department name • Allgemeines Krankenhaus der Stadt Wien - AKH</p>
                <div className='adressContainer'>
                    <MapStamp className='mapStamp' height={13}/>
                    <p className='adress'>{address}</p>
                </div>
            </div>
            <div className='starsContainerDesctop'>
                <Rating
                    onClick={handleRating}
                    className='stars'
                    fillColor='#384564'
                    size='10px'
                />
            </div>
            <p className='timeAgoDesctop'>Posted {difference} month ago</p>
            <BookMark className='bookMark'/>
        </li>)
}
export default JobItem

