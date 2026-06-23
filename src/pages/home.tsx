import Card from "../components/card"

const card = {
  headin: "heewf werf wef wef wef rg bsrth rth trj tr hrt ht jh rt rste",
  to: "/drink",
  alt: "gr",
  src: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
}

const Home = () => {
  return (
    <div>
      <Card heading={card.headin} to={card.to} alt={card.alt} src={card.src} />
    </div>
  )
}

export default Home