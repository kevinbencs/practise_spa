import { Link } from "react-router"

type CardProps = {
  to: string
  src: string
  heading: string
  alt?: string
}

const Card = ({ to, src, heading, alt }: CardProps) => {
  return (
    <Link
      to={to}
      className="group block w-68 h-96 overflow-hidden rounded-lg border border-mist-700 hover:scale-105  transition-colors hover:border-mist-600 hover:bg-mist-700"
    >
      <img
        src={src}
        alt={alt ?? heading}
        className="aspect-4/3 w-full bg-cover h-96 object-cover transition-transform duration-300 "
      />
      <h3 className="p-4 text-lg font-medium text-shadow-lg text-whitesmoke relative -top-40 left-0">{heading}</h3>
    </Link>
  )
}

export default Card
