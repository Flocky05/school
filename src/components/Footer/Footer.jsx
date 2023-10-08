
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import img1 from "../../assets/images/footerIcons/facebook-64.png"
import img2 from "../../assets/images/footerIcons/instagram-64.png"
import img3 from "../../assets/images/footerIcons/linkedin-64.png"
import img4 from "../../assets/images/footerIcons/twitter-64.png"
const Footer = () => {
    return (
        <footer className="px-4 divide-y-2 bg-gray-200 ">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <Link rel="noopener noreferrer" to="/" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center rounded-full">
                            <img className='w-12' src={logo} alt="" />
                        </div>
                        <span className="self-center text-2xl font-semibold text-orange-500 font-Berkshire">BGPHS</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercas">School Event</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer" to="/">Contest</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to="/">Sports</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to="/">Cultural function</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to="/">Toure</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase ">Govt. School</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer" to="/">Privacy</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to="/">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer" href="#">Public API</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">Documentation</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#">Guides</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase">Social media</div>
                        <div className='flex gap-4'>
                            <Link to="/"><img className='w-10' src={img1} alt="" /></Link>
                            <Link to="/"><img className='w-10' src={img2} alt="" /></Link>
                            <Link to="/"><img className='w-10' src={img3} alt="" /></Link>
                            <Link to="/"><img className='w-10' src={img4} alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-500">© 2022 Company Co. All rights reserved.</div>
        </footer>
    );
};

export default Footer;