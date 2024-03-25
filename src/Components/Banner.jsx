
const Banner = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="hero h-[554px] bg-base-200 rounded-3xl">
  <div className="hero-content flex-col justify-between lg:flex-row-reverse px-[120px]">
    <img src="/bnrbk.png" className="max-w-sm " />
    <div  className=" w-[50%] space-y-12">
      <h1 className="text-[56px]  font-bold font-Playfair ">Books to freshen up your bookshelf</h1>
      <button className="px-7 py-5 text-xl font-bold bg-[#23BE0A] text-white font-sans rounded-xl">View The List</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;