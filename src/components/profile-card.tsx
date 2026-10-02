import { Github, Instagram, Linkedin, LucideLinkedin } from 'lucide-react'
import head from '../assets/images/IMG_1480.jpg'

export default function ProfileCard() {
  return (
    <div className="h-fit bg-bg-light md:h-full lg:flex-3 rounded-[20px] flex flex-col sm:flex-row md:flex-col items-center justify-center p-4 py-5 md:max-w-80 lg:max-w-110 overflow-y-auto">
      <img
        src={head}
        alt="my photo"
        className=" aspect-square w-40 sm:w-[90%] sm:max-w-45 md:w-55 bg-bg rounded-full"
      />
      <div className="flex flex-col items-center">
        <span className="text-xl md:text-[20px] krona text-text m-5 mb-1">
          David Okonkwo
        </span>
        <span className="text-center m-2 mt-2 text-text-muted manrope text-sm lg:text-[1rem] italic">
          I am a software engineer who thrives on solving problems — building
          applications, prototyping embedded systems, and turning
          hardware-software ideas into working solutions.
        </span>
        <div className="flex items-center justify-between text-text w-3/5 mt-5">
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
