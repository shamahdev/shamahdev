import { Carousel } from "@/common/components/Carousel";
import { Container } from "@/common/components/Container";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen px-8 flex-col items-center bg-gradient-to-b from-[#131313] to-neutral-950">
      <Container>
        <div className="w-full flex flex-col gap-24">
          <div className="flex flex-col gap-16 pt-12">
            <Image
              src="/images/shamahdev.png"
              alt="Shaddam Amru Hasibuan"
              width={32}
              height={32}
            />
            <div className="flex flex-col py-8 gap-2">
              <h1 className="text-[42px] text-neutral-100 font-bold">
                Shaddam Amru Hasibuan
              </h1>
              <p className="text-neutral-100 text-2xl font-secondary">
                Frontend Product Engineer{" "}
                <span className="text-neutral-400">— based in Indonesia</span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-neutral-100">
                about me
              </h2>
              <p className="text-neutral-400 max-w-3xl leading-loose">
                Hey, my name is Shaddam 👋, also known as Shamah. I love
                building innovative products and learn new tech. I also enjoy
                volunteering as a speaker, facilitator, and project mentor to
                help others grow in their careers.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 w-full min-h-[450px]">
            <div className="bg-neutral-950 border border-neutral-900 rounded-3xl py-6 px-8 flex flex-col justify-between w-full">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-neutral-100">frontend ✨</h3>
                <p className="text-sm text-neutral-400 leading-loose">
                  Frontend development is my specialty and expertise.
                  <br className="mb-4" />I have extensive professional
                  experience and can effectively function as a lead, work with a
                  team, or even operate independently to deliver results
                  quickly.
                </p>
              </div>
            </div>
            <div className="bg-neutral-950 border border-neutral-900 rounded-3xl py-6 px-8 flex flex-col justify-between w-full">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-neutral-100">ui ux</h3>
                <p className="text-sm text-neutral-400 leading-loose">
                  As i&apos;m passionated at building products, i&apos;m having
                  a decent experience and knowledge with UI & UX Design.
                </p>
                <Link
                  href="#"
                  className="text-sm text-neutral-100 underline flex gap-1 items-center"
                >
                  <ExternalLinkIcon width={16} />
                  behance
                </Link>
                <Link
                  href="#"
                  className="text-sm text-neutral-100 underline flex gap-1 items-center"
                >
                  <ExternalLinkIcon width={16} />
                  dribbble
                </Link>
              </div>
            </div>
            <div className="bg-neutral-950 border border-neutral-900 rounded-3xl py-6 px-8 flex flex-col justify-between w-full">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-neutral-100">vr/ar</h3>
                <p className="text-sm text-neutral-400 leading-loose">
                  On my early career from 2019, I often do side hustling and
                  working on project as a freelance for companies. Im used to
                  work with Unity, Vuforia and Spark AR.
                  <br className="mb-4" />
                  Companies i&apos;ve been work with:
                </p>
              </div>
              <div className="flex flex-wrap w-full gap-4">
                <Image
                  src="/images/ar-nestle.png"
                  alt="Nestle"
                  width={63.5}
                  height={40}
                />
                <Image
                  src="/images/ar-sentral.png"
                  alt="Sentral Tunjungan"
                  width={66.5}
                  height={40}
                />
                <Image
                  src="/images/ar-wyeth.png"
                  alt="Wyeth Nutrition"
                  width={135}
                  height={40}
                />
              </div>
            </div>
            <div className="bg-neutral-100 rounded-3xl py-6 px-8 flex flex-col justify-between w-full">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-neutral-950">brand design</h3>
                <p className="text-sm text-neutral-700 leading-loose">
                  I&apos;ve designed 20+ logo & brand for companies around the
                  world, 3 full brand identity client from logo to stationery
                  and social media design.
                  <br className="mb-4" />
                  Featured brand logo i&apos;ve made:
                </p>
              </div>
              <div className="flex flex-wrap w-full gap-4">
                <Image
                  src="/images/brand-smeshub.png"
                  alt="Smeshub"
                  width={85.5}
                  height={40}
                />
                <Image
                  src="/images/brand-mantenkuh.png"
                  alt="Mantenkuh"
                  width={106}
                  height={40}
                />
                <Image
                  src="/images/brand-siomay.png"
                  alt="Somay Lonjong"
                  width={58.5}
                  height={40}
                />
                <Image
                  src="/images/brand-printingmart.png"
                  alt="printingmart"
                  width={114.5}
                  height={40}
                />
                <Image
                  src="/images/brand-artire.png"
                  alt="Smeshub"
                  width={70}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-neutral-100">
              selected projects
            </h2>
            <Carousel />
          </div>
        </div>
      </Container>
      <div className="relative overflow-hidden mt-24 whitespace-nowrap opacity-5 select-none">
        <div className="w-full flex gap-8 items-center animate-marquee">
          <p className="font-bold text-[96px] text-neutral-100 ml-8">
            SAY HELLO!
          </p>
          <p className="text-[96px] text-neutral-100">ハイって言って!!</p>
          <p className="font-bold text-[96px] text-neutral-100">
            GET IN TOUCH!
          </p>
          <p className="text-[96px] text-neutral-100">ハイって言って!!</p>
        </div>
        <div className="absolute top-0 w-full flex gap-8 items-center animate-marquee-end">
          <p className="font-bold text-[96px] text-neutral-100 ml-8">
            SAY HELLO!
          </p>
          <p className="text-[96px] text-neutral-100">ハイって言って!!</p>
          <p className="font-bold text-[96px] text-neutral-100">
            GET IN TOUCH!
          </p>
          <p className="text-[96px] text-neutral-100">ハイって言って!!</p>
        </div>
      </div>
      <Container>
        <footer className="w-full flex flex-col gap-4 py-12">
          <p className="font-bold text-xl text-neutral-100">hello@shamah.dev</p>
          <p className="text-sm text-neutral-400 leading-loose max-w-3xl">
            Open for new opportunity and project-based works, Feel free to inbox
            me whether you have a question or just want to say hi!
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-neutral-100 underline flex gap-1 items-center"
            >
              <ExternalLinkIcon width={16} />
              linkedin
            </Link>
            <Link
              href="#"
              className="text-sm text-neutral-100 underline flex gap-1 items-center"
            >
              <ExternalLinkIcon width={16} />
              github
            </Link>
            <Link
              href="#"
              className="text-sm text-neutral-100 underline flex gap-1 items-center"
            >
              <ExternalLinkIcon width={16} />x
            </Link>
          </div>
        </footer>
      </Container>
    </main>
  );
}
