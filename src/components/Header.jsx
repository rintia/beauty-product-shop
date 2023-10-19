import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";


const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  console.log(user);
    const navLinks = <>
     <li> <NavLink style={({ isActive }) => ({
            color: isActive ? "#630A10" : 'black',
            background: isActive ? '#FCF0C8' : 'white'
            })}
             to='/' >Home</NavLink> </li>
    <li><NavLink style={({ isActive }) => ({
            color: isActive ? "#630A10" : 'black',
            background: isActive ? '#FCF0C8' : 'white'
            })} to='/reviews'>Reviews</NavLink></li>
    <li><NavLink style={({ isActive }) => ({
            color: isActive ? "#630A10" : 'black',
            background: isActive ? '#FCF0C8' : 'white'
            })} to='/contactUs'>Contact Us</NavLink></li>
    </>
    const handleLogOut =() => {
      logOut()
      .then(() => console.log('sign out successfully'))
      .catch(error => console.log(error))
   }
    return (
        <div className="navbar bg-base-100 mb-12 md:mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <div className="flex">
    <img src="/logo.png" className="w-16" alt="" />
    <Link to='/'><a className="btn btn-ghost font-cursive font-bold normal-case text-dark text-4xl">Wedding Knot</a></Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    { user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={handleLogOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
   
    :
     <div className="md:flex ">
      <NavLink style={({ isActive }) => ({
            textDecoration : isActive ? 'underline' : 'none'
            })} to='/login'><h1 className="text-dark font-semibold mr-4" href="">Login</h1></NavLink>
     <NavLink style={({ isActive }) => ({
            textDecoration : isActive ? 'underline' : 'none'
            })}to='/register'><h1 className="text-dark font-semibold" href="">Register</h1></NavLink>
     </div>
    }
   
    
  </div>
</div>
    );
};

export default Header;