"use client";

const SearchForm = () => {
  function handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchTerm = formData.get("search");
    console.log("Form submitted with:", searchTerm);
    // Do something with searchTerm here
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
      className="bg-gray-50 shadow-xl p-8 flex flex-col gap-4 rounded-xl border border-gray-200"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="type search words right here..."
        className="border p-4 rounded-full text-center w-full"
        name="search"
      />
      <button
        type="submit"
        className="border hover:bg-blue-600 text-white p-2 rounded-full bg-blue-500 w-full"
      >
        Search Instagram
      </button>
    </form>
  );
};

export default SearchForm;
