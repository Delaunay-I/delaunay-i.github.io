import React from "react";

const nums = [1, 2, 3, 4, 5];

const RateInput = ({ rating, setRating, setSubmit }) => {
  return (
    <div className="bg-card flex flex-col gap-7 rounded-3xl p-8 sm:w-[430px]">
      <div className="w-fit grow-0 rounded-full bg-secondary p-3">
        <img
          src="/projects/06/icon-star.svg"
          alt="star icon"
          className="w-[15px]"
        />
      </div>
      <div className="">
        <p className="mb-2 text-[25px] font-[500]">How did we do?</p>
        <p className="text-[15px] text-primary">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="flex justify-between">
        {nums.map((num) => (
          <button
            className={`${rating >= num ? "bg-selected text-white" : "bg-secondary text-primary"} rounded-full  px-5  py-3`}
            onClick={(prev) => setRating(num)}
          >
            {num}
          </button>
        ))}
      </div>
      <button
        className="bg-button rounded-full py-2 font-semibold tracking-[0.13em]"
        onClick={() => setSubmit(true)}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default RateInput;
