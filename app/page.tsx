import SearchForm from "@/components/SearchForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" px-4 sm:max-w-md mx-auto flex flex-col pt-4 sm:pt-16 gap-4  h-screen align-middle">
        <div className="flex justify-center">
          <Image
            src="/search.png?v=2"
            alt="Search logo"
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-base text-gray-400  text-center uppercase">
          i n s t a • s e a r c h
        </h1>

        <SearchForm />
        <p className=" text-gray-400 text-base mt-8">
          {`Currently, Instagram only lets us search by tag. This tool allows you to search by any keyword(s).`}
        </p>
        <p className=" text-gray-400 text-sm mt-4">
          {`You will need to be logged into Instagram to view the results`}
        </p>
        <div className="mt-8 text-right text-gray-400 hover:underline text-[11px] hover:text-black">
          <a
            href="https://www.linkedin.com/in/jonathan-andrew-myers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made out of curiosity by Jonathan
          </a>
        </div>
      </div>
    </>
  );
}
