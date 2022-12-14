import Atropos from 'atropos/react';
import {
    HomeBody,
    MainContent,
    DescriptionContent,
    Title,
    Description,
    LaunchReactContent
} from './style'
import {
    ImageBtn,
    TransparentBtn
} from '../style'
import { useNavigate } from 'react-router-dom';


export default function Homepage() {
    const navigate = useNavigate();
    return (
        <HomeBody>
            <img src='assets/home-bg.png' alt='Homepage background' className='bg-container' />
            <img src='assets/home-footer-bg.png' alt='Homepage background' className='absolute -bottom-[100px] sm:-bottom-[150px] lg:-bottom-[250px] home-footer-bg' />
            <MainContent>
                <div className='flex flex-col-reverse lg:flex-row items-center mt-10 w-full'>
                    <div className='mt-20'>
                        <div className='text-center lg:text-start text-4xl md:text-6xl lg:text-5xl xl:text-[60px] 2xl:text-[80px] font-["Nippo"] font-bold xl:leading-[70px] 2xl:leading-[100px]'>FUTURE <span className='text-[#A2DDFE]'>MULTI-PROJECT</span> NFT UTILITY</div>
                        <div className='text-center lg:text-start text-base sm:text-xl md:text-2xl xl:text-[20px] 2xl:text-[25px]'>Welcome  to the Solmine! </div>
                        <div className='text-center lg:text-start text-base sm:text-xl md:text-2xl xl:text-[20px] 2xl:text-[25px]'>Solana’s  First P2E NFT Staking Miner.</div>
                        <div className='flex items-end 2xl:items-center justify-center lg:justify-start mt-4 lg:mt-0'>
                            <ImageBtn onClick={() => navigate(`/launch`)}>Launch</ImageBtn>
                            <TransparentBtn onClick={() => navigate(`/mint`)}>Mint</TransparentBtn>
                        </div>
                    </div>
                    <div>
                        <Atropos shadow={false} highlight={false} className="w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] 2xl:w-[550px] 2xl:h-[550px] relative">
                            <img
                                src='assets/atropos-1.png'
                                data-atropos-offset="-10"
                                alt=''
                                draggable={false}
                                className='absolute'
                            />
                            <img
                                src='assets/atropos-2.png'
                                data-atropos-offset="-4"
                                alt=''
                                draggable={false}
                                className='absolute w-[120px] sm:w-[140px] xl:w-[160px] 2xl:w-[180px] top-16 left-10'
                            />
                            <img
                                src='assets/atropos-3.png'
                                data-atropos-offset="4"
                                alt=''
                                draggable={false}
                                className='absolute -right-6 w-[270px] sm:w-[300px] xl:w-[350px] 2xl:w-[400px]'
                            />
                            <img
                                src='assets/atropos-4.png'
                                data-atropos-offset="10"
                                alt=''
                                draggable={false}
                                className='absolute bottom-20 sm:bottom-32 left-2 w-[300px] sm:w-[380px] lg:w-[400px] 2xl:w-[550px]'
                            />
                        </Atropos>
                    </div>
                </div>
            </MainContent>
            <img src='assets/mint-divider.png' alt='Mintpage Divider' className='my-20 shadow-lg w-[200px] sm:w-[400px] 2xl:w-auto' draggable={false} />
            <DescriptionContent>
                <div>
                    <Title>What is the Solmine?</Title>
                    <Description>As the first ever ROI Miner Model to land on Solana, the Solmine offers its brave explorers an opportunity like none other! Going from planet to planet, exploratory missions never stop while in search of a rare mineral awaiting excavation! How far will mankind go? Unknown worlds and riches beyond comprehension. Are you ready?</Description>
                </div>
                <div className='flex flex-col sm:flex-row items-center mt-10 lg:mt-auto'>
                    <img src='assets/mint-section-art.png' alt='Description left' draggable={false} className="-ml-36 -mr-10 lg:-mr-20 w-[400px] 2xl:w-auto" />
                    <div>
                        <Title>How does it work?</Title>
                        <Description>As the first ever ROI Miner Model to land on Solana, the Solmine offers its brave explorers an opportunity like none other! Going from planet to planet, exploratory missions never stop while in search of a rare mineral awaiting excavation! How far will mankind go? Unknown worlds and riches beyond comprehension. Are you ready?</Description>
                    </div>
                </div>
                <div className='relative mt-10 lg:mt-auto'>
                    <img src='assets/home-description-bg-2.png' alt='Description right spaceship' draggable={false} className="relative sm:absolute right-0 sm:-right-28 top-0 sm:-top-10 lg:-top-20 2xl:-top-32 w-[180px] lg:w-[220px] 2xl:w-[250px] z-0" />
                    <Title>Are NFTs implemented?</Title>
                    <Description>As it stands, the Solmine is unique in its own right. But, why stop there? To gamify Solmine, there’s an option to add to your crew in order to mine more effectively and efficiently. Mint more astronauts to help you on your journey. On rare occasion, perhaps UFO’s and Aliens may come to assist, with their highly advanced technology. Anything is possible, I mean, did humans Really build the Great Pyramids of Giza?</Description>
                </div>
                <ImageBtn className='mt-12' onClick={() => navigate(`/mint`)}>Mint</ImageBtn>
                <img src='assets/mint-divider.png' alt='Mintpage Divider' className='my-10 sm:my-20 shadow-lg w-[200px] sm:w-[400px] 2xl:w-auto' draggable={false} />
            </DescriptionContent>
            <LaunchReactContent>
                <Title>Are you ready to launch?</Title>
                <ImageBtn className='mt-5' onClick={() => navigate(`/launch`)}>Launch</ImageBtn>
                <div className='blend-effect-tiny sm:blend-effect-big -top-12 -right-12 sm:-top-[45px] sm:-right-[45px]' />
                <div className='blend-effect-tiny sm:blend-effect-big -bottom-12 -right-12 sm:-bottom-[35px] sm:-right-[35px]' />
                <div className='blend-effect-tiny sm:blend-effect-small -top-12 -left-12 sm:-top-[30px] sm:-left-[30px]' />
                <div className='blend-effect-tiny sm:blend-effect-small -bottom-12 -left-12 sm:-bottom-[30px] sm:-left-[30px]' />
                <div className='blend-effect-tiny-top sm:blend-effect-top top-0 2xl:top-2' />
                <div className='blend-effect-tiny-top sm:blend-effect-top bottom-2 2xl:bottom-5' />
            </LaunchReactContent>
        </HomeBody>
    )
}