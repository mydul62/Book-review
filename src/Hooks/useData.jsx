import { useEffect, useState } from "react";

const useData = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    const loadData = async()=>{
      const res =await fetch('../../public/Data.json');
      const data =await res.json();
      setData(data);
    }
    loadData()
  }, []);
  return {datas}
};

export default useData;