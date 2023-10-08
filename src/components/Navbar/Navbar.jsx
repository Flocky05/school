import { Link } from "react-router-dom";
import img from "../../assets/images/logo/logo.png"
const Navbar = () => {
    return (
        <div>
            <div>
                <Link to="/"><img src={img} alt="" /></Link>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/who">Who We are?</Link>
                <Link to="/admission">Admission</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/school-policies">School  Policies</Link>
                <Link to="/infrastructure">Infrastructure</Link>
                <Link to="/infrastructure">Infrastructure</Link>

            </div>
        </div>
    );
};

export default Navbar;