import { useParams } from "react-router"

function Category() {
  const { categoryId } = useParams()

  return (
    <h1>Details de la page avec la category: {categoryId}</h1>
  )
}

export default Category