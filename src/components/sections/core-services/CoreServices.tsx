import { useState } from "react";
import { FEATURE_FOUR } from "../../../lib/constants";

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
        <div className="flex items-center justify-center w-full mx-auto  max-w-[var(--section-max-width)] px-[var(--section-padding-x-sm)] md:px-[var(--section-padding-x)] flex-col gap-[var(--testimonials-outer-gap)]">
            <div className="flex flex-col space-y-6">
                {/* header of the section */}
                <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
                    <div className="max-w-[472px]">
                        <p className="text-section-eyebrow mb-3">{FEATURE_FOUR.eyebrow}</p>
                        <h2 className="text-section-title">{FEATURE_FOUR.title}</h2>
                    </div>
                    <p className="max-w-[418px] text-section-description text-subtext md:pb-1">
                        {FEATURE_FOUR.description}
                    </p>
                </div>

                {/* panels — vertical accordion on mobile, horizontal flex-grow on desktop */}
                <div className="flex flex-col md:flex-row overflow-hidden rounded-md md:h-[960px] gap-[2px] md:gap-0">
                    {SERVICES_PANELS.map((service, i) => {
                        const isActive = i === active;
                        return (
                            <div
                                key={service.id}
                                className={`flex relative cursor-pointer
                                    w-full transition-all ease-in-out duration-500
                                    ${isActive ? "h-[440px]" : "h-[72px]"}
                                    md:h-full md:object-cover
                                    ${isActive
                                        ? "md:w-1 grow-8"
                                        : "brightness-80 md:w-1/12 md:grow md:brightness-50 md:hover:brightness-100"
                                    }
                                `}
                                onClick={() => setActive(i)}
                            >
                                {/* image */}
                                <img
                                    src={service.image}
                                    alt={service.imageAlt}
                                    className={`flex h-full object-cover relative w-full
                                        transition-all ease-in-out duration-300
                                        ${isActive
                                            ? "md:w-1 md:grow-8"
                                            : "md:w-1/12 md:grow md:brightness-50 md:cursor-pointer md:hover:brightness-100"
                                        }
                                    `}
                                    onClick={() => setActive(i)}
                                />

                                {/* mobile-only: title bar visible when collapsed */}
                                <div
                                    className={`absolute top-0 left-0 right-0 h-[72px] flex items-center gap-3 px-4 bg-gradient-to-b from-black/65 to-transparent md:hidden
                                        transition-opacity duration-500 ease-in-out
                                        ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}
                                    `}
                                >
                                    <img
                                        src={service.icon}
                                        alt=""
                                        className="w-7 h-7 object-contain"
                                    />
                                    <h3 className="text-white font-medium text-base font-outfit">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* description box */}
                                <div
                                    className={`absolute flex flex-col items-start justify-between
                                    p-4 md:p-6 border border-[#D3D3D3]
                                    bottom-3 left-3 right-3
                                    md:bottom-4 md:left-16 md:right-auto md:w-[760px] md:h-[320px]
                                    text-[#660708] bg-[#f5f3f4]
                                    transition-all duration-500 ease-out
                                    ${isActive ? "translate-y-0 opacity-100 delay-100" : "translate-y-12 md:translate-y-50 opacity-0"}
                                `}
                                >
                                    <img
                                        src={service.icon}
                                        alt=""
                                        className="w-9 h-9 object-contain md:w-auto md:h-auto"
                                    />
                                    <div className="flex flex-col space-y-2 md:space-y-4">
                                        <h1 className="text-xl md:text-[48px] font-[--font-serif]">
                                            {service.title}
                                        </h1>
                                        <p className="text-sm md:text-[32px] --font-outfit">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CoreServices;
