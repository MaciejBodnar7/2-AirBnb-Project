import "./Cards.css"

function Cards(props) {
  return (
    <>
      <div className="cards-div flex-grow-0 flex-shrink-0">
        <div className="w-full relative">
          <p className="bg-slate-200 w-fit absolute mt-2 ml-2 py-1 px-2 text-sm rounded-lg">{props.status}</p>
          <img id="img-main" src={`../public/images/${props.img}`} alt="" className="w-full" />
        </div>
        <div className="flex mt-3">
          <img src="../src/assets/Star 1.png" alt="" />
          <p className="ml-2">
            {props.rating} <span className="text-gray-400">({props.reviewCount}) • </span>
          </p>
          <p className="text-gray-400 ml-1">{props.country}</p>
        </div>
        <div>
          <h2 className="mt-2">{props.title}</h2>
          <p className="font-bold mt-2">
            From <span>${props.price}</span> <span className="font-normal">/person</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Cards
