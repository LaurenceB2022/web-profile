import React from 'react'

const Resources = () => {

    return(
        <div className='w-full h-screen pt-20 bg-black overflow-auto'>
            <div className='mx-10 mt-10 mb-10 flex flex-col justify-center items-center'>
                <h1 className='text-3xl text-white'>Works Cited</h1>
                <div className='rounded border-white space-y-5'>
                    <div className="flex flex-row flex-wrap text-lg text-black rounded card card-compact w-[100%] h-full bg-white shadow-md mb-5 mt-5 px-20 pt-5 pb-5">
                        <p>Johnson, Jarvis. “Depth First & Breadth First Graph Search - DFS & BFS Graph Searching Algorithms.”</p>
                        <p className='italic'>YouTube</p>
                        <p>,&nbsp; Back To Back SWE, 20 Dec. 2018, youtu.be/TIbUeeksXcI. </p>
                        
                    </div>
                    <div className="flex flex-row flex-wrap text-lg text-black rounded card card-compact w-[100%] h-full bg-white shadow-md mb-5 mt-5 px-20 pt-5 pb-5">
                        <p>Amundsen,  Mike. "APIs Unplugged - S3 E10 - API Patterns & Practices”</p>
                        <p className='italic'>Soundcloud</p>
                        <p>, &nbsp; MuleSoft, 7 Nov. 2022, https://on.soundcloud.com/hbFLB1BXwBsLs8Vs7. </p>
                        
                    </div>
                    <div className="flex flex-row flex-wrap text-lg text-black rounded card card-compact w-[100%] h-full bg-white shadow-md mb-5 mt-5 px-20 pt-5 pb-5">
                        <p>Watmore, Jason. “REACT + Fetch - HTTP GET Request Examples.”</p>
                        <p className='italic'>Jason Watmore's Blog, </p>
                        <p>&nbsp; 12 May 2020, jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples. </p>
                        
                    </div>
                    <div className="flex flex-row flex-wrap text-lg text-black rounded card card-compact w-[100%] h-full bg-white shadow-md mb-5 mt-5 px-20 pt-5 pb-5">
                        <p>Coyier, Chris. “A Complete Guide to Flexbox: CSS-Tricks.” </p>
                        <p className='italic'>CSS-Tricks</p>
                        <p>, &nbsp; 9 Dec. 2022, css-tricks.com/snippets/css/a-guide-to-flexbox/. </p>
                        
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Resources;