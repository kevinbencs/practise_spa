import { Link } from "react-router"
import Menu from "./menu"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Search from "./search";
import { useUser } from "./userContext";




const Header = () => {
  const { name } = useUser()
  const [check, setCheck] = useState<boolean>(false)
  const [searchVisible, setSearchVisible] = useState<boolean>(false)


  const searchClick = () => {
    if (searchVisible) document.body.style.overflow = "hidden";
    else { document.body.style.overflow = "" };
    setSearchVisible(() => !searchVisible)
  }

  return (
    <header className="flex p-2 lg:justify-around  justify-between">
      <Link to="/" className="lg:block hidden p-2">Home</Link>
      <label htmlFor="menu-checkbox" className="lg:hidden p-2">
        <RxHamburgerMenu size={30} />
      </label>
      <input type="checkbox" name="menu-checkbox" checked={check} onChange={() => setCheck(!check)} id="menu-checkbox" className="hidden" />
      <Menu check={check} setChecked={setCheck} />

      <section className="flex gap-5 items-start">
        <button className="p-2 cursor-pointer" onClick={searchClick}><FaSearch /></button>
        {!name && <>
          <Link to="/login" className="p-2">Log in</Link>
          <Link to="/signup" className="p-2">Sign up</Link>
        </>
        }

        {name && <Link to="/dashboard" className="p-2">{name}</Link>}


      </section>
      {searchVisible && <Search handleClick={searchClick} />}
    </header>
  )
}

export default Header