import { Link } from "react-router"
import Menu from "./menu"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";




const Header = () => {
  const [check, setCheck] = useState<boolean>(false)
  return (
    <header className="flex p-2 lg:justify-around  justify-between">
      <Link to="/" className="lg:block hidden">Home</Link>
      <label htmlFor="menu-checkbox" className="lg:hidden p-2">
        <RxHamburgerMenu size={30}/>
      </label>
      <input type="checkbox" name="menu-checkbox" checked={check} onChange={() => setCheck(!check)} id="menu-checkbox"  className="hidden"/>
      <Menu check={check} setChecked={setCheck}/>
      <section className="flex gap-10">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/dashboard">Dashboard</Link>

      </section>
    </header>
  )
}

export default Header