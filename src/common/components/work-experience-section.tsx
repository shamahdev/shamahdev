"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WorkExperienceSection() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-neutral-100">work experiences</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="flex flex-col gap-4 w-full">
          <div className="bg-[#082243]/95 backdrop-blur rounded-xl py-6 px-8 flex flex-col justify-between w-full gap-8">
            <Image
              src="/images/work-airmas.jpg"
              alt="Airmas Group"
              width={60}
              height={60}
              priority
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-neutral-100">
                <b>airmas group</b> / 2025 - present
              </h3>
              <p className="text-sm text-neutral-400 leading-loose">
                As a Frontend Engineer, I built and launched a new user interface for the AyooMall
                e-commerce platform using Next.js, significantly optimizing performance and business
                workflows.
              </p>
              <p className="text-sm text-neutral-400 leading-loose">
               I plan to take on more complex challenges, from mastering large-scale
                system architecture to driving cross-functional initiatives.
              </p>
            </div>
          </div>
          <div className="bg-black/15 backdrop-blur border border-neutral-900 rounded-xl py-6 px-8 flex flex-col justify-between w-full gap-8 relative overflow-hidden">
            <Image
              src="/images/work-salt.png"
              alt="Salt Indonesia"
              width={50}
              height={24}
              priority
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-neutral-100">
                <b>salt</b> / 2023 - 2025
              </h3>
              <p className="text-sm text-neutral-400 leading-loose">
                Brought on board for SALT new branch in Bandung as a mid level front-end engineer.
              </p>
              <p className="text-sm text-neutral-400 leading-loose">
                Worked using React.js for coding and take care of code quality and deployment
                reliability by creating unit tests. Trusted by companies to work as an outsource in
                renowned companies like Telkomsel.
              </p>
            </div>
            <span className="h-[280px]" />
            <div className="flex w-full gap-2 absolute -bottom-8 -right-16">
              <motion.div
                initial={{ y: "50%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-[360px] h-[280px] relative">
                  <Image
                    src="/images/salt/dashboard.png"
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
                <div className="w-[160px] h-[280px] relative">
                  <Image
                    src="/images/salt/app.png"
                    alt="Dicoding Academy Reviewer Certificate 2021"
                    fill
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="bg-white/95 backdrop-blur rounded-xl py-6 px-8 flex flex-col justify-between w-full gap-8">
            <div className="flex gap-4 items-center">
              <Image src="/images/work-bdd.png" alt="BDD" width={50} height={24} priority />
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
                I speak and facilitate workshop on several programs within frontend and project
                management expertise in collaboration with Dicoding.
              </p>
              <p className="text-sm text-neutral-700 leading-loose">
                Assist in creating a workshop syllabus for frontend development at Studidevsecops.
              </p>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col w-full gap-4">
          <div className="bg-[#E3571B]/90 backdrop-blur rounded-xl py-6 px-8 flex flex-col justify-between w-full gap-8 relative overflow-hidden">
            <Image src="/images/work-smeshub.png" alt="Smeshub" width={100} height={24} priority />
            <div className="flex flex-col gap-3">
              <h3 className="text-neutral-100">
                <b>smeshub</b> / 2021 - 2023
              </h3>
              <p className="text-sm text-neutral-200 leading-loose">
                As the first engineering hired at Smeshub, I turned the founder&apos;s vision into a
                user-friendly MVP through full stack development.
              </p>
              <p className="text-sm text-neutral-200 leading-loose">
                Later, after our team grew, I assigned as a Frontend Engineer, I led a team and
                delivering high-quality front-end solutions.
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
                  <Image src="/images/smeshub/web-1.png" alt="" fill priority />
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-[300px] h-[400px] relative">
                  <Image src="/images/smeshub/web-2.png" alt="" fill priority />
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 150 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-[300px] h-[300px] relative">
                  <Image src="/images/smeshub/web-3.png" alt="" fill priority />
                </div>
              </motion.div>
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
                As an External Code Reviewer, I have successfully provided technical assistance and
                reviewed over 1200 project submissions from students.
              </p>
              <p className="text-sm text-neutral-200 leading-loose">
                I have helped many individuals graduate from Dicoding&apos;s courses, earning high
                ratings from satisfied students.
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
          {/* <div className="bg-black/15 backdrop-blur border border-neutral-900 rounded-xl py-6 px-8 flex flex-col justify-between w-full gap-8">
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
                      I founded a developer studio with purpose of collaborating on multiple web and
                      application projects, as well as creating open-source innovation.
                    </p>
                  </div>
                </div> */}
        </div>
      </div>
    </div>
  );
}
