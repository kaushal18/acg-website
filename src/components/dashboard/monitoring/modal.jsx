import React, { useState } from "react";
import ViewAllMachineData from "./viewAllMchData";

const Modal = () => {
  //   const { visible } = props;
  return (
    // <div class={`modelboxopen ${visible ? "" : "hidden"}`}>
    <div class="modelboxopen">
      <div class="modelboxopenInnner" id="modelboxopenInnner2">
        <div class="wrapContent">
          <div class="containerIner2">
            <div class="popupCloseButton bbt">
              <h3 class="titleDiv">View All - Total Production Count</h3>
              <a href="javascript:void(0);" class="closepopup">
                &#x2715;
              </a>
            </div>
            <div class="contentPopup">
              <div class="download-bellIcon">
                <span class="downBtn">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.25 12.5V15.8333C18.25 16.2754 18.0744 16.6993 17.7618 17.0118C17.4493 17.3244 17.0254 17.5 16.5833 17.5H4.91667C4.47464 17.5 4.05072 17.3244 3.73816 17.0118C3.42559 16.6993 3.25 16.2754 3.25 15.8333V12.5"
                      stroke="#27A2F8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.58398 8.33334L10.7507 12.5L14.9173 8.33334"
                      stroke="#27A2F8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.75 12.5V2.5"
                      stroke="#27A2F8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="createBtn">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M14.9531 7.53331C14.9531 6.15419 14.4053 4.83155 13.4301 3.85636C12.4549 2.88117 11.1323 2.33331 9.75312 2.33331C8.374 2.33331 7.05136 2.88117 6.07617 3.85636C5.10098 4.83155 4.55312 6.15419 4.55312 7.53331C4.55312 13.6 1.95312 15.3333 1.95312 15.3333H10.5331"
                        stroke="#27A2F8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.2544 16.8645C11.1079 17.1171 10.8976 17.3268 10.6446 17.4725C10.3916 17.6182 10.1047 17.6949 9.81276 17.6949C9.52078 17.6949 9.23392 17.6182 8.9809 17.4725C8.72789 17.3268 8.5176 17.1171 8.37109 16.8645"
                        stroke="#27A2F8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <g clip-path="url(#clip1)">
                        <path
                          d="M15.7507 17.1667C18.0518 17.1667 19.9173 15.3012 19.9173 13C19.9173 10.6988 18.0518 8.83334 15.7507 8.83334C13.4495 8.83334 11.584 10.6988 11.584 13C11.584 15.3012 13.4495 17.1667 15.7507 17.1667Z"
                          fill="#27A2F8"
                          stroke="#27A2F8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.75 11.3333V14.6667"
                          stroke="#393939"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.084 13H17.4173"
                          stroke="#393939"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.75)"
                        />
                      </clipPath>
                      <clipPath id="clip1">
                        <rect
                          width="10"
                          height="10"
                          fill="white"
                          transform="translate(10.75 7.99999)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <div class="innerContentPopup">
                <div
                  class="descriptions mCustomScrollbar"
                  data-mcs-theme="dark"
                >
                  <ul class="ulMachinePopup">
                    <li>
                      <ViewAllMachineData
                        label1={"ON"}
                        label2={"Machine State"}
                        label3={""}
                        label4={""}
                      />
                    </li>
                    <li>
                      <ViewAllMachineData
                        label1={"3"}
                        label2={"Machine Mode"}
                        label3={""}
                        label4={"Standard"}
                      />
                    </li>
                    <li>
                      <ViewAllMachineData
                        label1={"100"}
                        label2={"Machine Speed"}
                        label3={"cy/m"}
                        label4={""}
                      />
                    </li>
                    <li>
                      <ViewAllMachineData
                        label1={"3000"}
                        label2={"Vaccum ON Time"}
                        label3={"ppr"}
                        label4={""}
                      />
                    </li>
                    <li>
                      <ViewAllMachineData
                        label1={"3000"}
                        label2={"Vaccum OFF Time"}
                        label3={"ppr"}
                        label4={""}
                      />
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>ON</span>
                      </div>
                      <div class="machineSet2">Machine State</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>3</span>
                      </div>
                      <div class="machineSet4">
                        <span>Standard</span>
                      </div>
                      <div class="machineSet2">Machine Mode</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>100</span>
                        <span class="unitTxt">cy/m</span>
                      </div>
                      <div class="machineSet2">Machine Speed</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>3000</span>
                        <span class="unitTxt">ppr</span>
                      </div>
                      <div class="machineSet2">Vaccum ON Time</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>3000</span>
                        <span class="unitTxt">ppr</span>
                      </div>
                      <div class="machineSet2">Vaccum OFF Time</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>ON</span>
                      </div>
                      <div class="machineSet2">Machine State</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>3</span>
                      </div>
                      <div class="machineSet4">
                        <span>Standard</span>
                      </div>
                      <div class="machineSet2">Machine Mode</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>100</span>
                        <span class="unitTxt">cy/m</span>
                      </div>
                      <div class="machineSet2">Machine Speed</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>3000</span>
                        <span class="unitTxt">ppr</span>
                      </div>
                      <div class="machineSet2">Vaccum ON Time</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>3000</span>
                        <span class="unitTxt">ppr</span>
                      </div>
                      <div class="machineSet2">Vaccum OFF Time</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>ON</span>
                      </div>
                      <div class="machineSet2">Machine State</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>3</span>
                      </div>
                      <div class="machineSet4">
                        <span>Standard</span>
                      </div>
                      <div class="machineSet2">Machine Mode</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>100</span>
                        <span class="unitTxt">cy/m</span>
                      </div>
                      <div class="machineSet2">Machine Speed</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>3000</span>
                        <span class="unitTxt">ppr</span>
                      </div>
                      <div class="machineSet2">Vaccum ON Time</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>3000</span>
                        <span class="unitTxt">ppr</span>
                      </div>
                      <div class="machineSet2">Vaccum OFF Time</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>ON</span>
                      </div>
                      <div class="machineSet2">Machine State</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>3</span>
                      </div>
                      <div class="machineSet4">
                        <span>Standard</span>
                      </div>
                      <div class="machineSet2">Machine Mode</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>100</span>
                        <span class="unitTxt">cy/m</span>
                      </div>
                      <div class="machineSet2">Machine Speed</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>3000</span>
                        <span class="unitTxt">ppr</span>
                      </div>
                      <div class="machineSet2">Vaccum ON Time</div>
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
                    </li>
                    <li>
                      <div class="machineSet1">
                        <span>3000</span>
                        <span class="unitTxt">ppr</span>
                      </div>
                      <div class="machineSet2">Vaccum OFF Time</div>
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
