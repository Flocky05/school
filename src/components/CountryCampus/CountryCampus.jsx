import img1 from "../../assets/images/Country Campus/campus1.jpg"
import img2 from "../../assets/images/Country Campus/campus2.jpg"
import img3 from "../../assets/images/Country Campus/campus3.jpg"
import img4 from "../../assets/images/Country Campus/campus4.jpg"
import img5 from "../../assets/images/Country Campus/campus5.jpg"
import img6 from "../../assets/images/Country Campus/campus6.webp"
import img7 from "../../assets/images/Country Campus/campus7.jpg"
import img8 from "../../assets/images/Country Campus/campus8.jpg"

const CountryCampus = () => {
    return (
       <div>
            <h2 className="text-center p-4 text-3xl font-bold">BGPHS Constituents</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 m-10">
                <img className="w-full h-64 object-cover" src={img1} alt="" />
                <img className="w-full h-64 object-cover" src={img2} alt="" />
                <img className="w-full h-64 object-cover" src={img3} alt="" />
                <img className="w-full h-64 object-cover" src={img4} alt="" />
                <img className="w-full h-64 object-cover" src={img5} alt="" />
                <img className="w-full h-64 object-cover" src={img6} alt="" />
                <img className="w-full h-64 object-cover" src={img7} alt="" />
                <img className="w-full h-64 object-cover" src={img8} alt="" />
            </div>
       </div>
    );
};

export default CountryCampus;