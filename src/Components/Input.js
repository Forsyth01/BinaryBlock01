import { useEffect, useState } from "react";

const Input = () => {
  const [formData, setFormData] = useState();
  const [bnryData, setBnryData] = useState(null);
  const [bibkData, setBibkData] = useState(null);

  const [bnry, setBnry] = useState(null);
  const [bibk, setBibk] = useState(null);
  const [eset, setEset] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    var fData = new FormData();

    fData.append("submitNftId", "NftId");
    fData.append("decimal", formData);

    xhr.open("POST", "submitcodex.php");
    xhr.send(fData);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        if (response.eset) {
          setBnry(response.bnry);
          setBibk(response.bibk);
          showResponse();
        } else {
          showError(response.msg);
        }
      }
    };
  }

  function showError(error) {
    alert(error);
  }

  function showResponse() {
    setBibkData(bnry);
    setBnryData(bibk);
  }

  // function qSel(el) {
  //   return document.querySelector(el);
  // }

  // useEffect(() => {}, []);

  return (
    <div>
      <div className="_0shine">
        <div className="m-auto w-[80%] py-5 pb-12">
          <div className="pt-16 pb-28 md:pb-3 ">
            <h1 className="text-2xl text-left xl:font-semibold xl:text-3xl">
              View Available BIBK
            </h1>
          </div>

          <div className="md:flex justify-between gap-10 items-cente w-full space-y-5">
            <form
              method="post"
              className="space-y-3 xl:w-[70%] w-[100%] md:w-[60%] m-auto"
              onSubmit={handleSubmit}
            >
              {/* Input Field */}
              <input
                type="number"
                placeholder="Enter token ID"
                className=" bg-transparent outline-none border-b w-full form-control _0bkl"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
              />

              <div className="">
                <button
                  type="submit"
                  className="bg-[#92D940] hover:bg-[#8ccc42] py-2 rounded-2xl w-full"
                >
                  View Available BIBK
                </button>
              </div>

              {/* Input Result */}
              <div className=" right-[20%] py-10 space-y-8">
                <div className="text-[#92D940]">
                  <h1 className="text-lg">Binary Equivalent</h1>
                  <p className="text-white font-bold text-xl">{bnryData}</p>
                </div>

                <div className="text-[#92D940]">
                  <h1 className="text-lg">Available BIBK</h1>
                  <p className="text-white font-bold text-xl">{bibkData}</p>
                </div>
              </div>
            </form>

            <div className="">
              <img
                src="/img/Buttonn.png"
                alt=""
                className=" xl:h-[50vh m-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
