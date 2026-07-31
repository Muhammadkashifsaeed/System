import Image from "next/image";

interface AboutHSESectionsProps {
  variant?: "home" | "about" | "hse_page";
}

export default function AboutHSESections({ variant = "home" }: AboutHSESectionsProps) {
  const hseImage = variant === "home" ? "/images/PROGRAMS 2.png" : variant === "hse_page" ? "/images/hse_page_safety_ai.png" : "/images/hse_ai_generated.png";
  const qualityImage = variant === "home" ? "/images/PROGRAMS 3.png" : variant === "hse_page" ? "/images/hse_page_quality_ai.png" : "/images/quality_ai_generated.png";

  return (
    <>
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-2 flex justify-center">
              <div className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={hseImage}
                  alt="HSE Program"
                  fill
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-1">
              <div className="mt-4 lg:mt-6">
                <h3 className="text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl">
                  HEALTH, SAFETY, and ENVIRONMENTAL (HSE)
                </h3>
                <p className="mt-4 text-base font-semibold text-primary md:text-lg">
                  Our Obligation to Health, Safety, and Environmental (HSE)
                </p>
                <div className="mt-6 space-y-5">
                  <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                    Our Health, Safety, and Environmental programs are engineered, along with the safety culture that is developed into each of our employees to maintain a work site without accidents and incidents and to exceed the expectations of our clients. Our S.A.F.E Program provides the proper tools and procedures to implement in the planning and execution phases of our scopes of work that are the key to a safe and successful work environment for all stakeholders on a project site.
                  </p>
                  <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                    Integrity Specialists International Inc. uses proper training, detailed Pre-Job Risk Analysis, Job Safety Analysis, Behavioral Based Observation, and Incident Prevention Programs that assist with identifying risk to plan and execute a safe, more productive work environment for the safety of everyone that can be affect by our work. ISI is dedicated and in compliant with ISO 14001 and ISO / OHSAS 18001 and 45001 which is our obligation to perform the safest methods and to protect the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={qualityImage}
                  alt="Quality Management"
                  fill
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mt-4 lg:mt-6">
                <h3 className="text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl">
                  QUALITY
                </h3>
                <p className="mt-4 text-base font-semibold text-primary md:text-lg">
                  Our Obligation to Quality
                </p>
                <div className="mt-6 space-y-5">
                  <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                    At Integrity Specialists International, Inc., the Quality Management System (QMS) starts with our management team commitment knowing and following our policies and processes and employing only the best fit for site specific, most-qualified resources to ensure every project is completed to the highest safety and quality standards. Our value-added processes and procedures ensure not only the highest safety and quality standards are met but also the client satisfactory of our solutions provided to a project. Our quality driven resources and planning and execution processes, procedures, and methods are proven to provide a quicker return on investment (RoI). ISI is dedicated and compliant with ISO 9001:2015 which is our obligation to perform the best of quality and doing the job right the first time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

