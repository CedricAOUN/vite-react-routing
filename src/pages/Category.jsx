import { useParams } from "react-router"

function Category() {
  const { category } = useParams()

  return (
    <h1>Details de la page avec la category: {category}</h1>
  )
}

export default Category