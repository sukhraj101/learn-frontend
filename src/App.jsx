import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/Home"


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<h1>About Page</h1>} />
      </Route>
     </Routes>
    </>
  )
}

export default App
