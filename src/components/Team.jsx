
import { memo } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      number: "01",
      name: "Landing",
      description: "Mahsulot, xizmat yoki shaxsiy brend uchun zamonaviy bir sahifali sayt.",
      price: "1 500 000",
      popular: false,
      features: [
        "1 sahifali sayt",
        "Responsive dizayn",
        "Animatsiyalar",
        "Telegram integratsiya",
      ],
    },
    {
      number: "02",
      name: "Business",
      description: "Biznesingizni professional ko‘rsatadigan to‘liq korporativ sayt.",
      price: "3 500 000",
      popular: true,
      features: [
        "4–7 sahifa",
        "Premium UI/UX",
        "Responsive dizayn",
        "Telegram / forma integratsiyasi",
        "SEO asoslari",
      ],
    },
    {
      number: "03",
      name: "Custom",
      description: "Murakkab va individual loyiha uchun maxsus ishlab chiqilgan yechim.",
      price: "Kelishiladi",
      popular: false,
      features: [
        "Individual dizayn",
        "Admin panel",
        "Telegram bot",
        "API integratsiya",
        "Maxsus funksiyalar",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="overflow-hidden bg-[#f7f7f5] py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

        {/* TITLE */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:mb-24 lg:flex-row lg:items-end">

          <h2 className="text-5xl font-medium leading-[0.9] tracking-[-0.055em] text-neutral-950 sm:text-7xl lg:text-8xl">
            Narxlar
          </h2>

          <p className="max-w-xs text-sm leading-6 text-neutral-500">
            Loyihangiz uchun mos paketni tanlang.
            Kerak bo‘lsa, sizga individual taklif tayyorlaymiz.
          </p>

        </div>

        {/* PRICING */}
        <div className="grid gap-4 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.number}
              className={`
                group
                relative
                flex
                min-h-[520px]
                flex-col
                justify-between
                overflow-hidden
                border
                p-7
                transition-all
                duration-500
                sm:p-9
                ${
                  plan.popular
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-neutral-300 bg-white text-neutral-950 hover:border-neutral-500"
                }
              `}
            >

              {/* TOP */}
              <div>

                <div className="mb-14 flex items-center justify-between">

                  <span
                    className={`text-xs ${
                      plan.popular
                        ? "text-white/40"
                        : "text-neutral-300"
                    }`}
                  >
                    {plan.number}
                  </span>

                  {plan.popular && (
                    <span className="rounded-full border border-white/20 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-white/70">
                      Mashhur
                    </span>
                  )}

                </div>

                <h3 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
                  {plan.name}
                </h3>

                <p
                  className={`mt-5 max-w-sm text-sm leading-6 ${
                    plan.popular
                      ? "text-white/50"
                      : "text-neutral-500"
                  }`}
                >
                  {plan.description}
                </p>

              </div>

              {/* BOTTOM */}
              <div>

                {/* FEATURES */}
                <div className="mb-10 space-y-3">

                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <Check
                        size={14}
                        strokeWidth={1.8}
                        className={
                          plan.popular
                            ? "text-white/60"
                            : "text-neutral-400"
                        }
                      />

                      <span
                        className={`text-xs ${
                          plan.popular
                            ? "text-white/60"
                            : "text-neutral-500"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}

                </div>

                {/* PRICE */}
                <div
                  className={`border-t pt-6 ${
                    plan.popular
                      ? "border-white/15"
                      : "border-neutral-200"
                  }`}
                >

                  <p
                    className={`mb-2 text-[9px] uppercase tracking-[0.2em] ${
                      plan.popular
                        ? "text-white/40"
                        : "text-neutral-400"
                    }`}
                  >
                    Boshlang‘ich narx
                  </p>

                  <div className="flex items-end justify-between gap-4">

                    <div>
                      <span className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                        {plan.price}
                      </span>

                      {plan.price !== "Kelishiladi" && (
                        <span
                          className={`ml-2 text-xs ${
                            plan.popular
                              ? "text-white/40"
                              : "text-neutral-400"
                          }`}
                        >
                          so‘m
                        </span>
                      )}
                    </div>

                    <button
                      className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-500
                        group-hover:rotate-0
                        ${
                          plan.popular
                            ? "bg-white text-neutral-950"
                            : "bg-neutral-950 text-white"
                        }
                      `}
                    >
                      <ArrowUpRight
                        size={19}
                        strokeWidth={1.7}
                      />
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-8 flex flex-col gap-3 border-t border-neutral-300 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-neutral-400">
            Barcha loyihalar individual ehtiyojga qarab moslashtiriladi.
          </p>

          <p className="text-xs text-neutral-400">
            To‘lov va muddat kelishiladi.
          </p>

        </div>

      </div>
    </section>
  );
};

export default memo(Pricing);

