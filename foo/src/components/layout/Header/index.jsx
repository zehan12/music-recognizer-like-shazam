import { Fragment } from "react";
import Container from "../../common/Container";
import {IoIosSearch} from "react-icons/io"

const Header = () => {
    return (<Fragment>
        <header>
            <Container className="navbar sticky top-0 text-2xl text-[#247f59] font-semibold"
                    style={{
                        backgroundColor: "#85FFBD",
                        backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)"
                    }}>
                    <div className="navbar-start">

                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li tabIndex={0}>
                                    <a className="justify-between">
                                        Parent
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </a>
                                    <ul className="p-2">
                                        <li><a>My Libary</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>


                        <a className="btn btn-ghost normal-case text-xl font-sans font-bold">Music</a>
                        <ul className="menu menu-horizontal font-bold text-[1rem] px-1 hidden lg:flex">
                            <li><a>Charts</a></li>
                            <li tabIndex={0}>
                                <a>
                                    My Libary
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Apps</a></li>
                        </ul>
                    </div>

                    <div className="navbar-end ">

                        <div className="flex items-center gap-3 py-1.5 px-3 bg-body-text text-body rounded-lg border-2 border-green-300">
                            <input placeholder="search music, artist" type="text" className="bg-transparent outline-0" />
                            <IoIosSearch size={25} />
                        </div>

                        <a className="btn mx-9 text-green-700 font-bold text-md border-none hidden lg:flex" style={{
                            backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)"
                        }}>Try now</a>
                        <a className="btn mr-10 bg-white border-none text-green-700 font-bold text-md hover:bg-green-100 hidden lg:flex">Try now</a>
                    </div>

            </Container>
        </header>
    </Fragment>)
}

export default Header;