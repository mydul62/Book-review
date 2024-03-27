import Typewriter from 'react-ts-typewriter';
const Banner = () => {

  return (
    <div className=" max-w-7xl w-[95%] mx-auto ">
      <div className="hero min-h-[554px] bg-base-200 rounded-3xl p-6 md:p-0">
  <div className="flex items-center flex-col justify-between lg:flex-row-reverse px-0 md:px-[120px]">
    <img src="/bnrbk.png" className=" md:max-w-sm float-left" />
    <div  className=" w-[100%] md:w-[722px] md:space-y-12 mt-6  md:mt-0">
      <h1 className="text-[35px] md:text-[56px]   font-bold font-Playfair ">Books to freshen up <br></br>your  <Typewriter speed={400} cursor={false}  loop="true" text=' bookshelf' /></h1>
      <button className="px-7 py-5 text-xl font-bold bg-[#23BE0A] text-white font-sans mt-4 md:mt-0 rounded-xl">View The List</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;