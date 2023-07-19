import Image from 'next/image'
import Container from './components/Container'

const techstacks = [
  {
    name: "Next.js",
    logo: "/logo/next.png"
  },
  {
    name: "React.js",
    logo: "/logo/react.png"
  },
  {
    name: "Tailwind",
    logo: "/logo/tailwind.png"
  },
  {
    name: "SASS",
    logo: "/logo/sass.png"
  },
  {
    name: "Webpack",
    logo: "/logo/webpack.png"
  },
  {
    name: "PWA",
    logo: "/logo/pwa.png"
  }
]


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Container>
        <div className='flex flex-col gap-12 pt-12 pb-8'>
          <Image src="/shamahdev.png" width={32} height={32} alt='Shaddam Amru Hasibuan' />
          <div className='flex flex-col py-8 gap-12'>
            <div className='flex flex-col gap-2 max-w-[950px]'>
              <p className='text-neutral-20 text-xl/[140%]'>Hi, my name is Shaddam,</p>
              <h1 className='text-neutral-10 text-[42px]/[56px] font-bold'>A Frontend Maestro and a self-proclaimed lifelong leaner 🇮🇩</h1>
            </div>
            <div className='flex flex-col gap-2.5'>
              <p className='text-neutral-20 text-base/7'>Technologies I&apos;ve been working with</p>
              <div className='flex gap-4 items-center'>
                {techstacks.map((tech) => <Image className='object-contain' key={tech.name} width={20} height={24} src={tech.logo} alt={tech.name} />)}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
