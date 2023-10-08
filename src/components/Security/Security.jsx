
import img from "../../assets/images/security/done-100.png"
import img1 from "../../assets/images/security/career.webp"
import img2 from "../../assets/images/security/schoolBus.jpg"
import img3 from "../../assets/images/security/team.webp"


const Security = () => {
    return (
        <div className="bg-black p-10 text-white">
            <h2 className="text-4xl p-10 font-bold text-center">Orchids'5 Petals of Purpose</h2>
            <div className="lg:flex gap-20">
                <div className="grid grid-cols-1 lg:flex justify-between items-center p-5 border rounded-lg m-10">
                    <div>
                        <img className="invert w-20" src={img} alt="" />
                        <h2 className="text-3xl font-bold text-white">A Fortress of Care</h2>
                        <p className="text-lg">There’s Zero Compromise when it comes to your Child’s Safety.</p>
                    </div>
                    <div className="flex flex-col relative">
                        <img className="p-2" src={img1} alt="" />
                        <img className="p-2" src={img3} alt="" />
                    </div>
                </div>
                <div className="border rounded-lg p-20 m-10">
                    <img className="" src={img2} alt="" />
                    <h2 className="text-xl">Our Transportation</h2>
                    <p>Using the general-purpose public transport is the most common means of student transport, in some countries. Some countries such as Australia[1] have special routes and timetables exclusively used by students.</p>
                </div>
            </div>
        </div>
    );
};

export default Security;