const Rating = ({ rating }: { rating: string }) => {
  if (!rating)
    return <p className="text-left italic font-sans">Rating not found</p>;

  return (
    <p className="flex items-center justify-center w-fit min-w-24 h-6 border-white border-2 rounded-full font-display font-medium text-sm text-white">
      {rating}
    </p>
  );
};

export default Rating;
