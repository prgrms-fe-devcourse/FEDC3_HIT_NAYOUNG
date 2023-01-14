const ReviewCount = ({ reviewCount }: { reviewCount: number }) => {
  return (
    <div className="pt-7 pb-5">
      <span className="text-TEXT_BASE_BLACK text-lg lg:text-base">Showing</span>
      <span className="text-BASE pl-2 text-lg lg:text-base">{reviewCount} reviews</span>
    </div>
  );
};

export default ReviewCount;
