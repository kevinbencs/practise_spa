import type { Dispatch, SetStateAction } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router";


const Menu = (props: {setChecked: Dispatch<SetStateAction<boolean>>, check: boolean}) => {

    const handleClick = () => {
        props.setChecked(() => !props.check)
    }

    return (
        <div className=" -left-62 fixed z-10 w-62 top-0 mobil-menu duration-500 min-h-screen bg-mist-800 p-2 lg:static lg:z-0 lg:w-auto lg:min-h-auto lg:bg-transparent lg:p-0">
            <div className="text-end lg:hidden">
                <button className="p-2 cursor-pointer ">
                    <label htmlFor="menu-checkbox">
                        <IoMdCloseCircleOutline size={30} />
                    </label>
                </button>
            </div>

            <section className=" list-none  lg:p-0 lg:flex gap-5">
                <Link to="/" className="lg:hidden mb-5 block border-b-2 p-2 hover:bg-mist-600" onClick={handleClick}>Home</Link>
                <li className="mb-5 block border-b-2 p-2 hover:bg-mist-600 lg:border-0" onClick={handleClick}>Kell</li>
                <li className="mb-5 block border-b-2 p-2 hover:bg-mist-600 lg:border-0" onClick={handleClick}>Kell</li>
                <li className="mb-5 block border-b-2 p-2 hover:bg-mist-600 lg:border-0" onClick={handleClick}>Kell</li>
            </section>
        </div>

    )
}

export default Menu