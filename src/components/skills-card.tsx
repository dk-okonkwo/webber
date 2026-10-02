import { mySkills } from '#/data/skills'

export default function SkillsCard() {
  return (
    <div className="h-full bg-bg-light flex-1 lg:flex-5 p-4 rounded-[20px] flex flex-col gap-4 overflow-hidden overflow-y-auto">
      {/* heading */}
      <div className="flex items-center gap-3 flex-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          className="scale-80"
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
        <span className="krona text-text-muted text-sm">SKILLS</span>
      </div>

      <div className="flex items-center gap-3 p-2 px-3 rounded-[50px] bg-bg-dark">
        {mySkills.map((sk, i) => (
          <div key={i} className="flex-1 bg-pink-300 text-center">
            <span className="text-sm">{sk.cat}</span>
          </div>
        ))}
      </div>

      <div className="grid gap-5 w-full grid-cols-[repeat(auto-fit,minmax(160px,1fr))] auto-rows-[160px] ">
        <div className="bg-pink-400 flex-1 rounded-xl"></div>
        <div className="bg-pink-400 flex-1 rounded-xl"></div>
        <div className="bg-pink-400 flex-1 rounded-xl"></div>
        <div className="bg-pink-400 flex-1 rounded-xl"></div>
      </div>

      {/* <div className="w-full min-h-30 flex items-center gap-2">
        <div className="flex-1 h-full bg-gray-600/50 rounded-md">fjis</div>
        <div className="flex-1 h-full bg-gray-600/50 rounded-md">fjis</div>
        <div className="flex-1 h-full bg-gray-600/50 rounded-md">fjis</div>
        <div className="flex-1 h-full bg-gray-600/50 rounded-md">fjis</div>
      </div>

      <div className="flex flex-col gap-4">
        {mySkills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-gray-600/50 p-2 rounded-md flex flex-col gap-2"
          >
            <span className="text-text krona text-xs">{skill.cat}</span>
            <div className="gap-2 flex flex-col">
              {skill.sks.map((sk, idx) => (
                <div
                  key={idx}
                  className="flex flex-row items-center justify-between"
                >
                  <span className="manrope text-xs text-text-muted font-bold">
                    {sk.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}
