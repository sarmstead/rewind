type DetailsProps = {
  genres: { id: string; title: string }[];
  rating: string;
  summary: string;
  title: string;
};
const Details = ({ genres, rating, summary, title }: DetailsProps) => {
  return (
    <div className="bg-black flex flex-col gap-5 py-6 px-3 text-white h-[375px] overflow-y-auto rounded-2xl">
      <h2 className="text-left font-display text-xl font-bold">{title}</h2>
      <Rating rating={rating} />
      <Summary summary={summary} />
      <Genres genres={genres} />
    </div>
  );
};
export default Details;

const Rating = ({ rating }: { rating: string }) => {
  if (!rating)
    return <p className="text-left italic font-sans">Rating not found</p>;

  return (
    <p className="flex items-center justify-center w-fit min-w-24 h-6 border-white border-2 rounded-full font-display font-medium text-sm">
      {rating}
    </p>
  );
};

const Summary = ({ summary }: { summary: string }) => {
  if (!summary)
    return (
      <p className="text-left italic font-sans">Movie summary not found</p>
    );

  return <p className="text-left font-sans">{summary}</p>;
};

const Genres = ({ genres }: { genres: { id: string; title: string }[] }) => {
  if (genres.length < 1) return null

  return (
    <div className="flex flex-wrap items-center gap-x-2">
      {genres.map(({ id, title }, index) => {
        if (index === genres.length - 1) {
          return (
            <p key={id} className="font-display uppercase text-sm">
              {title}
            </p>
          );
        }
        return (
          <>
            <p key={id} className="font-display uppercase text-sm">
              {title}
            </p>
            <span>·</span>
          </>
        );
      })}
    </div>
  )
}
