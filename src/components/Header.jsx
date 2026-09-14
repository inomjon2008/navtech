import { memo, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/images/logo.jpg";

const Header = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Bosh sahifa", href: "#home" },
    { name: "Xizmatlar", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Narxlar", href: "#pricing" },
    { name: "Jamoa", href: "#team" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div className="flex h-[82px] items-center justify-between border-b border-black/[0.07]">

          {/* LOGO */}
          <a
            href="#home"
            className="group flex items-center gap-3"
          >
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl">
              <img
                src={logo}
                alt="NAVTECH"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-[18px] font-black tracking-[-0.05em] text-[#111]">
                NAVTECH
              </span>

              <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.22em] text-black/35">
                Digital solutions
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center lg:flex">

            <div className="flex items-center gap-1 rounded-full bg-[#f6f6f6] p-1.5">

              {menu.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    relative rounded-full px-4 py-2.5
                    text-[13px] font-medium
                    transition-all duration-300
                    ${
                      index === 0
                        ? "bg-white text-black shadow-sm"
                        : "text-black/45 hover:bg-white hover:text-black hover:shadow-sm"
                    }
                  `}
                >
                  {item.name}
                </a>
              ))}

            </div>

          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* CONTACT */}
            <a
              href="#contact"
              className="
                group hidden items-center gap-3
                rounded-full bg-black
                py-2.5 pl-5 pr-2.5
                text-[13px] font-medium text-white
                transition-all duration-300
                hover:pr-4
                sm:flex
              "
            >
              <span>Bog‘lanish</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} strokeWidth={2} />
              </span>
            </a>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full bg-[#f6f6f6]
                text-black
                transition-all duration-300
                hover:bg-black hover:text-white
                lg:hidden
              "
              aria-label="Menu"
            >
              {open ? (
                <X size={20} strokeWidth={1.8} />
              ) : (
                <Menu size={20} strokeWidth={1.8} />
              )}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            overflow-hidden
            transition-all duration-500 ease-in-out
            lg:hidden
            ${
              open
                ? "max-h-[600px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="border-b border-black/[0.07] py-5">

            <nav className="flex flex-col gap-1">

              {menu.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    flex items-center justify-between
                    rounded-xl px-4 py-3.5
                    text-sm font-medium
                    transition-all duration-300
                    ${
                      index === 0
                        ? "bg-black text-white"
                        : "text-black/60 hover:bg-[#f6f6f6] hover:text-black"
                    }
                  `}
                >
                  <span>{item.name}</span>

                  {index === 0 && (
                    <span className="text-xs text-white/40">
                      01
                    </span>
                  )}
                </a>
              ))}

            </nav>

            {/* MOBILE CONTACT */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                mt-3 flex items-center
                justify-between rounded-xl
                bg-black px-4 py-3.5
                text-sm font-medium text-white
              "
            >
              <span>Bog‘lanish</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
                <ArrowUpRight size={15} />
              </span>
            </a>

          </div>
        </div>

      </div>
    </header>
  );
};

export default memo(Header);