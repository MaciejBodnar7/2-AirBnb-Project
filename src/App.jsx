import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="w-11/12 mx-auto mt-0">
        <section className="w-full object-cover">
          <img className="mx-auto my-0 mt-10" src="../src/assets/Group 77.png" alt="" />
        </section>

        <section className="mt-16 w-full text-gray-900">
          <h1 className="text-5xl font-bold">Online Experiences</h1>
          <p className="mt-6 text-xl w-3/6 leading-6">
            Join unique interactive activities led by <br /> one-of-a-kind hosts—all without leaving home.
          </p>
        </section>
      </main>
    </>
  )
}

export default App
