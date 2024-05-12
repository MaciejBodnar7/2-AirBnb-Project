import "./Cards.css"

function Cards() {
  return (
    <>
      <section className="cards-section w-11/12 mx-auto mt-16 text-gray-900 flex gap-6 overflow-x-scroll flex-grow-0 flex-shrink-0">
        <div className="cards-div flex-grow-0 flex-shrink-0">
          <div className="w-full relative">
            <p className="bg-slate-200 w-fit absolute mt-2 ml-2 py-1 px-2 text-sm rounded-lg">SOLD OUT</p>
            <img src="../src/assets/image 12.png" alt="" className="w-full" />
          </div>
          <div className="flex mt-3">
            <img src="../src/assets/Star 1.png" alt="" />
            <p className="ml-2">
              5.0 <span className="text-gray-400">(6)</span>
            </p>
            <p className="text-gray-400 ml-2">- USA</p>
          </div>
          <div>
            <p className="mt-2">Life lessons with Katie Zaferes</p>
            <p className="font-bold mt-2">
              From <span>$146</span> <span className="font-normal">/person</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cards
