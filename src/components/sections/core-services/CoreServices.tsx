import { useState } from "react";
import { FEATURE_FOUR } from "../../../lib/constants";
// import { colors, typography } from "../../lib/design-tokens"

const CoreServices = () => {
    const [active, setActive] = useState(0);
    const SERVICES_PANELS = [
        {
            id: "left" as const,
            image: "src\\assets\\services\\panel-left.png",
            icon: "src\\assets\\services\\icon-left.png",
            imageAlt: "Two hands reaching toward each other",
            title: "Operational Excellence",
            description:
                "Optimize workflows, reduce inefficiencies, and improve overall performance.",
        },
        {
            id: "center" as const,
            image: "src\\assets\\services\\panel-center.png",
            icon: "src\\assets\\services\\icon-center.png",
            imageAlt: "Business professional looking through a telescope",
            title: "Growth & Expansion",
            description:
                "Identify opportunities, enter new markets, and scale with confidence.",
        },
        {
            id: "right" as const,
            image: "src\\assets\\services\\panel-right.png",
            icon: "src\\assets\\services\\icon-right.png",
            imageAlt: "Bridge spanning a gap in the clouds",
            title: "Strategic Planning",
            description:
                "Develop long-term business strategies aligned with your vision and objectives.",
        },
    ] as const;

    return (
        <div className="flex items-center justify-center w-full mx-auto mb-[200px]  max-w-[var(--section-max-width)] px-[var(--section-padding-x-sm)] md:px-[var(--section-padding-x)]  flex-col gap-[var(--testimonials-outer-gap)]">
            <div className="flex flex-col space-y-6">

                {/* header of the section */}
                <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
                    <div className="max-w-[472px] ">
                        <p className="text-section-eyebrow mb-3">{FEATURE_FOUR.eyebrow}</p>
                        <h2 className="text-section-title">{FEATURE_FOUR.title}</h2>
                    </div>
                    <p className="max-w-[418px] text-body-2 text-subtext md:pb-1">
                        {FEATURE_FOUR.description}
                    </p>
                </div>

                {/* the panels */}
                <div className="flex flex-row overflow-hidden rounded-md h-[960px]">
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
                                        transition-all ease-in-out duration-300
                                        `}
                                        onClick={() => setActive(i)
                                        }
                                    />
                                    {/* the Description block that appears on click */}
                                    <div className={`just-between p-6 h-[320px] w-[760px] text-[#660708] bg-[#f5f3f4] flex flex-col justify-between items-start  absolute  bottom-4 left-16 transition-all  duration-800 ease-out
                                    ${isActive ? " translate-y-0 opacity-100 delay-100" : " translate-y-50 opacity-0"}
                                    `}>
                                        <img
                                            src={service.icon}

                                        ></img>
                                        <div className="flex flex-col space-y-4">
                                            <h1 className="text-[48px] font-[--font-serif]">
                                                {service.title}
                                            </h1>
                                            <p className="text-[32px] --font-outfit"
                                            >
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default CoreServices