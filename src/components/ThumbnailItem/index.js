import './index.css'

const ThumbnailItem = prop => {
  const {selections, filtersData} = prop
  const {thumbnailUrl, id, thumbnailAltText} = selections

  const changeImage = () => {
    filtersData(id)
    console.log(id)
  }
  return (
    <li>
      <button className="btn" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={changeImage}
          className="thumb"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
