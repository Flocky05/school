
import img from "../../assets/images/Header/hero.jpg"
import Computer from "../Computer/Computer";
import FeeStructure from "../Fee Structure/FeeStructure";
import Nurturing from "../Nurturing/Nurturing";
import Security from "../Security/Security";
const Home = () => {
    return (
        <div className="relative">
            <img className="w-full h-screen" src={img} alt="" />
            <div className="absolute -mt-72">
                <h2 className="text-4xl font-bold text-center p-4 text-red-600">Bhuapur Govt Pilot Hight School</h2>
                <p className="text-center text-lg">Bhuapur Pilot Hight School is an ducational establishment that is located at Bhuapur,Tangail. Its Educational Institute Identification Number or EIIN, is 114019. On 20 January,1941, it was first put into operation. The alternative name for Bhuapur Pilot Hight School. It is a Combined sort of co-educational program. The institution provides education in the following fields: Business Studies, Science, Humanities.</p>
            </div>
            <Security></Security>
            <Computer></Computer>
            <Nurturing></Nurturing>
            <FeeStructure></FeeStructure>
        </div>
    );
};

export default Home;