import React from 'react'
import './Services.css'
import {FaCocktail,FaHiking,FaTaxi} from 'react-icons/fa'
import {GiWashingMachine} from 'react-icons/gi'
import {CgGym} from 'react-icons/cg'
import {IoBeerSharp} from 'react-icons/io5'

const Services = () => {
  return (
    <div className='s_container'>
        <h1>Services</h1>
        <div className='s_line'/>
        <div className='col'>
        <div className='row_1'>
            <div className='row_1_1'>
                <div><FaCocktail/></div>
                <h4>Free Cocktails</h4>
            </div>
            <div className='row_1_1'>
                <div><FaHiking/></div>
                <h4>Tourist Guide</h4>
            </div>
            <div className='row_1_1'>
                <div><FaTaxi/></div>
                <h4>Cab Service</h4>
            </div>
        </div>
        <div className='row_2'>
            <div className='row_1_1'>
                <div><GiWashingMachine/></div>
                <h4>Free Laundry</h4>
            </div>
            <div className='row_1_1'>
                <div><CgGym/></div>
                <h4>Gym</h4>
            </div>
            <div className='row_1_1'>
                <div><IoBeerSharp/></div>
                <h4>Strongest Beer</h4>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Services