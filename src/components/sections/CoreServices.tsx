import { act, useState } from "react";
import { SERVICES_PANELS } from "../../lib/constants";
import { colors, typography } from "../../lib/design-tokens"



const CoreServices = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="flex items-center justify-center mx-auto w-full ">
            <div className="flex flex-col justify-center space-y-6 w-[1478px]">

                {/* header of the section */}
                <div className="felx flex-col space-y-4">
                    <h4 className={`items-start justify-start font-normal font-outfit text-[${typography.header4.fontSize}px] `}>
                        Core Services
                    </h4>
                    <div className="flex justify-between">
                        <h1 className={`items-start justify-start w-1/3 h-full font-lingo text-[${typography.header1.fontSize}px] text-[${colors.subtext}] `}>
                            Expert Guidance Across Every Stage of Growth
                        </h1>
                        <p className={`w-1/3 h-1/2 items-end justify-end font-outfit text-[${typography.body1.fontSize}px]`}> Our services are designed to help businesses make smarter decisions and achieve sustainable success.</p>
                    </div>
                </div>
                
                {/* the panels */}
                <div className="flex flex-row overflow-hidden  rounded-md h-[960px]">
                    {
                        SERVICES_PANELS.map((service, i) => {
                            const isActive = (i === active);
                            return (
                                <div
                                    className={`flex h-full object-cover relative
                                        ${isActive ? "w-1 grow-8 " : "w-1/12 grow brightness-50 cursor-pointer hover:brightness-100"}
                                        transition-all ease-in-out duration-500`}
                                    onClick={() => setActive(i)}
                                >
                                    {/* the image itself */}
                                    <img
                                        src={service.image}
                                        className={`flex h-full object-cover relative 
                                        ${isActive ? "w-1 grow-8 " : "w-1/12 grow brightness-50 cursor-pointer hover:brightness-100"}
                                        transition-all ease-in-out duration-500
                                        `}
                                        onClick={() => setActive(i)
                                        }
                                    />
                                    {/* the Description block that appears on click */}
                                    <div className={`just-between p-6 h-[385px] w-[864px] text-[${colors.red4}] bg-[${colors.gray}] flex flex-col justify-between items-start  absolute  bottom-4 left-16 transition-all  duration-800 ease-out
                                    ${isActive ?" translate-y-0 opacity-100 delay-050" : " translate-y-50 opacity-0"}
                                    `}>
                                        <img
                                            src={service.icon}

                                        ></img>
                                        <div>
                                            <h1 className={`text-[${typography.header1.fontSize}px] font-lingo  `}>
                                                {service.title}
                                            </h1>
                                            <p className={`text-[${typography.header2.fontSize}px] font-[Outfit] `}
                                            >
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                    {/* <img src={SERVICES_PANELS[0].   image} className="w-1/8 object-cover " />
                    <img src={SERVICES_PANELS[1].image} className="w- grow-10 object-cover" />
                    <img src={SERVICES_PANELS[2].image} className="w-1/8 object-cover" />    */}
                </div>
            </div>
        </div >
    )
}

export default CoreServices