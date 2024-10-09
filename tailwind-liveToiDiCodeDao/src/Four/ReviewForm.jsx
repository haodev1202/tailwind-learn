import React from "react";
import Input from "./Input";
import Review from "./Review";

const ReviewForm = () => {
  return (
    <div className="w-[42rem] space-y-8 rounded-[2.5rem] bg-white p-16 font-poppins text-base text-[#121633]">
      <div className="space-y-4">
        <h1 className="font-merri text-2xl font-black">Overall rating</h1>

        <div>
          <Review />
          <p className="mt-2 text-sm font-normal">Click to rate</p>
        </div>
      </div>

      <Input
        title="Review title"
        placeholder="Example: Easy to use"
        type="text"
      />

      <div className="space-y-6">
        <h1 className="font-medium">
          Would you recommend this product to a friend?
        </h1>
        <div className="flex gap-x-6">
          <div>
            <input
              type="radio"
              name="question"
              id="Yes"
              value="Yes"
              className="mr-2 scale-150 accent-[#121633]"
            />
            <label htmlFor="Yes" className="font-medium">
              Yes
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="question"
              id="No"
              value="No"
              className="mr-2 scale-150 accent-[#121633]"
            />
            <label htmlFor="No" className="font-medium">
              No
            </label>
          </div>
        </div>
      </div>

      <Input
        title="Product review"
        placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is ..."
        type="textarea"
      />

      <div className="flex gap-x-[0.56rem]">
        <div className="grow">
          <Input title="Nickname" placeholder="Example: bob27" type="text" />
        </div>
        <div className="grow">
          <Input
            title="Email address (will not be published)"
            placeholder="Example: your@email.com"
            type="text"
          />
        </div>
      </div>

      <div>
        <input
          type="radio"
          name="question"
          id="accept"
          value="accept"
          className="mr-2 scale-150 accent-[#121633]"
        />
        <label htmlFor="accept" className="font-medium">
          I accept the terms and conditions
        </label>
      </div>

      <p className="text-sm font-medium">
        You will be able to receive emails in connection with this review (eg if
        others comment on your review). All emails contain the option to
        unsubscribe. We can use the text and star rating from your review in
        other marketing.
      </p>

      <button className="max-w-[14rem] rounded bg-[#121633] p-4 font-medium text-white">
        Submit product review
      </button>
    </div>
  );
};

export default ReviewForm;
