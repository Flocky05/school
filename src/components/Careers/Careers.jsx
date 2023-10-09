import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/images/careers/img1.jpg"
import img2 from "../../assets/images/careers/img2.avif"
import img3 from "../../assets/images/careers/img3.jpg"
import img4 from "../../assets/images/careers/img4.jpg"
import img5 from "../../assets/images/careers/img5.jpg"
import img6 from "../../assets/images/careers/img6.jpg"
import img7 from "../../assets/images/careers/img7.jpg"

const Careers = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div>
            <Carousel responsive={responsive}>
                <div>
                    <img className="w-full object-cover" src={img1} alt="" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold ">Career Session</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, molestiae soluta eius harum laudantium deserunt aliquam hic. Nemo ipsam in voluptas autem magni inventore repellendus, officia vitae nam aliquam eum!</p>
                        <button className="px-7 py-2 bg-fuchsia-900 text-white rounded-lg mt-5">Learn More</button>
                    </div>
                </div>
                <div>
                    <img className="w-full object-cover" src={img2} alt="" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold ">Career Session</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, molestiae soluta eius harum laudantium deserunt aliquam hic. Nemo ipsam in voluptas autem magni inventore repellendus, officia vitae nam aliquam eum!</p>
                        <button className="px-7 py-2 bg-fuchsia-900 text-white rounded-lg mt-5">Learn More</button>
                    </div>
                </div>
                <div>
                    <img className="w-full object-cover" src={img3} alt="" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold ">Career Session</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, molestiae soluta eius harum laudantium deserunt aliquam hic. Nemo ipsam in voluptas autem magni inventore repellendus, officia vitae nam aliquam eum!</p>
                        <button className="px-7 py-2 bg-fuchsia-900 text-white rounded-lg mt-5">Learn More</button>
                    </div>
                </div>
                <div>
                    <img className="w-full object-cover" src={img4} alt="" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold ">Career Session</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, molestiae soluta eius harum laudantium deserunt aliquam hic. Nemo ipsam in voluptas autem magni inventore repellendus, officia vitae nam aliquam eum!</p>
                        <button className="px-7 py-2 bg-fuchsia-900 text-white rounded-lg mt-5">Learn More</button>
                    </div>
                </div> 
                <div>
                    <img className="w-full object-cover" src={img5} alt="" />
                   <div className="p-4">
                        <h2 className="text-2xl font-bold ">Career Session</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, molestiae soluta eius harum laudantium deserunt aliquam hic. Nemo ipsam in voluptas autem magni inventore repellendus, officia vitae nam aliquam eum!</p>
                        <button className="px-7 py-2 bg-fuchsia-900 text-white rounded-lg mt-5">Learn More</button>
                   </div>
                </div> 
                <div>
                    <img className="w-full object-cover" src={img6} alt="" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold ">Career Session</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, molestiae soluta eius harum laudantium deserunt aliquam hic. Nemo ipsam in voluptas autem magni inventore repellendus, officia vitae nam aliquam eum!</p>
                        <button className="px-7 py-2 bg-fuchsia-900 text-white rounded-lg mt-5">Learn More</button>
                    </div>
                </div> 
                <div>
                    <img className="w-full object-cover" src={img7} alt="" />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold ">Career Session</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, molestiae soluta eius harum laudantium deserunt aliquam hic. Nemo ipsam in voluptas autem magni inventore repellendus, officia vitae nam aliquam eum!</p>
                        <button className="px-7 py-2 bg-fuchsia-900 text-white rounded-lg mt-5">Learn More</button>
                    </div>
                </div> 
            </Carousel>;
        </div>
    );
};

export default Careers;