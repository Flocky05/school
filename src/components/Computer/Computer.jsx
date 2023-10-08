
import img from "../../assets/images/computer/computer.jpg"
const Computer = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-10 lg:p-20">
            <div>
                <h2 className="text-3xl font-bold p-5">Orchids The International School - Sonipat (Cbse Board)</h2>
                <p className="text-xl p-5">One of India Leading CBSE Schools in Sonipat</p>
                <p className="p-5">Located in one of the most upcoming cities, Sonipat, ORCHIDS The International School stands out as one of the best CBSE schools in the area. With a network of over 90 CBSE schools across 25+ cities in India, ORCHIDS The International School is renowned for its inclusive curriculum, hands-on learning approach, and commitment to fostering well-rounded students.</p>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default Computer;