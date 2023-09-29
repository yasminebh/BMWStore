import React from "react";
import { customers } from "../constants";
import ReviewCard from "../components/reviewCard";

const Review = () => {
  return (
    <section className="max-container ">
        <h1 className="text-4xl font-montserrat font-bold text-center">
          what our <span className="text-blue-900"> Customer </span> say?
        </h1>
        <p className="info-text m-auto mt-4 max-w-lg text-center">
          hear genuine stories from our satisfied customers about their
          Exceptionnal experiences with us.
        </p>
      

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {customers.map((review) => (
          <ReviewCard
            key={review.name}
            imgURL={review.imgURL}
            name={review.custname}
            ratings={review.ratings}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default Review;
