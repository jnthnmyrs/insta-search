import SearchForm from "@/components/SearchForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" max-w-md mx-auto flex flex-col pt-16 gap-4  h-screen align-middle">
        <h1 className="text-base text-gray-500  text-center uppercase">
          i n s t a &nbsp; s e a r c h
        </h1>

        <SearchForm />
        <p className=" text-gray-400 text-base mt-8">
          {`Currently, Instagram only has a tag search. This tool allows you to search for any keyword on Instagram and view the results in a new tab.`}
        </p>
        <p className=" text-gray-400 text-sm mt-4">
          {`You will need to be logged into Instagram to view the search results`}
        </p>
        <div className="mt-8 text-gray-400 hover:underline text-[11px] hover:text-black">
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
