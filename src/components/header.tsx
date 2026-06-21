import { Link } from "react-router"
import Menu from "./menu"
import { RxHamburgerMenu } from "react-icons/rx";




const Header = () => {
  return (
    <header className="flex p-2 lg:justify-around  justify-between">
      <Link to="/" className="lg:block hidden">Home</Link>
      <label htmlFor="menu-checkbox" className="lg:hidden p-2">
        <RxHamburgerMenu size={30}/>
      </label>
      <input type="checkbox" name="menu-checkbox" id="menu-checkbox"  className="hidden"/>
      <Menu />
      <section className="flex gap-10">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </section>
    </header>
  )
}

export default Header