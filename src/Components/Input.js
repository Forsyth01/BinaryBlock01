import { useEffect, useState } from "react";
import $ from "jquery";
import axios from "axios";

const Input = () => {
  const [bnryData, setBnryData] = useState(null);
  const [bibkData, setBibkData] = useState(null);

  const [eset, setEset] = useState(false);
  const [decimal, setDecimal] = useState("");
  const MyBackgroundImage = "/img/Buttonn.png";

  const Limit = (e) => {
    decimal >= 10000 ? setDecimal(9999) : setDecimal(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios
        .post(`https://binaryblock.io/binary/submitcodex.php`, {
          submit: "",
          decimal: Number(decimal),
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.eset) {
            setBibkData(response.data.bibk);
            setBnryData(response.data.bnry);
          } else {
            alert(response.data.msg);
          }
        })
        .catch((error) => {
          if (error.response) {
            alert(error.response.data);
          } else {
            alert(error.message);
          }
        });
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div className="">
      <div className="_0shine">
        <div className="m-auto  p-10 ">
          <div className="py-10">
            <h1 className="text-[28px] font-semibold xl:text-[48px]  xl:px-0">
              View Available $BIBK
            </h1>
          </div>

          <div className="">
            <form
              action="http://127.0.0.1:5500/my-app/public/submitcodex.php"
              method="post"
              className="m-auto  md:flex items-center justify-between w-full gap-4"
              // onSubmit={handleSubmit}
              onSubmit={handleSubmit}
            >
              <div className="space-y-3 py-8 w-full ">
                {/* Input Field */}
                <div className="">
                  <input
                    type="number"
                    placeholder="Enter token ID"
                    className=" bg-transparent outline-none border-b w-full form-control _0bkl"
                    value={decimal}
                    onChange={(e) => Limit(e)}
                  />
                </div>
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
              <div className="w-full m-auto flex justify-end">
                <div
                  className="xl:w-[400px] h-[400px] w-[350px] md:w-[400px] "
                  style={{
                    backgroundImage: `url(${MyBackgroundImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",

                    // height: "400px",
                    // width: "400px",
                  }}
                >
                  <div className="flex flex-col h-[50vh] md:h-[20vh] xl:h-[50vh] justify-center space-y-2">
                    <div className="text-center space-y-8 ">
                      <div className="text-[#92D940]">
                        <h1 className="text-[16px]">Binary Equivalent</h1>
                        <h1 className="text-white font-bold text-[36px] no">
                          {bnryData}
                        </h1>
                      </div>

                      <div className="text-[#92D940] ">
                        <h1 className="text-[16px]">Available</h1>
                        <h1 className="text-white font-bold text-[48px] no">
                          {bibkData}
                        </h1>
                        {bibkData && (
                          <p className="text-[14px] no text-white">BIBK</p>
                        )}
                      </div>
                    </div>
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
