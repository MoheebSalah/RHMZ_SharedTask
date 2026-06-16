import { INSIGHTS_BLOG_POSTS } from "../../lib/constants";
import { colors, typography } from "../../lib/design-tokens";

const LatestInsights = () => {
    return (
        <div className="flex items-center justify-center mx-auto w-full mb-10">
            <div className="flex flex-col justify-center space-y-6 w-[1478px]">

                {/* header of the section */}
                <div className="felx flex-col space-y-4">
                    <h4 className={`items-start justify-start font-normal font-outfit text-[${typography.header4.fontSize}px] `}>
                        Latest Insights
                    </h4>
                    <div className="flex justify-between">
                        <h1 className={`items-start justify-start w-2/5 h-full font-lingo text-[${typography.header1.fontSize}px] `}>
                            Business Trends, Strategies & Expert Advice
                        </h1>
                        <div className="flex items-end justify-end w-1/3">
                            <p className={` flex items-end justify-end font-outfit text-[${colors.subtext}] text-[${typography.body1.fontSize}px]`}> Stay informed with practical insights and proven approaches from experienced consultants.</p>
                        </div>
                    </div>
                </div>

                {/* the 3 latest insights */}
                <div className=" flex flex-row gap-6 h-fit ">
                    {
                        INSIGHTS_BLOG_POSTS.map(post => {
                            return (
                                <div className="rounded-xl overflow-hidden w-[468px] flex flex-col space-y-4 group cursor-pointer transition-all ease-in-out duration-200">
                                    <div className="overflow-hidden rounded-md">
                                        <img
                                            src={post.image}
                                            className="overflow-hidden object-cover h-[600px] w-full border border-[#D9D9D9] group-hover:brightness-70 group-hover:scale-110 transition-all ease-in-out duration-200"
                                            alt="" />
                                    </div>
                                    <h4 className={`text-[20px]  
                                    font-medium font-outfit group-hover:text-[#E5383B]`}>{post.title}</h4>
                                    <p className={`font-outfit text-[18px]
                                    text-[${colors.subtext}]`}>{post.description}</p>
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
                        <img src="src\assets\insights\button-arrow.png" className="w-fit h-fit opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200 -translate-x-5 group-hover:translate-x-0 " />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default LatestInsights