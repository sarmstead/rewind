/* eslint-disable @next/next/no-img-element */
type MovieProps = {
  posterUrl: string;
  title: string;
};
const Movie = ({ posterUrl, title }: MovieProps) => {
  return (
    <article className="max-w-[233px] max-h-[331px]">
      <button>
        <img src={posterUrl} alt={`${title} movie poster`} className="w-[233px] h-[331px] object-cover" />
      </button>
    </article>
  );
};

export default Movie;
