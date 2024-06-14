import { useNavigate } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };
    return(
        <></>
        // <div className=" text-lg font-medium w-full bg-white shadow-md fixed top-0 left-0 flex justify-between items-center p-1">
        //     <Link to="/">Home</Link>
        //     <Link className="p-4" to="/blogs">Blogs</Link>
        //     <Link className="p-4" to="/aboutme">About Me</Link>
        //    <button className="p-4 bg-bay-leaf text-white font-semibold rounded hover:bg-opacity-80 transition duration-300" 
        //    onClick={handleSignUp}>Sign up</button>
        // </div>
    )
}
export default Navbar
