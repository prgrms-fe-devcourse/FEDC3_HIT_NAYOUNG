const NotFound = () => {
  return (
    <center className="overflow-hidden">
      <div className="text-2xl mt-20 italic">404 Page</div>
      <div className="box-border rounded-404 w-80 h-80 mt-10 bg-[#FFC7C7] flex items-center justify-center">
        <div className="text-white text-6xl">HIT</div>
      </div>
      <div className="text-xl mt-16">
        죄송합니다.
        <p>페이지를 찾을 수 없습니다.</p>
      </div>
    </center>
  );
};

export default NotFound;
