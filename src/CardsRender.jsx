import Cards from "./Cards.jsx"
import data from "./data.js"

export default function CardsRender() {
  const postArr = data.map(item => {
    return (
      <Cards
        key={item.id}
        img={item.img}
        rating={item.rating}
        reviewCount={item.reviewCount}
        country={item.country}
        title={item.title}
        price={item.price}
        status={item.status}
      />
    )
  })
  return (
    <section className="cards-section w-11/12 mx-auto mt-16 text-gray-900 flex gap-6 overflow-x-auto flex-grow-0 flex-shrink-0 flex-nowrap">
      {postArr}
    </section>
  )
}
