import Image from "next/image";

function PremiumImage({ src, alt, hasTopAccent = true, priority = false }: { src: string; alt: string; hasTopAccent?: boolean; priority?: boolean }) {
  return (
    <div className="group relative w-full max-w-2xl">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 blur-xl" aria-hidden="true" />

      {hasTopAccent && (
        <div className="absolute -top-5 -left-5 h-14 w-14 animate-float opacity-[0.18]" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" className="h-full w-full text-primary">
            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      )}

      <div className={`absolute h-16 w-1 rounded-full bg-primary/20 ${hasTopAccent ? "-left-3 top-10" : "-right-3 bottom-10"}`} aria-hidden="true" />

      <div className="absolute -bottom-5 -right-5 h-20 w-20 animate-float opacity-[0.12]" style={{ animationDelay: "1s" }} aria-hidden="true">
        <svg viewBox="0 0 80 80" fill="none" className="h-full w-full text-primary">
          <path d="M40 10 L70 40 L40 70 L10 40 Z" stroke="currentColor" strokeWidth="2" />
          <path d="M40 25 L55 40 L40 55 L25 40 Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:shadow-[0_20px_50px_-12px_rgba(15,76,129,0.25)]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={100}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function AboutHSESections() {
  return (
    <>
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
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
            <div className="order-1 lg:order-2 flex justify-center">
              <PremiumImage src="/images/Program.webp" alt="HSE Program" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] section-padding">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="flex justify-center">
              <PremiumImage src="/images/safety.webp" alt="Quality" hasTopAccent={false} />
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
          </div>
        </div>
      </section>
    </>
  );
}
