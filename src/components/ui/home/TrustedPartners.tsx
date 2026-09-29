import Image from "next/image";

const partners = [
  {
    id: 1,
    logo: "/images/home-image/companyLogo1.png",
    name: "Logoipsum",
  },
  {
    id: 2,
    logo: "/images/home-image/companyLogo2.png",
    name: "Logoipsum",
  },
  {
    id: 3,
    logo: "/images/home-image/companyLogo3.png",
    name: "Logoipsum",
  },
  {
    id: 4,
    logo: "/images/home-image/companyLogo4.png",
    name: "Logoipsum",
  },
  {
    id: 5,
    logo: "/images/home-image/companyLogo5.png",
    name: "Logoipsum",
  },
];

export default function TrustedPartners() {
  return (
    <section className="py-12 md:py-16 px-5 bg-shuttle-gray-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-18">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={167}
              height={41}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
