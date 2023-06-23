import Link from "next/link"

const Card = ({ item: { id, cover, catgeory, title, authorName, time }}) => {
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={cover} alt='news' />
        </div>
        <div className='text'>
          <span className='category'>{catgeory}</span>
          <Link href={`/singlepage/${id}`}>
            <h1 className='titleBg'>{title}</h1>
          </Link>
          <div className='author flex'>
            <span>by {authorName}</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card