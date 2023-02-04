import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} cards`}>
      <div className="data">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div className="imagecontainer">
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
