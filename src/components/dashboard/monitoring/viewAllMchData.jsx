import React, { Fragment } from "react";

const ViewAllMachineData = ({ label1, label2, label3, label4 }) => {
  return (
    <Fragment>
      <div class="machineSet1">
        <span>{label1}</span>
        <span class="unitTxt">{label3}</span>
      </div>
      <div class="machineSet4">
        <span>{label4}</span>
      </div>
      <div class="machineSet2">{label2}</div>
      <div class="machineSet3">
        <span class="machineTimes">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
              fill="white"
              fill-opacity="0.6"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
              fill="white"
              fill-opacity="0.6"
            />
          </svg>
        </span>
        <span class="timeTxt">02:30 IST | 28 Aug 19</span>
      </div>
    </Fragment>
  );
};

export default ViewAllMachineData;
