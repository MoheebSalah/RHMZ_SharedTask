

const LatestInsights = () => {
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
            imageAlt: "Business professional looking through a telescope from a blue platform",
            title: "How Process Optimization Increases Profitability",
            description:
                "Discover practical ways to improve efficiency and reduce operational costs.",
            href: "#",
        },
        {
            image: "src\\assets\\insights\\blog-3.png",
            imageAlt: "Silhouette walking toward a bright doorway on a blue background",
            title: "Building a Scalable Business for Long-Term Success",
            description:
                "Key strategies every growing company should implement early.",
            href: "#",
        },
    ] as const;

    return (
        <div className="flex items-center justify-center mx-auto w-full mb-[100px] max-w-[var(--section-max-width)] px-[var(--section-padding-x-sm)] md:px-[var(--section-padding-x)]  flex-col gap-[var(--testimonials-outer-gap)] ">
            <div className="flex flex-col justify-center space-y-6 ">

                {/* header of the section */}
                <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
                    <div className="max-w-[472px] ">
                        <p className="text-section-eyebrow mb-3">{INSIGHTS_SECTION.eyebrow}</p>
                        <h2 className="text-section-title">{INSIGHTS_SECTION.title}</h2>
                    </div>
                    <p className="max-w-[418px] text-body-2 text-subtext md:pb-1">
                        {INSIGHTS_SECTION.description}
                    </p>
                </div>

                {/* the 3 latest insights */}
                <div className=" flex flex-row gap-6 h-fit ">
                    {
                        INSIGHTS_BLOG_POSTS.map(post => {
                            return (
                                <div className="rounded-xl overflow-hidden w-1/3 flex flex-col space-y-4 group cursor-pointer transition-all ease-in-out duration-200">
                                    <div className="overflow-hidden rounded-md">
                                        <img
                                            src={post.image}
                                            className="overflow-hidden object-cover  w-full border border-[#D9D9D9] group-hover:brightness-70 group-hover:scale-110 transition-all ease-in-out duration-200"
                                            alt="" />
                                    </div>
                                    <h4 className={`text-[20px]  
                                    font-medium font-outfit group-hover:text-[#E5383B]`}>{post.title}</h4>
                                    <p className={`font-outfit text-[18px]
                                    text-[#696366]`}>{post.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mt-6 font-outfit flex flex-row gap-4 group" >
                    <button className={`group-hover:text-[#E5383B] transition-all ease-in-out duration-200 cursor-pointer`} >
                        Explore more blogs
                    </button>
                    <div className="items-center justify-center flex">
                        <img src="src\assets\insights\arrow icon.png" className="w-fit h-fit opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200 -translate-x-5 group-hover:translate-x-0 " />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default LatestInsights