import "./Cards.css"

function Cards() {
  return (
    <>
      <section className="cards-section w-11/12 mx-auto mt-16">
        <div className="bg-slate-500 w-1/4 h-5/6">
          <div className="w-full h-full relative">
            <p className="bg-slate-200 w-fit absolute mt-2 ml-2 py-1 px-2 text-sm rounded-lg">SOLD OUT</p>
            <img src="../src/assets/image 12.png" alt="" className="w-full" />
          </div>
          <div>
            <p>test</p>
            <img src="../src/assets/Star 1.png" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Cards
