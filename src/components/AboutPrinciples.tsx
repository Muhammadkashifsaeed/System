import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const principles = [
  {
    title: "Our People",
    content:
      "Integrity Specialists International is committed to equality in employment opportunity and rewards, embracing wholeheartedly the cultural diversity within the communities we call home. Our employees' welfare and interests are foremost throughout all aspects of our business and how we conduct our affairs. Integrity Specialists International is committed to:\nCreating and nurturing an environment of success based on honesty and integrity.\nEquitable sharing in the success of the company.\nEmpowerment through training and communication.\nIndividual growth and equal opportunity.\nDesigning and providing a safe and secure work environment.",
  },
  {
    title: "Our Customers",
    content:
      "Customer needs are paramount and represent the highest priority within our business. Our obligation is to proactively seek out and define customer needs while addressing all requests expeditiously without creating false expectations.",
  },
  {
    title: "Our Community",
    content:
      "Integrity Specialists International is committed to supporting the communities within which we operate. We believe in the practice of social responsibility and encourage similar behavior in our employees and suppliers. We support the conservation of the physical environment and the prevention of pollution at our facilities. We proactively comply with all applicable safety, environmental, legal and regulatory requirements to which we subscribe.",
  },
  {
    title: "Our Quality",
    content:
      "Beginning with a clear definition of customers' expectations, we strive to consistently meet or exceed them. We adhere to all applicable standards and customer specific requirements and endeavor to provide processes that ensure we achieve this in order to build a robust and world class business.",
  },
];

export default function AboutPrinciples() {
  return (
    <section className="relative overflow-hidden bg-white section-padding">
      <div className="absolute inset-0">
        <Image
          src="/images/most.webp"
          alt="Integrity Specialists International background"
          fill
          priority
          quality={100}
          className="object-cover object-center opacity-[0.03]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-16 text-center">
          <p className="mx-auto max-w-4xl text-lg leading-[1.8] text-black md:text-xl">
            Integrity Specialists International is committed to an operating philosophy based on openness in communication, integrity in serving our customers, fairness and concern for our employees and responsibility to the communities within which we operate. Our vision is to exceed customer expectations for quality, safety, sustainability, cost, delivery and value. Additionally, we are dedicated to creating a profitable business culture that is based on the following principles:
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((item, idx) => (
            <AnimatedSection key={item.title} delay={idx}>
              <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary mb-5">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.8] text-black whitespace-pre-line md:text-base">
                  {item.content}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
