"use client";

import { trackEvent } from "@/utils/gtm";

const FireActionButton = () => {
  const handleClick = () => {
    console.log("clicked");

    trackEvent("test_custom_event", {
      step: "info_step",
      company: "test_company",
      product: "test_product",
    });
  };

  return <button onClick={handleClick}>Fire Action</button>;
};

export default FireActionButton;
