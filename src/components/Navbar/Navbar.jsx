import { Link } from "react-router-dom";
import img from "../../assets/images/logo/logo.png"
const Navbar = () => {
    return (
        <div className="flex justify-between p-4 bg-orange-300 text-blue">
            <div>
                <Link to="/"><img className="w-10" src={img} alt="" /></Link>
            </div>
            <div className="grid grid-cols-7 gap-4 text-xl">
                <Link to="/">Home</Link>
                <Link to="/who">Who We are?</Link>
                <Link to="/admission">Admission</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/school-policies">School  Policies</Link>
                <Link to="/infrastructure">Infrastructure</Link>
                <Link to="/registation">Registation</Link>

            </div>
        </div>
    );
};

export default Navbar;