import { Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router"

function Category() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }

  return (
    <>
      <h1>Details de la page avec la category: {categoryId}</h1>
      <Button onClick={handleClick}>Retour à la page d'acceuil</Button>
    </>
  )
}

export default Category