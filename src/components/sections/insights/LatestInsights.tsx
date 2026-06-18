import { useRef, useState } from "react";

const LatestInsights = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const INSIGHTS_SECTION = {
        eyebrow: "Latest Insights",
        title: "Business Trends, Strategies & Expert Advice",
        description:
            "Stay informed with practical insights and proven approaches from experienced consultants.",
        ctaLabel: "Explore more blogs",
        ctaHref: "#blogs",
    } as const;

    const INSIGHTS_BLOG_POSTS = [
        {
            image: "src\\assets\\insights\\blog-1.png",
            imageAlt: "Illustration of an airplane taking off from an airport runway",
            title: "5 Signs Your Business Needs a Strategic Review",
            description:
                "Learn how to identify common growth barriers before they impact performance.",
            href: "#",
        },
        {
            image: "src\\assets\\insights\\blog-2.png",
            imageAlt:
                "Business professional looking through a telescope from a blue platform",
            title: "How Process Optimization Increases Profitability",
            description:
                "Discover practical ways to improve efficiency and reduce operational costs.",
            href: "#",
        },
        {
            image: "src\\assets\\insights\\blog-3.png",
            imageAlt:
                "Silhouette walking toward a bright doorway on a blue background",
            title: "Building a Scalable Business for Long-Term Success",
            description:
                "Key strategies every growing company should implement early.",
            href: "#",
        },
    ] as const;

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const scrollCenter = container.scrollLeft + container.offsetWidth / 2;
        let closest = 0;
        let closestDist = Infinity;
        cardRefs.current.forEach((card, i) => {
            if (!card) return;
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const dist = Math.abs(scrollCenter - cardCenter);
            if (dist < closestDist) {
                closestDist = dist;
                closest = i;
            }
        });
        setActiveIndex(closest);
    };

    return (
        <div className="flex items-center justify-center mx-auto w-full  max-w-[var(--section-max-width)] px-[var(--section-padding-x-sm)] md:px-[var(--section-padding-x)]  flex-col gap-[var(--testimonials-outer-gap)] ">
            <div className="flex flex-col justify-center space-y-6 w-full">

                {/* header of the section */}
                <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
                    <div className="max-w-[472px] ">
                        <p className="text-section-eyebrow mb-3">{INSIGHTS_SECTION.eyebrow}</p>
                        <h2 className="text-section-title">Business Trends, Strategies <br /> & Expert Advice</h2>
                    </div>
                    <p className="max-w-[418px] text-section-description text-subtext md:pb-1">
                        Stay informed with practical insights and proven <br /> approaches from experienced consultants.
                    </p>
                </div>  

                {/* cards — snap-scroll carousel on mobile, unchanged row on desktop */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex flex-row gap-4 md:gap-6 h-fit w-full min-w-0
                        overflow-x-auto snap-x snap-mandatory scroll-smooth md:overflow-x-visible
                        [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {INSIGHTS_BLOG_POSTS.map((post, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                cardRefs.current[i] = el;
                            }}
                            className="rounded-xl
                                flex-shrink-0 w-full snap-center
                                md:flex-shrink md:w-1/3
                                flex flex-col space-y-4 group cursor-pointer transition-all ease-in-out duration-200"
                        >
                            <div className="overflow-hidden rounded-md">
                                <img
                                    src={post.image}
                                    className="overflow-hidden object-cover w-full h-[340px] md:h-auto  group-hover:brightness-70 group-hover:scale-110 transition-all ease-in-out duration-200"
                                    alt={post.imageAlt} />
                            </div>
                            <h4 className={`text-[20px]
                                    font-medium font-outfit group-hover:text-[#E5383B]`}>{post.title}</h4>
                            <p className={`font-outfit text-[18px]
                                    text-[#696366]`}>{post.description}</p>
                        </div>
                    ))}
                </div>

                {/* indicator dots — mobile only */}
                <div className="flex justify-center items-center gap-2 md:hidden">
                    {INSIGHTS_BLOG_POSTS.map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? "w-5 bg-[#E5383B]" : "w-2 bg-gray-300"
                                }`}
                            onClick={() => {
                                cardRefs.current[i]?.scrollIntoView({
                                    behavior: "smooth",
                                    inline: "center",
                                    block: "nearest",
                                });
                            }}
                        />
                    ))}
                </div>

                <a
                    href={INSIGHTS_SECTION.ctaHref}
                    className="mt-6 font-outfit flex flex-row items-center gap-4 group w-fit cursor-pointer"
                >
                    <span className="text-[#E5383B] md:text-inherit md:group-hover:text-[#E5383B] transition-all ease-in-out duration-200">
                        {INSIGHTS_SECTION.ctaLabel}
                    </span>
                    <div className="items-center justify-center flex">
                        <img
                            src="src\assets\insights\arrow icon.png"
                            className="w-fit h-fit opacity-100 translate-x-0 md:opacity-0 md:-translate-x-5 md:group-hover:opacity-100 md:group-hover:translate-x-0 group-active:translate-x-2 group-active:scale-110 transition-all ease-in-out duration-200"
                            alt=""
                        />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default LatestInsights;
