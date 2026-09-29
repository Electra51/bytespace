import Image from "next/image";

const categories = [
  {
    name: "Design",
    icon: "/icons/design.svg",
  },
  {
    name: "Development",
    icon: "/icons/development.svg",
  },
  {
    name: "IT & Software",
    icon: "/icons/it-software.svg",
  },
  {
    name: "Business",
    icon: "/icons/business.svg",
  },
  {
    name: "Marketing",
    icon: "/icons/marketing.svg",
  },
  {
    name: "Photography",
    icon: "/icons/photography.svg",
  },
];

export default function CategoriesSection() {
  return (
    <section className="pb-20 md:pb-28 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:w-198 mx-auto mb-14 md:mb-17">
          <p className="text-2xl md:text-[36px] font-poppins font-semibold text-shuttle-gray-950 leading-[120%] mb-4 md:text-nowrap text-center">
            Explore Diverse Learning Paths at Bytespace
          </p>
          <p className="text-shuttle-gray-400 md:w-229.25 text-sm text-center sm:text-lg leading-[160%]">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there's something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group flex flex-col items-center justify-center md:h-41.75 md:w-41.75  border border-shuttle-gray-100 rounded-3xl py-8 px-4 hover:border-electric-lime-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-electric-lime-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={category.icon}
                  alt={`${category.name} icon`}
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </div>

              <span className="text-shuttle-gray-950 text-sm sm:text-base md:text-xl font-medium text-center">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
