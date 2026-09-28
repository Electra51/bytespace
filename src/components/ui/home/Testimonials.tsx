import Image from "next/image";
import { testimonials } from "../../../data";
import type { Testimonial } from "../../../types";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col gap-6">
      <div className="w-20 h-20 rounded-full overflow-hidden bg-white">
        <Image
          src={testimonial?.avatar}
          alt={testimonial?.name}
          width={80}
          height={80}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-0.5">
        <h3 className="font-poppins font-semibold text-black text-[20px]">
          {testimonial?.name}
        </h3>
        <p className="font-satoshi font-normal text-[18px] text-persian-blue-800">
          {testimonial?.role}
        </p>
      </div>

      <p className="font-satoshi font-normal text-[18px] text-black-700 leading-[160%]">
        {testimonial?.quote}
      </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden">
      <div
        className="absolute -top-60.25 left-230.5 w-284.25 h-284.25 rounded-full opacity-60 blur-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #CBFC01, #CBFC013B, #CBFC010F, #CBFC0100)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-34.5 left-98.75 w-2xl h-168 rounded-full opacity-60 blur-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #CBFC01, #CBFC013B, #CBFC010F, #CBFC0100)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-37.25 -left-110.5 w-284.25 h-284.25 rounded-full opacity-60 blur-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #003BE2, #003BE23B, #003BE20F, #003BE200)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 lg:mb-16">
          <div className="lg:w-1/2 mt-9.75">
            <h2 className="font-poppins font-semibold text-black text-[44px] leading-[120%]">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          <div className="lg:w-1/2">
            <p className="font-satoshi font-normal text-[18px] text-black-700 leading-[160%]">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
