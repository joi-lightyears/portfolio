import {FiGrid} from 'react-icons/fi'
import {BsPersonLinesFill} from 'react-icons/bs'
import {SiNounproject} from 'react-icons/si'
import {RiContactsLine} from 'react-icons/ri'
import {GrGithub} from 'react-icons/gr'
import {MdEmail} from 'react-icons/md'
import {TbWorld} from 'react-icons/tb'
import testImg from '../assets/images/joitaro.jpg'
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
const projects = [
    {
        id: 1,
        name: 'Translating Chat App',
        desc: "I created this project and It's called PDBB (my fellow friends' name: Phat Dat Bao Bao). This is a WebChat that supports multi language messaging. And It's pretty fun ^^",
        stack: 'ReactJS HTML SCSS JAVASCRIPT FIREBASE',
        gitHubUrl:{
            icon: <GrGithub className='icon'/>,
            url: 'https://github.com/joi-lightyears/chatReactFirebase',
        },
        website:{
            icon: <TbWorld className='icon'/>,
            url: 'https://pdbbchat.vercel.app/login',
        },
        imgURL: testImg,
    },
    {
        id: 2,
        name: 'Translating Chat App',
        desc: "I created this project and It's called PDBB (my fellow friends' name: Phat Dat Bao Bao). This is a WebChat that supports multi language messaging. And It's pretty fun ^^",
        stack: 'ReactJS HTML SCSS JAVASCRIPT FIREBASE',
        gitHubUrl:{
            icon: <GrGithub className='icon'/>,
            url: 'https://github.com/joi-lightyears/chatReactFirebase',
        },
        website:{
            icon: <TbWorld className='icon'/>,
            url: 'https://pdbbchat.vercel.app/login',
        },
        imgURL: testImg,
    },
    {
        id: 3,
        name: 'Translating Chat App',
        desc: "I created this project and It's called PDBB (my fellow friends' name: Phat Dat Bao Bao). This is a WebChat that supports multi language messaging. And It's pretty fun ^^",
        stack: 'ReactJS HTML SCSS JAVASCRIPT FIREBASE',
        gitHubUrl:{
            icon: <GrGithub className='icon'/>,
            url: 'https://github.com/joi-lightyears/chatReactFirebase',
        },
        website:{
            icon: <TbWorld className='icon'/>,
            url: 'https://pdbbchat.vercel.app/login',
        },
        imgURL: testImg,
    },
    {
        id: 4,
        name: 'Translating Chat App',
        desc: "I created this project and It's called PDBB (my fellow friends' name: Phat Dat Bao Bao). This is a WebChat that supports multi language messaging. And It's pretty fun ^^",
        stack: 'ReactJS HTML SCSS JAVASCRIPT FIREBASE',
        gitHubUrl:{
            icon: <GrGithub className='icon'/>,
            url: 'https://github.com/joi-lightyears/chatReactFirebase',
        },
        website:{
            icon: <TbWorld className='icon'/>,
            url: 'https://pdbbchat.vercel.app/login',
        },
        imgURL: testImg,
    },
]


export {sidebarMenu, socialIcons, introText, projects}