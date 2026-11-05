import { mySkills } from '#/data/skills'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function SkillsCard() {
  return (
    <div className="h-full bg-bg-light flex-1 lg:flex-5 p-2 sm:p-4 rounded-[20px] flex flex-col gap-3 sm:gap-4 overflow-hidden overflow-y-auto">
      {/* heading */}
      <div className="flex items-center sm:gap-3 flex-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          className="scale-70 sm:scale-80"
        >
          <path
            d="M6.89 9c.98.49 1.82 1.23 2.43 2.15.35.52.35 1.19 0 1.71-.61.91-1.45 1.65-2.43 2.14M13 15h4"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="stroke-text"
          ></path>
          <path
            d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="stroke-text"
          ></path>
        </svg>
        <span className="krona text-text-muted text-xs sm:text-sm">SKILLS</span>
      </div>
      <Carousel
        className="w-full sm:w-9/10 max-w-200 self-center flex-1"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {mySkills.map((skill, index) => (
            <CarouselItem key={index}>
              <div className="p-0 sm:p-1">
                <Card className="h-[40svh] max-h-75 min-h-70 sm:h-100 p-3 gap-2 sm:gap-6">
                  <CardHeader className="p-0 sm:px-5">
                    <CardTitle className="krona text-text text-sm sm:text-lg">
                      {skill.cat}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3 sm:gap-6 p-0 sm:px-5 manrope text-text-muted font-bold flex-1 text-sm sm:text-md">
                    {skill.sks.map((item, index) => (
                      <div key={index} className="flex flex-col gap-2 w-full">
                        <span>{item.name}</span>
                        <div className="p-1 sm:p-1.5 bg-muted w-full max-w-77 sm:w-77 rounded-xl flex gap-1">
                          {Array.from({ length: Number(item.val) }).map(
                            (_, id) => (
                              <div
                                key={id}
                                className="flex-1 h-2 sm:h-3 bg-purple-400 rounded-md"
                              />
                            ),
                          )}
                          {Array.from({ length: 5 - Number(item.val) }).map(
                            (_, id) => (
                              <div
                                key={id}
                                className="flex-1 h-2 sm:h-3 bg-gray-400 rounded-md"
                              />
                            ),
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="-left-8" /> */}
        {/* <CarouselNext className="-right-8" /> */}
      </Carousel>
    </div>
  )
}

export function SkillsSection() {
  return (
    <div className="max-w-80/100 p-2 grid gap-2 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      {mySkills.map((skill, idx) => (
        <Card key={idx} className="h-60 p-1.5 gap-2">
          <CardHeader className="px-4">
            <CardDescription className='manrope font-semibold text-text-muted'>{skill.cat}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 p-0 sm:px-5 manrope text-text-muted font-bold flex-1 text-sm sm:text-md">
            {skill.sks.map((item, index) => (
              <div key={index} className="flex flex-col gap-0.5 w-full">
                <span>{item.name}</span>
                <div className="p-[3px] bg-muted w-55 rounded-xl flex gap-1">
                  {Array.from({ length: Number(item.val) }).map((_, id) => (
                    <div
                      key={id}
                      className="flex-1 h-1.5 bg-purple-400 rounded-md"
                    />
                  ))}
                  {Array.from({ length: 5 - Number(item.val) }).map((_, id) => (
                    <div
                      key={id}
                      className="flex-1 h-1.5 bg-gray-400 rounded-md"
                    />
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
