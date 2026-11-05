import { Github, Instagram, Linkedin, LucideLinkedin } from 'lucide-react'
import head from '../assets/images/IMG_1480.jpg'
import gem from '../assets/images/gem-img.jpeg'
import * as motion from 'motion/react-client'
import SocialBar from './social-bar'

export default function ProfileCard() {
  return (
    <div className="h-fit bg-bg-light md:h-full lg:flex-3 rounded-[20px] flex flex-col flex-row gap-[1vw] sm:gap-0 md:flex-col sm:items-center justify-center p-2 sm:p-4 sm:py-5 md:max-w-80 lg:max-w-110 overflow-y-auto">
      <div className="flex flex-col item-center gap-2 w-full">
        <img
          src={gem}
          alt="my photo"
          className="aspect-square w-40 sm:w-[90%] sm:max-w-45 md:w-55 bg-bg rounded-full"
        />
        <span className="flex sm:hidden text-[14px] krona text-text text-center">
          David Okonkwo
        </span>
        <div className="flex sm:hidden items-center justify-between text-text mt-2 gap-1">
          <a href="" className="w-fit p-2 rounded-md hover:bg-bg-dark bg-bg">
            <Github className="size-5" />
          </a>
          <a href="" className="w-fit p-2 rounded-md hover:bg-bg-dark bg-bg">
            <LucideLinkedin className="size-5" />
          </a>
          <a href="" className="w-fit p-2 rounded-md hover:bg-bg-dark bg-bg">
            <Instagram className="size-5" />
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:items-center">
        <span className="hidden sm:flex text-xl md:text-[20px] krona text-text m-5 mb-1 ml-0 sm:ml-5">
          David Okonkwo
        </span>
        <span className="text-center m-2 mt-2 ml-0 sm:ml-2 text-text-muted manrope text-sm lg:text-[1rem] italic">
          I am a software engineer who thrives on solving problems — building
          applications, prototyping embedded systems, and turning
          hardware-software ideas into working solutions.
        </span>
        <div className="hidden sm:flex items-center justify-between text-text w-3/5 mt-5">
          <a href="" className="w-fit p-2 rounded-md hover:bg-bg-dark bg-bg">
            <Github />
          </a>
          <a href="" className="w-fit p-2 rounded-md hover:bg-bg-dark bg-bg">
            <LucideLinkedin />
          </a>
          <a href="" className="w-fit p-2 rounded-md hover:bg-bg-dark bg-bg">
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  )
}

export function NewProfileCard() {
  return (
    <div className="flex flex-col items-center gap-3 max-w-90">
      {/* Image and Name */}
      <div className="relative p-2">
        <img
          src={head}
          alt="headshot"
          className="w-50 aspect-square rounded-full border-5 border-bg-light object-cover"
        />
        <motion.span
          className="manrope font-bold p-1 px-3 bg-bg-light rounded-3xl absolute -right-25 bottom-25"
          animate={{ rotate: -30 }}
          transition={{ duration: 1 }}
        >
          David Okonkwo 😁
        </motion.span>
      </div>
      {/* Description */}
      <h1 className="text-3xl manrope font-semibold text-text text-center">
        Building solutions, one line of code at a time.
      </h1>
      {/* Social Links */}
      <SocialBar />
    </div>
  )
}
