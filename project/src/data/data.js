import {FiGrid} from 'react-icons/fi'
import {BsPersonLinesFill} from 'react-icons/bs'
import {SiNounproject} from 'react-icons/si'
import {RiContactsLine} from 'react-icons/ri'
import {GrGithub} from 'react-icons/gr'
import {MdEmail} from 'react-icons/md'
const introText = "Hi!,| I'm |Nguyen Thanh Dat|,| a third-year IT major at the| Ho Chi Minh City University of Transport"

const sidebarMenu = [
    {
        text: 'Home',
        icon: <FiGrid className='link-icon'/>,
        url: '/'
    },
    {
        text: 'About',
        icon: <BsPersonLinesFill className='link-icon'/>,
        url: 'about'
    },
    {
        text: 'Project',
        icon: <SiNounproject className='link-icon'/>,
        url: 'projects'
    },
    {
        text: 'Contact',
        icon: <RiContactsLine className='link-icon'/>,
        url: 'contact'
    },
]

const socialIcons = [
    {
        icon: <GrGithub className='icon'/>,
        url: 'https://github.com/joi-lightyears'
    },
    {
        icon: <MdEmail className='icon'/>,
        url: 'mailto:nguyenthanhdat1412joitaro@gmail.com'
    },
]
export {sidebarMenu, socialIcons, introText}