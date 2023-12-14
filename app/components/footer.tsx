import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className=" bg-white w-full h-24">
      <div className="flex items-center justify-between h-full w-full px-4 2xl:px-16">
        <div className="flex">
          <form>
            <div className="flex">
              <input
                type="email"
                id="email"
                className="bg-white h-6 border border-slate-500 text-slate-500 text-sm rounded-sm focus:outline-none block w-full p-2.5"
                placeholder="enter your email address"
              />
              <button
                type="submit"
                className="text-slate-500 bg-white focus:outline-none text-xs w-full sm:w-auto px-4"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="text-xs text-slate-500">© 2023 Awesome Name</div>
        <div className="flex space-x-4 items-center">
          <div>
            <Link
              href="https://www.instagram.com/"
              className="text-xs text-slate-500 "
            >
              <Image
                src="/instagram.svg"
                alt="instagram icon"
                height={28}
                width={28}
              />
            </Link>
          </div>
          <div className="text-xs text-slate-500 ">|</div>
          <div>
            <Link
              href="https://www.github.com/"
              className="text-xs text-slate-500 "
            >
              <Image
                src="/github.svg"
                alt="github icon"
                height={28}
                width={28}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
