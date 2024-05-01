import Icon from "@/app/components/Icon/index";
const SearchBar = () => {
  return (
    <section className="mb-24 w-full max-w-[954px]">
      <h2 className="text-bluey font-bold text-5xl mb-6">
        Find your next fav ❤️
      </h2>
      <div className="relative border-2 border-bluey rounded-full min-h-11 flex items-center justify-between w-full">
        <div className="absolute left-6">
          <Icon name="magnifyingglass" />
        </div>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search ..."
          className="pl-14 w-full min-h-11 bg-transparent rounded-full outline-blue-200 outline-offset-8 uppercase text-gravy font-display text-xl font-medium"
        />
      </div>
    </section>
  );
};

export default SearchBar;
