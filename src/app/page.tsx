"use client";

import { Carousel } from "@/common/components/Carousel";
import { Container } from "@/common/components/Container";
import { Hero } from "@/common/components/Hero";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Hero className="flex min-h-screen px-8 flex-col items-center ">
      <Container>
        <div className="w-full flex flex-col gap-24">
          <div className="flex flex-col gap-16 pt-12">
            <Image
              src="/images/shamahdev.png"
              alt="Shaddam Amru Hasibuan"
              width={32}
              height={32}
              priority
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
              <Link
                href="https://drive.google.com/file/d/10Yk92mfvdn_AENTbfsdsZFRPdEx3TS3f/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
                className="text-neutral-100 border border-neutral-100 py-2 px-3 flex w-fit rounded-md text-sm font-semibold items-center justify-center hover:brightness-75 transition-[filter]"
              >
                get a copy of my resume
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 w-full min-h-[450px]">
            <div className="bg-black/15 backdrop-blur border border-neutral-900 rounded-xl py-6 px-8 flex flex-col justify-between w-full">
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
            <div className="bg-black/15 backdrop-blur border border-neutral-900 rounded-xl py-6 px-8 flex flex-col justify-between w-full">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-neutral-100">ui ux</h3>
                <p className="text-sm text-neutral-400 leading-loose">
                  As i&apos;m passionated at building products, i&apos;m having
                  a decent experience and knowledge with UI & UX Design.
                </p>
                <Link
                  href="https://dribbble.com/shamahdotdev"
                  className="text-sm text-neutral-100 underline flex gap-1 items-center"
                >
                  <ExternalLinkIcon width={16} />
                  behance
                </Link>
                <Link
                  href="https://www.behance.net/shamahdotdev"
                  className="text-sm text-neutral-100 underline flex gap-1 items-center"
                >
                  <ExternalLinkIcon width={16} />
                  dribbble
                </Link>
              </div>
            </div>
            <div className="bg-black/15 backdrop-blur border border-neutral-900 rounded-xl py-6 px-8 flex flex-col justify-between w-full">
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
                  priority
                />
                <Image
                  src="/images/ar-sentral.png"
                  alt="Sentral Tunjungan"
                  width={66.5}
                  height={40}
                  priority
                />
                <Image
                  src="/images/ar-wyeth.png"
                  alt="Wyeth Nutrition"
                  width={135}
                  height={40}
                  priority
                />
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur rounded-xl py-6 px-8 flex flex-col justify-between w-full">
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
                  priority
                />
                <Image
                  src="/images/brand-mantenkuh.png"
                  alt="Mantenkuh"
                  width={106}
                  height={40}
                  priority
                />
                <Image
                  src="/images/brand-siomay.png"
                  alt="Somay Lonjong"
                  width={58.5}
                  height={40}
                  priority
                />
                <Image
                  src="/images/brand-printingmart.png"
                  alt="printingmart"
                  width={114.5}
                  height={40}
                  priority
                />
                <Image
                  src="/images/brand-artire.png"
                  alt="Smeshub"
                  width={70}
                  height={40}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-neutral-100">
              work experiences
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col gap-4 w-full">
                <div className="bg-black/15 backdrop-blur border border-neutral-900 rounded-xl py-6 px-8 flex flex-col justify-between w-full gap-8">
                  <Image
                    src="/images/work-salt.png"
                    alt="Salt Indonesia"
                    width={50}
                    height={24}
                    priority
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-neutral-100">
                      <b>salt</b> / 2023 - present
                    </h3>
                    <p className="text-sm text-neutral-400 leading-loose">
                      Brought on board for SALT new branch in Bandung as a mid
                      level front-end engineer.
                    </p>
                    <p className="text-sm text-neutral-400 leading-loose">
                      Worked using React.js for coding and take care of code
                      quality and deployment reliability by creating unit tests.
                      Trusted by companies to work as an outsource in renowned
                      companies like Telkomsel.
                    </p>
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur rounded-xl py-6 px-8 flex flex-col justify-between w-full gap-8">
                  <div className="flex gap-4 items-center">
                    <Image
                      src="/images/work-bdd.png"
                      alt="BDD"
                      width={50}
                      height={24}
                      priority
                    />
                    <Image
                      src="/images/work-kampusmerdeka.png"
                      alt="Kampus Merdeka x Dicoding"
                      width={130}
                      height={24}
                      priority
                    />
                    <Image
                      src="/images/work-studidevsecops.png"
                      alt="Studidevsecops"
                      width={90}
                      height={24}
                      priority
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-neutral-950">
                      <b>speaking & mentoring</b> / 2022 - present
                    </h3>
                    <p className="text-sm text-neutral-700 leading-loose">
                      I speak and facilitate workshop on several programs within
                      frontend and project management expertise in collaboration
                      with Dicoding.
                    </p>
                    <p className="text-sm text-neutral-700 leading-loose">
                      Assist in creating a workshop syllabus for frontend
                      development at Studidevsecops.
                    </p>
                  </div>
                </div>
                <div className="bg-[#15304E]/50 backdrop-blur rounded-xl py-6 px-8 flex flex-col justify-between w-full gap-8 relative overflow-hidden">
                  <Image
                    src="/images/work-dicoding.png"
                    alt="Dicoding"
                    width={100}
                    height={24}
                    priority
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-neutral-100">
                      <b>dicoding</b> / 2020 - present
                    </h3>
                    <p className="text-sm text-neutral-200 leading-loose">
                      As an External Code Reviewer, I have successfully provided
                      technical assistance and reviewed over 1200 project
                      submissions from students.
                    </p>
                    <p className="text-sm text-neutral-200 leading-loose">
                      I have helped many individuals graduate from
                      Dicoding&apos;s courses, earning high ratings from
                      satisfied students.
                    </p>
                  </div>
                  <span className="h-[240px]" />
                  <div className="flex w-full gap-2 absolute -bottom-8 -right-16">
                    <motion.div
                      initial={{ y: "50%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="w-[360px] h-[240px] relative">
                        <Image
                          src="/images/dicoding/cer-1.png"
                          alt="Dicoding Academy Reviewer Certificate 2020"
                          fill
                          priority
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ y: "80%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="w-[360px] h-[240px] relative">
                        <Image
                          src="/images/dicoding/cer-2.png"
                          alt="Dicoding Academy Reviewer Certificate 2021"
                          fill
                          priority
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-4">
                <div className="bg-[#E3571B]/90 backdrop-blur rounded-xl py-6 px-8 flex flex-col justify-between w-full gap-8 relative overflow-hidden">
                  <Image
                    src="/images/work-smeshub.png"
                    alt="Smeshub"
                    width={100}
                    height={24}
                    priority
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-neutral-100">
                      <b>smeshub</b> / 2021 - 2023
                    </h3>
                    <p className="text-sm text-neutral-200 leading-loose">
                      As the first engineering hired at Smeshub, I turned the
                      founder&apos;s vision into a user-friendly MVP through
                      full stack development.
                    </p>
                    <p className="text-sm text-neutral-200 leading-loose">
                      Later, after our team grew, I assigned as a Frontend
                      Engineer, I led a team and delivering high-quality
                      front-end solutions.
                    </p>
                  </div>
                  <span className="h-[400px]" />
                  <div className="flex w-full gap-2 absolute -bottom-16 left-0 right-0 items-end justify-center">
                    <motion.div
                      initial={{ y: 150 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="w-[300px] h-[300px] relative">
                        <Image
                          src="/images/smeshub/web-1.png"
                          alt=""
                          fill
                          priority
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ y: 100 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="w-[300px] h-[400px] relative">
                        <Image
                          src="/images/smeshub/web-2.png"
                          alt=""
                          fill
                          priority
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ y: 150 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="w-[300px] h-[300px] relative">
                        <Image
                          src="/images/smeshub/web-3.png"
                          alt=""
                          fill
                          priority
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="bg-black/15 backdrop-blur border border-neutral-900 rounded-xl py-6 px-8 flex flex-col justify-between w-full gap-8">
                  <Image
                    src="/images/work-linxt.png"
                    alt="Linxt Studio"
                    width={80}
                    height={24}
                    priority
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-neutral-100">
                      <b>linxt studio</b> / 2023 - present
                    </h3>
                    <p className="text-sm text-neutral-400 leading-loose">
                      I founded a developer studio with purpose of collaborating
                      on multiple web and application projects, as well as
                      creating open-source innovation.
                    </p>
                  </div>
                </div>
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

      <Container>
        <footer className="w-full flex flex-col gap-4 py-24">
          <p className="font-bold text-xl text-neutral-100">hello@shamah.dev</p>
          <p className="text-sm text-neutral-400 leading-loose max-w-3xl">
            Open for new opportunity and project-based works, Feel free to inbox
            me whether you have a question or just want to say hi!
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/shamahdev/"
              className="text-sm text-neutral-100 underline flex gap-1 items-center"
            >
              <ExternalLinkIcon width={16} />
              linkedin
            </Link>
            <Link
              href="https://github.com/shamahdev"
              className="text-sm text-neutral-100 underline flex gap-1 items-center"
            >
              <ExternalLinkIcon width={16} />
              github
            </Link>
            <Link
              href="https://x.com/shamahdev"
              className="text-sm text-neutral-100 underline flex gap-1 items-center"
            >
              <ExternalLinkIcon width={16} />x
            </Link>
          </div>
        </footer>
      </Container>
    </Hero>
  );
}
