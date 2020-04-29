import React, { Fragment, useEffect } from "react";
import SponsoredPropertySectionOne from "./SponsoredPropertySectionOne";
import SponsoredPropertySectionTwo from "./SponsoredPropertySectionTwo";

const SponsoredProperty = () => {
  useEffect(() => {
    const bars = document.querySelectorAll(".bar-progress");

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function asyncForEach(array, callback) {
      for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
      }
    }

    asyncForEach(bars, async bar => {
      await sleep(100);

      var max = bar.dataset.max;
      var min = bar.dataset.min;
      var scale = bar.dataset.scale;

      var diff = max - min;
      var average = 100 / diff;
      var op = scale - min;
      var fop = op * average;

      bar.style.width = fop + "%";
    });
  });
  return (
    <Fragment>
      <SponsoredPropertySectionOne />
      <SponsoredPropertySectionTwo />
    </Fragment>
  );
};

export default SponsoredProperty;
