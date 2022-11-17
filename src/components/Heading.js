import React from "react";

const Heading = (props) => {
  return (
    <div>
      <h3 className="inline-block mt-6 mb-4 text-xl border-solid border-b-4 secondary-font">{props.title}</h3>
    </div>
  );
};

export default Heading;
