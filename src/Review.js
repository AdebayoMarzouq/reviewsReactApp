import React, { useState } from 'react';
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [current, setCurrent] = useState(0)

  const { image, name, job, text } = people[current]

  const checkNumber = (number) => {
    if (number < 0) {
      return people.length - 1
    }
    if (number > people.length - 1) {
      return 0
    }
    return number
  }

  const prevPerson = () => {
    setCurrent(prev => {
      prev--
      return checkNumber(prev)
    })
  }

  const nextPerson = () => {
    setCurrent((prev) => {
      prev++
      return checkNumber(prev)
    })
  }
  
  const randomPerson = () => {
    let randomPerson = Math.floor(Math.random() * people.length)
    if (randomPerson === current) {
      randomPerson++
    }
    setCurrent(checkNumber(randomPerson))
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  )
};

export default Review;
