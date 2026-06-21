import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import type { SyntheticEvent } from "react";
import { useNavigate } from "react-router";

const Search = (props: { handleClick: () => void }) => {
    const navigate = useNavigate();

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        let name: string = e.target[0].value

        if (name.replaceAll(' ', '') !== '') {
            navigate(`/search?drink=${name.toLowerCase().replaceAll(' ', '-')}`);
            props.handleClick()
        }
    }
    return (
        <>
            <div className='w-screen h-screen top-0 fixed left-0 z-30  bg-[#161616a9] ' onClick={props.handleClick}></div>
            <div className="bg-mist-900 top-20 left-0 w-screen h-96 fixed z-40 text-white">
                <div className="flex justify-end p-2 mb-5">
                    <button className="p-2 cursor-pointer" onClick={props.handleClick}><IoMdCloseCircleOutline size={30} /></button>

                </div>
                <form onSubmit={handleSubmit} className="w-full relative h-full content-center  p-10">
                    <input type="search" name="search-name" id="search-id" className=" max-h-20 w-full border-white border-2 rounded p-5" />
                    <button type="submit" className=" max-h-20 cursor-pointer absolute translate-y-5 -translate-x-10"> <FaSearch size={20} /></button>
                </form>
            </div>
        </>

    )
}

export default Search