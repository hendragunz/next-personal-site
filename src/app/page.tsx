import Image from "next/image"

export default function Home() {
  return (

    <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
      <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
        <div className="">
          <h2
            className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
            Hi, This is <span className="text-primary">Hendra</span> 👋
          </h2>

          <p
            className="mt-4 mb-2 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
            A Passionate&nbsp;

            <span className="font-semibold text-dark dark:text-white">
              Full Stack / Web Developer
            </span>

            &nbsp;
            having
            &nbsp;

            <span className="font-semibold text-dark dark:text-white">
              14 years
            </span>
            &nbsp;
            of Experiences over many projects across countries.
          </p>

          <p className="mb-2">
            Dynamic Ruby / Rails Programmer with a proven experience in developing robust web applications and payment systems. Expertise spans across backend development, API creation, and team collaboration, ensuring high security, performance, and compliance standards. Proficient in SQL, HTML & CSS, and JavaScript, with a solid foundation in various technologies, including NodeJS and AWS. Passionate about leveraging a full-stack skill set to deliver innovative solutions and elevate project outcomes while continuously embracing new technologies and methodologies. Ready to contribute to a forward-thinking team dedicated to impactful web development.
          </p>

          <p className="mb-2">
            Highly interested with Web development (both backend and front-end), building RESTFul API System, E-Commerce, Payment Processing, Data Processing, and Automation Testing.
            Also a startup enthusiast, to help and grow up together with the lovely startup companies.
            I&apos;m highly adaptable to working on many industries / startup businesses across the countries.
          </p>

          <div className="mb-2">
            <p className="mb-2">My favorite stacks:</p>
            <ul>
              <li>✅ Ruby on Rails</li>
              <li>✅ Bootstrap / Tailwind for CSS</li>
              <li>✅ Hotwire & Stimulus for Front-end more dynamic</li>
              <li>✅ ElasticSearch for fulltext search engine</li>
              <li>✅ SQL (Postgresql & MySQL)</li>
              <li>✅ MongoDB</li>
              <li>✅ Retool (for building frontend system with less code)</li>
              <li>✅ NodeJS / ExpressJS (for API or Web Development)</li>
              <li>✅ React for Frontend development</li>
            </ul>
          </div>

          <div className="mb-2">
            <p className="mb-2">Key Qualifications:</p>

            <ul>
              <li>⭐ Expert in Ruby on Rails</li>
              <li>⭐ Expert in RESTFul API development</li>
              <li>⭐ Familiar with MERN Stack</li>
              <li>⭐ Focus on Quality, Reliability and Security performance</li>
              <li>⭐ Focus on web development, and mobile friendly</li>
              <li>⭐ Hard worker, organized, attention to details</li>
              <li>⭐ Comfortable work as independent or in a team</li>
              <li>⭐ Always love to learn new tech</li>
              <li>⭐ Good communication with team</li>
            </ul>
          </div>
        </div>

        <div
          className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-primary dark:bg-dark-2 lg:text-lg">
          <span className="relative flex h-2 w-2 shrink-0">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light"></span>
            <span
              className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          <span>Available For Hire</span>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-between gap-6 lg:mt-12 lg:gap-10">
        <div className="flex flex-wrap items-start gap-6 lg:gap-10">
          <div className="">
            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
              <span>14</span>+
            </h2>
            <p className="mt-2 text-muted">Year of Experience</p>
          </div>
          <div>
            <h2
              className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
              <span>30</span>+
            </h2>
            <p className="mt-2 text-muted">Project Completed</p>
          </div>
          <div>
            <h2
              className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
              <span>30</span>+
            </h2>
            <p className="mt-2 text-muted">Happy Client</p>
          </div>
        </div>

        <div
          className="relative -mt-6 hidden h-[100px] w-[100px] p-4 lg:block xl:-mt-10">
          <Image
            className="absolute inset-0 h-full w-full animate-spin-slow dark:hidden"
            src="/circle-text.svg"
            alt="scroll down"
            width={150}
            height={150}
            priority
          />

          <Image
            className="absolute inset-0 hidden h-full w-full animate-spin-slow dark:block"
            src="/circle-text-light.svg"
            alt="scroll down"
            width={150}
            height={150}
            priority
          />

          <div className="grid h-full w-full place-content-center rounded-full bg-primary text-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-10 w-10">
              <path d="M20 5v30m-5-5 5 5 5-5" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-14">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
            Trusted by many clients
          </h3>

          <div className="flex items-center gap-2">
            <button
              className="review-carousel-button-prev grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="h-5 w-5 shrink-0">
                <path d="M4.167 10h11.666M4.167 10l5 5m-5-5 5-5" />
              </svg>
            </button>

            <button
              className="review-carousel-button-next grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="h-5 w-5 shrink-0">
                <path d="M4.167 10h11.666m-5 5 5-5m-5-5 5 5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="swiper review-carousel">
            <div className="swiper-wrapper">
              <div className="swiper-slide mb-2">
                <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                  <div className="flex flex-wrap items-center justify-between gap-4">

                    <div className="flex flex-wrap items-center gap-1">
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                    </div>
                  </div>

                  <blockquote className="mt-6 flex-1 text-lg">
                    What an excellent developer! He quickly grasped the code base of an existing Rails project and learned our proprietary framework with impressive speed. He resolved all the bugs within just a few days and implemented new features with exceptional quality. His proactive suggestions were targeted and valuable. We will certainly collaborate with him again in the near future.
                  </blockquote>

                  <p className="mt-8 font-medium">
                    Köln, Germany -&nbsp;
                    <span className="font-normal text-muted">
                      Upwork Client
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide mb-2">
                <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                  <div className="flex flex-wrap items-center justify-between gap-4">

                    <div className="flex flex-wrap items-center gap-1">
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                    </div>
                  </div>

                  <blockquote className="mt-6 flex-1 text-lg">
                    Hendra is an excellent and senior Ruby developer. It was a pleasure working with him and we hope to work with him again in the future.
                  </blockquote>

                  <p className="mt-8 font-medium">
                    ASTORIA, United States -&nbsp;
                    <span className="font-normal text-muted">
                      Upwork Client
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide mb-2">
                <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                  <div className="flex flex-wrap items-center justify-between gap-4">

                    <div className="flex flex-wrap items-center gap-1">
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                    </div>
                  </div>

                  <blockquote className="mt-6 flex-1 text-lg">
                    Hendra is great! I would highly recommend him as he is attentive, focused to detail, and very experienced. Great job Hendra.
                  </blockquote>

                  <p className="mt-8 font-medium">
                    United States -&nbsp;
                    <span className="font-normal text-muted">
                      Upwork Client
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide mb-2">
                <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                  <div className="flex flex-wrap items-center justify-between gap-4">

                    <div className="flex flex-wrap items-center gap-1">
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                    </div>
                  </div>

                  <blockquote className="mt-6 flex-1 text-lg">
                    Hendra is truly a talented developer. He was able to take a very messy stack and turn things around very efficiently and professionally. I would highly recommend him for RoR or anything within his core competencies. Thank you Hendra!
                  </blockquote>

                  <p className="mt-8 font-medium">
                    United States -&nbsp;
                    <span className="font-normal text-muted">
                      Upwork Client
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide mb-2">
                <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                  <div className="flex flex-wrap items-center justify-between gap-4">

                    <div className="flex flex-wrap items-center gap-1">
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                    </div>
                  </div>

                  <blockquote className="mt-6 flex-1 text-lg">
                    <p className="mb-2">
                      Hendra was an EXCELLENT fit for my particular job. We needed someone who had OAuth experience in relation to setting up an actual OAuth provider. I went through 2 or 3 freelancers who thought they could do it but nobody could really deliver until I met Hendra. His written English was much better than his spoken English, but between texting, phone calls, and screen shots, we were able to get the job done 100% to my satisfaction. He was very good with deadlines, ALWAYS available when he said he would be, and just great with communication and keeping his word in every respect.
                    </p>
                    <p className="mb-2">
                      I would highly recommend Hendra for any job related to Linux, Rails, web development, etc. etc. Some issues came up that were related to some tricky gem management/ RVM issues and he was very knowledgeable and helpful in troubleshooting them. All of this may be a bit &quot;T.M.I.&quot;, but I&apos;m sharing this to illustrate the point that this guy is very experienced, very nimble, and a very reliable person to work with .
                    </p>

                    <p>Five stars plus.</p>
                  </blockquote>

                  <p className="mt-8 font-medium">
                    United States -&nbsp;
                    <span className="font-normal text-muted">
                      Upwork Client
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide mb-2">
                <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                  <div className="flex flex-wrap items-center justify-between gap-4">

                    <div className="flex flex-wrap items-center gap-1">
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                    </div>
                  </div>

                  <blockquote className="mt-6 flex-1 text-lg">
                    <p className="mb-2">
                      Hendra went out of his way to make sure this project was a success and done to my specifications.
                    </p>
                  </blockquote>

                  <p className="mt-8 font-medium">
                    United States -&nbsp;
                    <span className="font-normal text-muted">
                      Upwork Client
                    </span>
                  </p>
                </div>
              </div>

              <div className="swiper-slide mb-2">
                <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                  <div className="flex flex-wrap items-center justify-between gap-4">

                    <div className="flex flex-wrap items-center gap-1">
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                      <Image
                        src="/images/star-full.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 shrink-0" />
                    </div>
                  </div>

                  <blockquote className="mt-6 flex-1 text-lg">
                    <p className="mb-2">
                      Excellent work. Timely communication. Pleasure to work with.
                    </p>
                  </blockquote>

                  <p className="mt-8 font-medium">
                    North York, Canada -&nbsp;
                    <span className="font-normal text-muted">
                      Upwork Client
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
