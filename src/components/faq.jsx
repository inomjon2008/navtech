
import { memo, useState } from "react";
import { Plus } from "lucide-react";

const faq = () => {
  const [active, setActive] = useState(null);

  const questions = [
    {
      question: "Sayt yaratish qancha turadi?",
      answer:
        "Sayt narxi loyiha turi, sahifalar soni, dizayn va kerakli funksiyalarga qarab belgilanadi. Har bir loyiha uchun individual taklif tayyorlaymiz.",
    },
    {
      question: "Sayt qancha vaqtda tayyor bo‘ladi?",
      answer:
        "Loyiha murakkabligiga qarab muddat belgilanadi. Oddiy landing page bir necha kun ichida, kattaroq loyihalar esa kelishilgan muddatda tayyorlanadi.",
    },
    {
      question: "Saytga admin panel qo‘shish mumkinmi?",
      answer:
        "Ha. Yangiliklar, mahsulotlar, buyurtmalar, foydalanuvchilar va boshqa ma’lumotlarni boshqarish uchun qulay admin panel ishlab chiqishimiz mumkin.",
    },
    {
      question: "Telegram bot ham yaratib berasizlarmi?",
      answer:
        "Ha. Biznesingiz uchun buyurtma qabul qilish, murojaatlar, xabar yuborish va boshqa jarayonlarni avtomatlashtiruvchi Telegram botlar yaratamiz.",
    },
    {
      question: "Sayt tayyor bo‘lgandan keyin ham yordam berasizlarmi?",
      answer:
        "Albatta. Sayt ishga tushirilgandan keyin texnik qo‘llab-quvvatlash, yangilash va kerakli o‘zgartirishlarni amalga oshirishda yordam beramiz.",
    },
  ];

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-white px-5 py-24 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
            FAQ
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
            Ko‘p beriladigan
            <span className="text-black/30"> savollar</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-black/50">
            Loyihalarimiz va xizmatlarimiz haqida eng ko‘p beriladigan
            savollarga javoblar.
          </p>
        </div>

        {/* FAQ */}
        <div className="border-t border-black/10">
          {questions.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className="border-b border-black/10"
              >
                {/* QUESTION */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs text-black/30">
                      0{index + 1}
                    </span>

                    <span className="text-base font-medium text-black transition-colors duration-300 group-hover:text-black/60 sm:text-lg">
                      {item.question}
                    </span>
                  </div>

                  {/* PLUS */}
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-500 ${
                      isOpen
                        ? "rotate-45 bg-black text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <Plus size={18} strokeWidth={1.8} />
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-7 pl-10 pr-14 text-sm leading-7 text-black/50 sm:pl-[52px] sm:text-[15px]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default memo(faq);

