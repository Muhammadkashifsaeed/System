import Image from "next/image";

export default function AboutHSESections() {
  return (
    <>
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-black md:text-2xl lg:text-3xl">
                  HEALTH, SAFETY, and ENVIRONMENTAL (HSE)
                </h3>
                <p className="mt-3 text-sm font-semibold text-black md:text-base">
                  Our Obligation to Health, Safety, and Environmental (HSE)
                </p>
                <div className="mt-5 space-y-4">
                  <p className="text-sm leading-[1.8] text-black md:text-base">
                    Our Health, Safety, and Environmental programs are engineered, along with the safety culture that is developed into each of our employees to maintain a work site without accidents and incidents and to exceed the expectations of our clients. Our S.A.F.E Program provides the proper tools and procedures to implement in the planning and execution phases of our scopes of work that are the key to a safe and successful work environment for all stakeholders on a project site.
                  </p>
                  <p className="text-sm leading-[1.8] text-black md:text-base">
                    Integrity Specialists International Inc. uses proper training, detailed Pre-Job Risk Analysis, Job Safety Analysis, Behavioral Based Observation, and Incident Prevention Programs that assist with identifying risk to plan and execute a safe, more productive work environment for the safety of everyone that can be affect by our work. ISI is dedicated and in compliant with ISO 14001 and ISO / OHSAS 18001 and 45001 which is our obligation to perform the safest methods and to protect the environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/Goals.png"
                  alt="Goals"
                  fill
                  priority
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] section-padding">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="hidden lg:flex justify-center">
              <div className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/Quality management.png"
                  alt="Quality Management"
                  fill
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-black md:text-2xl lg:text-3xl">
                  QUALITY
                </h3>
                <p className="mt-3 text-sm font-semibold text-black md:text-base">
                  Our Obligation to Quality
                </p>
                <div className="mt-5 space-y-4">
                  <p className="text-sm leading-[1.8] text-black md:text-base">
                    At Integrity Specialists International, Inc., the Quality Management System (QMS) starts with our management team commitment knowing and following our policies and processes and employing only the best fit for site specific, most-qualified resources to ensure every project is completed to the highest safety and quality standards. Our value-added processes and procedures ensure not only the highest safety and quality standards are met but also the client satisfactory of our solutions provided to a project. Our quality driven resources and planning and execution processes, procedures, and methods are proven to provide a quicker return on investment (RoI). ISI is dedicated and compliant with ISO 9001:2015 which is our obligation to perform the best of quality and doing the job right the first time.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:hidden flex justify-center">
              <div className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/Quality management.png"
                  alt="Quality Management"
                  fill
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
