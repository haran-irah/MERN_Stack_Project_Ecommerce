import React from "react";
import Layout from "./index";

const PageNotFoundComponent = (props) => {
  return (
    <div className="flex flex-col items-center justify-center my-32 font-bold">
      <span>
         Welcome to Sivapriya Fancy
      </span>
      <span className="text-left text-gray-700 text-lg font-semibold tracking-wide max-w-lg">
           

"We pride ourselves on being the premier fancy store in Sirkali, 
renowned for our extensive collection of high-quality fancy and gift items. With a legacy spanning over 15 years, our commitment to excellence remains unwavering. Our store boasts a diverse range of products, catering to every taste and occasion. Whether you're looking for elegant accessories, stylish décor pieces, or unique gifts, we have something for everyone. Our dedicated team ensures that each item meets our stringent quality standards, offering you the best value for your money. Visit us today and experience the unparalleled service and unparalleled selection that have made us a beloved fixture in the community."
      </span>
    </div>
  );
};

const PageNotFound = (props) => {
  return <Layout children={<PageNotFoundComponent />} />;
};

export default PageNotFound;
