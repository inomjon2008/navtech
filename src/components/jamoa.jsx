import { memo } from "react";
import { ArrowUpRight } from "lucide-react";

const Jamoa = () => {
  const team = [
    {
      number: "01",
      name: "Ism Familiya",
      role: "Frontend Developer",
    },
    {
      number: "02",
      name: "Ism Familiya",
      role: "Backend Developer",
    },
    {
      number: "03",
      name: "Ism Familiya",
      role: "UI/UX Designer",
    },
  ];

  return (
    <section
      id="jamoa"
      className="scroll-mt-24 bg-white px-5 py-20"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
            Bizning jamoa
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-black md:text-6xl">
            Jamoa
          </h2>

          <p className="mt-4 max-w-xl text-gray-500">
            Loyihalarni birgalikda yaratadigan kreativ va professional jamoa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {team.map((person) => (
            <div
              key={person.number}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative flex aspect-square items-center justify-center bg-black">
                {/* RASMNI SHU YERGA QO'YASIZ */}

                <span className="text-7xl font-bold text-white/10">
                  {person.number}
                </span>

                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="p-6">
                <p className="mb-2 text-xs uppercase tracking-widest text-gray-400">
                  {person.role}
                </p>

                <h3 className="text-2xl font-semibold text-black">
                  {person.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default memo(Jamoa);