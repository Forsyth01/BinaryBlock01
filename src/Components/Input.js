import { useEffect, useState } from "react";
import $ from "jquery";
import axios from 'axios'

const Input = () => {
  const [bnryData, setBnryData] = useState(null);
  const [bibkData, setBibkData] = useState(null);

  const [eset, setEset] = useState(false);
  const [decimal,setDecimal] = useState('')
  const MyBackgroundImage = "/img/Buttonn.png";

  const Limit=(e)=>{
       decimal >= 10000 ? setDecimal(9999):setDecimal(e.target.value)
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    try { 
      await axios.post(`https://binaryblock.io/binary/submitcodex.php`, {submit:'',decimal:Number(decimal)})
      .then(response => {
        console.log(response.data);
        if (response.data.eset) {
          setBibkData(response.data.bibk);
          setBnryData(response.data.bnry);
        } else {
          alert(response.data.msg);
        }
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data);
        } else {
          alert(error.message);
        }
      });

    } catch (error) {
       console.log(error.response)
    }
  }



  return (
    <div>
      <div className="_0shine">
        <div className="m-auto xl:w-[80%] py-5 pb-12 ">
          <div className="py-10">
            <h1 className="text-2xl text-center xl:font-semibold xl:text-3xl px-10 xl:px-0">
              View Available BIBK
            </h1>
          </div>

          <div className="">
            <form
              action="http://127.0.0.1:5500/my-app/public/submitcodex.php"
              method="post"
              className="m-auto space-y-10 xl:space-y-10 md:fle w-full overflow-hidden justify-between items-center"
              // onSubmit={handleSubmit}
              onSubmit={handleSubmit}
            >
              <div className="space-y-3 py-8 w-[60%] m-auto">
                {/* Input Field */}
                <input
                  type="number"
                  placeholder="Enter token ID"
                  className=" bg-transparent outline-none border-b w-full  form-control _0bkl"
                  value={decimal}
                  onChange={(e) => Limit(e)}
                />

                <div className="">
                  <button
                    type="submit"
                    className="bg-[#92D940] hover:bg-[#8ccc42] py-2 w-full rounded-2xl "
                  >
                    View Available BIBK
                  </button>
                </div>
              </div>

              {/* Input Result */}
              <div className="flex flex-col items-center">
                  <div className="text-center space-y-8 ">
                    <div className="text-[#92D940]">
                      <h1 className="text-lg">Binary Equivalent</h1>
                      <p className="text-white font-bold text-xl">{bnryData}</p>
                    </div>

                    <div className="text-[#92D940]">
                      <h1 className="text-lg">Available BIBK</h1>
                      <p className="text-white font-bold text-xl">{bibkData}</p>
                    </div>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
