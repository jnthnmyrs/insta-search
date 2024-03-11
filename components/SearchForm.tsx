"use client";

const SearchForm = () => {
  function handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchTerm = formData.get("search");

    // Open a new tab with the Instagram search page
    window.open(
      `https://www.instagram.com/explore/search/keyword/?q=${searchTerm}`,
      "_blank",
      "noopener noreferrer"
    );
    // Reset the form
    e.target.reset();
  }

  return (
    <form
      className=" bg-gradient-to-br from-slate-100 to-slate-200 shadow-md shadow-gray-200 p-4 flex flex-col gap-4 rounded-[32px] border border-gray-300"
      onSubmit={handleSubmit}
    >
      <div className=" ">
        <input
          type="text"
          placeholder="enter a keyword or two..."
          className="border p-4 rounded-[16px] text-center w-full"
          name="search"
        />
      </div>
      <button
        type="submit"
        className=" hover:to-blue-800 hover:from-blue-600 shadow-sm shadow-blue-700 border-blue-400 hover:border-violet-500 border hover:shadow-violet-600 text-white p-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 w-full active:bg-blue-800 active:from-blue-800 active:to-blue-900 active:border-blue-900 active:shadow-blue-900"
      >
        Search Instagram
      </button>
    </form>
  );
};

export default SearchForm;
