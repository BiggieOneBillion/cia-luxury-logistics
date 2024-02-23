import {teamMembers} from '../../data/TeamData'
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';


const MemberCard = () => {

    return (
        <div className="containerz mt-[15vh] lg:mt-0">
            <section className="text-gray-400 bg-primaryBlue body-font">
                <div className="container px-5 pt-5 lg:pt-24 mx-auto">

                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-[2rem] font-bold title-font mb-4 text-white">OUR <span className="text-primaryYellow">TEAM</span></h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap -m-4">
                        {
                            teamMembers.map(member => (
                            <div className="p-4 lg:w-1/4 md:w-1/2" key={uuidv4()}>
                                <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-white">{member.name}</h2>
                                    <h3 className="text-gray-500 mb-3">{member.title}</h3>
                                    {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
                                    <span className="inline-flex">
                                    <motion.a 
                                    // whileHover={{color:"#3b5998", borderBlockEnd:'2px solid #3b5998',paddingBlockEnd:'2px'}} 
                                    className="socials text-gray-700 relative before:absolute before:h-[1px] before:w-6 before:content-[''] before:bg-[#3b5998] before:right-[-2px] before:top-[-4px] after:absolute after:h-[0px] after:w-6 after:content-[''] after:bg-[#3b5998] after:right-[-2px] after:bottom-[-4px] hover:after:h-[2px]  hover:text-[#3b5998] hover:before:w-0 ">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </motion.a>
                                    <a 
                                    // className="ml-2 text-gray-700"
                                    className="socials ml-3 text-gray-700 relative before:absolute before:h-[1px] before:w-6 before:content-[''] before:bg-[#00acee] before:right-[-2px] before:top-[-4px] after:absolute after:h-[0px] after:w-6 after:content-[''] after:bg-[#00acee] after:right-[-2px] after:bottom-[-4px] hover:after:h-[2px]  hover:text-[#00acee] hover:before:w-0 "
                                    >
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="socials ml-3 text-gray-700 relative before:absolute before:h-[1px] before:w-6 before:content-[''] before:bg-[#25d366] before:right-[-2px] before:top-[-4px] after:absolute after:h-[0px] after:w-6 after:content-[''] after:bg-[#25d366] after:right-[-2px] after:bottom-[-4px] hover:after:h-[2px]  hover:text-[#25d366] hover:before:w-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                    </span>
                                </div>
                                </div>
                            </div>
                            ))
                        }
                        {/* <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201"/>
                            <div className="w-full">
                                <h2 className="title-font font-medium text-lg text-white">Holden Caulfield</h2>
                                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-flex">
                                <a className="text-gray-700">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-700">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-700">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                                </span>
                            </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202"/>
                            <div className="w-full">
                                <h2 className="title-font font-medium text-lg text-white">Atticus Finch</h2>
                                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-flex">
                                <a className="text-gray-700">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-700">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-700">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                                </span>
                            </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203"/>
                            <div className="w-full">
                                <h2 className="title-font font-medium text-lg text-white">Henry Letham</h2>
                                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-flex">
                                <a className="text-gray-700">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-700">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-700">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                                </span>
                            </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}


export default MemberCard