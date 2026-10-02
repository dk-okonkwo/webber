import { Button } from '#/components/ui/button'
import { MyProjects } from '#/data/projects'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-5 overflow-hidden overflow-y-auto p-4 pb-6 md:px-40 mx-auto md:mt-4 md:gap-19">
      {MyProjects.map((project, i) => (
        <div
          key={i}
          className={`flex flex-col w-full ${i % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-7`}
        >
          <img
            src={project.img}
            alt="project image"
            className="w-full max-w-80 self-center aspect-square md:w-3/7 md:max-w-120  md:aspect-video object-cover rounded-4xl md:rounded-xl"
          />
          <div className="flex flex-col w-full md:gap-1">
            <span className="mt-3 manrope font-bold text-text md:text-[24px]">
              {project.name}
            </span>
            <div className="flex items-center gap-2">
              {project.tags.map((tag, id) => (
                <div key={id} className="px-3 rounded-xl bg-bg-dark border border-blue-800">
                  <span className="text-sm italic">{tag}</span>
                </div>
              ))}
            </div>

            <span className="mt-1 manrope text-text-muted text-sm">
              {project.description}
            </span>

            {project.link && (
              <a href={project.link} target="blank" className="mt-3 w-fit">
                <Button className="w-fit manrope bg-bg-light text-text">
                  Learn More
                  <ArrowRight/>
                </Button>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
