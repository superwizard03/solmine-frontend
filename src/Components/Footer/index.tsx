import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Modal } from 'react-responsive-modal';
import { FooterLink } from '../Constant'
import {
    FooterBody,
    FooterContent
} from './style'
import { ImageBtn } from '../style';

export default function Footer() {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const closeIcon = (
        <Icon icon="ci:off-outline-close" width="25" height="25" color='#B9E1F8' />
    )
    return (
        <FooterBody>
            <FooterContent>
                <div>
                    <img src='assets/footer-logo.png' alt='footer logo' className='w-[200px] lg:w-auto' />
                    <div className='text-[#BFBFBF] text-sm lg:text-[15px] font-["Satoshi"]'>Solana’s First P2E NFT Staking Miner.</div>
                </div>
                <div className='flex justify-start sm:justify-center mt-10 sm:mt-0'>
                    <div>
                        <div className='text-lg xl:text-xl font-["Satoshi"] text-white font-bold'>LINKS</div>
                        <button className='text-base xl:text-lg font-["Satoshi"] text-[#BFBFBF] mt-[10px] underline-effect hover:text-white' onClick={() => onOpenModal()}>Contact Us</button>
                    </div>
                </div>
                <div className='flex justify-start md:justify-end mt-10 sm:mt-0'>
                    <div>
                        <div className='text-lg xl:text-xl font-["Satoshi"] text-white font-bold'>FOLLOW US</div>
                        <div className='flex items-center gap-4 mt-3'>
                            {FooterLink.map((footer, i) => {
                                return (
                                    <a href={`${footer.link}`} key={i}>
                                        <img src={`assets/${footer.name}.png`} alt={footer.name} className="cursor-pointer w-[30px] lg:w-[35px] h-[30px] lg:h-[35px]" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </FooterContent>
            <div className='text-[#898787] text-sm lg:text-[15px] w-full text-center py-[10px]'>Copyright © 2022 Solmine Project. All rights reserved.</div>
            <Modal
                open={open}
                onClose={onCloseModal}
                classNames={{
                    modal: 'w-[340px] sm:w-[500px] rounded-xl footer-modal'
                }}
                closeIcon={closeIcon}
                center
            >
                <div className='flex flex-col items-center w-full overflow-hidden relative p-4 pt-7 gap-4'>
                    <div className='w-full border border-[#1CA7F5] flex justify-between items-center px-3'>
                        <input type="text" id="name" className="bg-transparent text-white text-lg focus:ring-blue-500 focus:border-blue-500 block font-['Nippo-light'] placeholder:text-[#5DA9D6] py-2 outline-none" placeholder="Name" required />
                        <Icon icon="carbon:user" color="#27a0e5" width="24" height="24" />
                    </div>
                    <div className='w-full border border-[#1CA7F5] flex justify-between items-center px-3'>
                        <input type="text" id="phone" className="bg-transparent text-white text-lg focus:ring-blue-500 focus:border-blue-500 block font-['Nippo-light'] placeholder:text-[#5DA9D6] py-2 outline-none" placeholder="Phone No" required />
                        <Icon icon="carbon:phone-voice" color="#27a0e5" width="24" height="24" />
                    </div>
                    <div className='w-full border border-[#1CA7F5] flex justify-between items-center px-3'>
                        <input type="text" id="email" className="bg-transparent text-white text-lg focus:ring-blue-500 focus:border-blue-500 block font-['Nippo-light'] placeholder:text-[#5DA9D6] py-2 outline-none" placeholder="Email" required />
                        <Icon icon="fluent:mail-20-regular" color="#27a0e5" width="24" height="24" />
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-white text-lg bg-transparent border border border-[#1CA7F5] font-['Nippo-light'] focus:ring-blue-500 focus:border-blue-500 outline-none placeholder:text-[#5DA9D6]" placeholder="Your message..." data-ms-editor="true" />
                    </div>
                    <ImageBtn>Send</ImageBtn>
                </div>
            </Modal>
        </FooterBody>
    )
}