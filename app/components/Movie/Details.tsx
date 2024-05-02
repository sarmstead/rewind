type DetailsProps = {
  genres: { id: string; title: string }[];
  rating: string;
  summary: string;
  title: string;
};
const Details = ({ genres, rating, summary, title }: DetailsProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{rating}</p>
      <p>{summary}</p>
      {genres.length > 0 && (
        <div className="flex">
          {genres.map(({ id, title }) => (
            <p key={id}>{title}</p>
          ))}
        </div>
      )}
    </div>
  );
};
export default Details;
