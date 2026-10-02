import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
// import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
// import { TanStackDevtools } from '@tanstack/react-devtools'
// import Footer from '../components/Footer'
import Header, { NavMenu } from '../components/Header'
import ThemeToggle from '../components/ThemeToggle'

import appCss from '../styles.css?url'
import { useWindowSize } from '#/utils/UI-functions'
import { useEffect, useState } from 'react'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'size.width=device-size.width, initial-scale=1',
      },
      {
        title: "Charlotte's Web"
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Krona+One&family=Manrope:wght@200..800&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const [midpoint, setMidpoint] = useState(220)
  const size = useWindowSize()

  useEffect(() => {
    if (size) {
      setMidpoint(size.width < 1064 ? 190 : 220)
    }
  }, [size])

  const gap = 50
  const wEnd = size ? size?.width - gap : 0
  const hEnd = size ? size?.height - gap : 0
  const vBox = size ? `0 0 ${wEnd} ${hEnd}` : undefined
  const w1 = wEnd / 2 - midpoint
  const w2 = wEnd / 2 + midpoint
  const h1 = 52
  const radius = 20

  const path =
    size &&
    `
        M ${gap},0
        L ${w1 - radius},0
        Q ${w1},0 ${w1},${radius}
        L ${w1},${h1 - radius}
        Q ${w1},${h1} ${w1 + radius},${h1}
        L ${w2 - radius},${h1}
        Q ${w2},${h1} ${w2},${h1 - radius}
        L ${w2},${radius}
        Q ${w2},0 ${w2 + radius},0
        L ${size.width - gap * 2},0
        Q ${wEnd},0 ${wEnd},${gap}
        L ${wEnd},${size.height - gap * 2}
        Q ${wEnd},${hEnd} ${size.width - gap * 2},${hEnd}
        L ${gap},${hEnd}
        Q 0,${hEnd} 0,${size.height - gap * 2}
        L 0,${gap}
        Q 0,0 ${gap},0
        Z
        `

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body
        className="antialiased wrap-anywhere selection:bg-[rgba(79,184,178,0.24)] bg-bg-dark overflow-hidden h-svh w-vw flex items-center justify-center relative"
        suppressHydrationWarning={true}
      >
        <NavMenu />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[calc(100svh-50px)] w-[calc(100vw-50px)] pointer-events-none p-0! hidden absolute sm:flex"
          viewBox={vBox}
          fill="none"
        >
          <path d={path ? path : undefined} className="fill-bg" />
        </svg>

        {/* Shell */}
        <div className="w-[calc(100vw-30px)] h-[calc(100svh-60px)] mt-auto sm:w-[calc(100vw-50px)] sm:mt-0 sm:h-[calc(100svh-50px)] rounded-[20px] sm:rounded-[30px] md:rounded-[50px] bg-bg sm:bg-bg/0 sm:p-8 lg:p-12 relative flex">
          <ThemeToggle />
          {children}
        </div>

        {/* <Header /> */}
        <Scripts />
      </body>
    </html>
  )
}
