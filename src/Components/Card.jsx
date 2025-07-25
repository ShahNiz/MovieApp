import React from 'react'
import {Link} from 'react-router-dom'
import Backup from '../../public/BackUpImage.webp'

const Card = ({movie}) => {
  const {id,original_title,overview,poster_path}=movie
  const image=poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:Backup;
  const truncateText = (text, limit) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };
  return (


    <div className='Card'>
      <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg h-[350px] w-[100%]" src={image} alt="Poster" />
    </Link>
    <div class="p-5">
        <Link to={`/movie/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{truncateText(overview,50)}</p>
        <Link to={`/movie/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fillRule="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>
    </div>


  )
}

export default Card
