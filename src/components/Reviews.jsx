

const Reviews = () => {
    return (
        <div className="my-24 max-w-screen-xl mx-auto">
            <h1 className="text-4xl font-semibold text-dark text-center mb-12">Happy Customers</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 px-8 ">
            <div className="bg-light p-8 rounded-lg">
                <div className="relative">
                    
                <img className="w-14 absolute -top-14 -left-14" src="https://i.ibb.co/NnXsJxm/member4.png" alt="" />
                <p>"I am absolutely in love with the beauty products from this page! The quality is top-notch, and the results are amazing. I've been using their skincare line for a few weeks now, and my skin has never looked better. The packaging is also so elegant; it feels like a luxury experience every time I use these products."</p>
                <h1 className="text-end font-semibold">-Jenny Kim</h1>
                </div>
               
            </div>
            <div className="bg-light p-8 rounded-lg">
            <div className="relative">
            <img className="w-14 absolute -top-14 -left-14" src="https://i.ibb.co/V963DpP/member3.png" alt="" />
                <p>
                "I was skeptical at first, but after trying their haircare products, I'm a believer. My hair has gone from frizzy and unmanageable to smooth and shiny. The scent is also fantastic, and the fact that they use natural ingredients is a big plus for me. Highly recommended!"
                </p>
                <h1 className="text-end font-semibold">-John Cooper</h1>
            </div>
            </div>
            <div className="bg-light p-8 rounded-lg">
            <div className="relative">
            <img className="w-14 absolute -top-14 -left-14" src="https://i.ibb.co/V963DpP/member3.png" alt="" />
                <p>
                "These beauty products are a game-changer! The makeup collection is extensive and the colors are vibrant. I recently purchased their lipstick and it stays on all day without smudging. I've also noticed an improvement in my skin since using their foundation .it feels light and looks flawless. I can confidently say that this is my go-to beauty brand now."
                </p>
                <h1 className="text-end font-semibold">-Jackson Wang</h1>
            </div>
            </div>
            <div className="bg-light p-8 rounded-lg">
            <div className="relative">
            <img className="w-14 absolute -top-14 -left-14" src="https://i.ibb.co/NnXsJxm/member4.png" alt="" />
                <p>
                "I've been a loyal customer of this beauty products page for years, and they never disappoint. Their customer service is exceptional, and the range of products they offer is impressive. From skincare to makeup and haircare, they've got it all. Plus, the prices are reasonable for the quality you receive. I wouldn't shop anywhere else for my beauty needs."
                </p>
                <h1 className="text-end font-semibold">-Hailey Bieber</h1>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Reviews;