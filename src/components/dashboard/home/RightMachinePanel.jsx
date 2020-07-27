import React from "react";
import machineImage from "../images/machineList1.png";

const RightMachinePanel = React.memo((props) => {
  const { selectedMarker, setMarkerState } = props;
  // fetch machines corresponding to this marker
  console.log(selectedMarker);

  return (
    <div className="innerMachineDiv">
      <div className="backCloseDiv">
        <span
          className="closeIcon pointer"
          onClick={() =>
            setMarkerState((prevState) => ({ ...prevState, selected: null }))
          }
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5L5 15"
              stroke="#A6AAB4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 5L15 15"
              stroke="#A6AAB4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="machineListTxt">Machine List for:</span>
        <span className="machineAddress">
          Optimus Formulation Plant, Hyderabad
        </span>
        <span className="machineBack pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4998 11.6667L16.6665 7.5L12.4998 3.33334"
              stroke="#1684FC"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.33317 16.6667L3.33317 10.8333C3.33317 9.94928 3.68436 9.10143 4.30948 8.47631C4.9346 7.85119 5.78245 7.5 6.6665 7.5L16.6665 7.5"
              stroke="#1684FC"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div
        className="scrollDiv longEnough mCustomScrollbar"
        data-mcs-theme="dark"
      >
        <div className="row">
          <div className="col-md-12">
            <div className="cardMachineRight">
              <div className="machineTitle">
                <ul className="machineTitleUl">
                  <li>
                    <span className="statusCls"></span>
                    <span className="machineTxt">
                      Line 1/Protab 300-NXT/Serial No.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="machineDetails">
                <div className="machineRightImg">
                  <img src={machineImage} alt="" />
                </div>
                <div className="machineRightDescription">
                  <div className="machineModeRight">
                    <div className="modetextN">Mode:</div>
                    <div className="modetextB">NA</div>
                  </div>
                  <div className="machineSinceRight">
                    <div className="modetextN">Since:</div>
                    <div className="modetextB">NA</div>
                  </div>
                  <div className="onOffStatus">
                    <div className="onoffTxtRight">ON</div>
                    <div className="notifyTxt">
                      <span className="notifyIcon">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 2.75517C4.19873 2.6389 4.29298 2.54465 4.40925 2.54465C4.96758 2.54465 5.50305 2.76645 5.89785 3.16125C6.29265 3.55605 6.51444 4.09151 6.51444 4.64985C6.51444 4.76611 6.42019 4.86037 6.30393 4.86037C6.18766 4.86037 6.09341 4.76611 6.09341 4.64985C6.09341 4.20318 5.91597 3.77481 5.60013 3.45897C5.28429 3.14313 4.85592 2.96569 4.40925 2.96569C4.29298 2.96569 4.19873 2.87144 4.19873 2.75517Z"
                            fill="#D65166"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 1.28153C4.19873 1.16527 4.29298 1.07101 4.40925 1.07101C5.35842 1.07101 6.2687 1.44807 6.93987 2.11923C7.61103 2.79039 7.98808 3.70068 7.98808 4.64985C7.98808 4.76611 7.89383 4.86037 7.77756 4.86037C7.6613 4.86037 7.56704 4.76611 7.56704 4.64985C7.56704 3.81235 7.23435 3.00915 6.64215 2.41695C6.04995 1.82475 5.24675 1.49205 4.40925 1.49205C4.29298 1.49205 4.19873 1.3978 4.19873 1.28153Z"
                            fill="#D65166"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 4.43933C4.19873 4.20679 4.38724 4.01829 4.61977 4.01829C4.8523 4.01829 5.04081 4.20679 5.04081 4.43933C5.04081 4.67186 4.8523 4.86037 4.61977 4.86037C4.38724 4.86037 4.19873 4.67186 4.19873 4.43933Z"
                            fill="#D65166"
                          />
                          <path
                            d="M5.82346 6.75869C5.55663 6.50253 5.22523 6.18373 5.22523 4.93899C5.22523 4.02494 4.53169 3.26654 3.62228 3.12192C3.6666 3.06047 3.6903 2.98748 3.69019 2.91274C3.69019 2.70927 3.51838 2.54433 3.30643 2.54433C3.09449 2.54433 2.92267 2.70927 2.92267 2.91274C2.92267 2.99045 2.9478 3.06249 2.99059 3.12192C2.08117 3.26654 1.38763 4.02494 1.38763 4.93899C1.38763 6.18373 1.05613 6.50253 0.789294 6.75869C0.427732 7.10578 0.683976 7.70205 1.19633 7.70205H2.53891C2.53891 8.10898 2.88255 8.43887 3.30643 8.43887C3.73032 8.43887 4.07395 8.10898 4.07395 7.70205H5.41643C5.92776 7.70205 6.18576 7.10649 5.82346 6.75869ZM3.30643 7.97836C3.33188 7.97836 3.35628 7.98806 3.37427 8.00534C3.39226 8.02261 3.40237 8.04604 3.40237 8.07046C3.40237 8.09489 3.39226 8.11832 3.37427 8.13559C3.35628 8.15286 3.33188 8.16257 3.30643 8.16257C3.04193 8.16257 2.82673 7.95598 2.82673 7.70205H3.01861C3.01861 7.85441 3.14772 7.97836 3.30643 7.97836Z"
                            fill="#D65166"
                          />
                        </svg>
                      </span>
                      <span className="countNotify">24</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="cardMachineRight">
              <div className="machineTitle">
                <ul className="machineTitleUl">
                  <li>
                    <span className="statusCls"></span>
                    <span className="machineTxt">
                      Line 1/Protab 300-NXT/Serial No.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="machineDetails">
                <div className="machineRightImg">
                  <img src={machineImage} alt="" />
                </div>
                <div className="machineRightDescription">
                  <div className="machineModeRight">
                    <div className="modetextN">Mode:</div>
                    <div className="modetextB">NA</div>
                  </div>
                  <div className="machineSinceRight">
                    <div className="modetextN">Since:</div>
                    <div className="modetextB">NA</div>
                  </div>
                  <div className="onOffStatus">
                    <div className="onoffTxtRight">ON</div>
                    <div className="notifyTxt">
                      <span className="notifyIcon">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 2.75517C4.19873 2.6389 4.29298 2.54465 4.40925 2.54465C4.96758 2.54465 5.50305 2.76645 5.89785 3.16125C6.29265 3.55605 6.51444 4.09151 6.51444 4.64985C6.51444 4.76611 6.42019 4.86037 6.30393 4.86037C6.18766 4.86037 6.09341 4.76611 6.09341 4.64985C6.09341 4.20318 5.91597 3.77481 5.60013 3.45897C5.28429 3.14313 4.85592 2.96569 4.40925 2.96569C4.29298 2.96569 4.19873 2.87144 4.19873 2.75517Z"
                            fill="#D65166"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 1.28153C4.19873 1.16527 4.29298 1.07101 4.40925 1.07101C5.35842 1.07101 6.2687 1.44807 6.93987 2.11923C7.61103 2.79039 7.98808 3.70068 7.98808 4.64985C7.98808 4.76611 7.89383 4.86037 7.77756 4.86037C7.6613 4.86037 7.56704 4.76611 7.56704 4.64985C7.56704 3.81235 7.23435 3.00915 6.64215 2.41695C6.04995 1.82475 5.24675 1.49205 4.40925 1.49205C4.29298 1.49205 4.19873 1.3978 4.19873 1.28153Z"
                            fill="#D65166"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 4.43933C4.19873 4.20679 4.38724 4.01829 4.61977 4.01829C4.8523 4.01829 5.04081 4.20679 5.04081 4.43933C5.04081 4.67186 4.8523 4.86037 4.61977 4.86037C4.38724 4.86037 4.19873 4.67186 4.19873 4.43933Z"
                            fill="#D65166"
                          />
                          <path
                            d="M5.82346 6.75869C5.55663 6.50253 5.22523 6.18373 5.22523 4.93899C5.22523 4.02494 4.53169 3.26654 3.62228 3.12192C3.6666 3.06047 3.6903 2.98748 3.69019 2.91274C3.69019 2.70927 3.51838 2.54433 3.30643 2.54433C3.09449 2.54433 2.92267 2.70927 2.92267 2.91274C2.92267 2.99045 2.9478 3.06249 2.99059 3.12192C2.08117 3.26654 1.38763 4.02494 1.38763 4.93899C1.38763 6.18373 1.05613 6.50253 0.789294 6.75869C0.427732 7.10578 0.683976 7.70205 1.19633 7.70205H2.53891C2.53891 8.10898 2.88255 8.43887 3.30643 8.43887C3.73032 8.43887 4.07395 8.10898 4.07395 7.70205H5.41643C5.92776 7.70205 6.18576 7.10649 5.82346 6.75869ZM3.30643 7.97836C3.33188 7.97836 3.35628 7.98806 3.37427 8.00534C3.39226 8.02261 3.40237 8.04604 3.40237 8.07046C3.40237 8.09489 3.39226 8.11832 3.37427 8.13559C3.35628 8.15286 3.33188 8.16257 3.30643 8.16257C3.04193 8.16257 2.82673 7.95598 2.82673 7.70205H3.01861C3.01861 7.85441 3.14772 7.97836 3.30643 7.97836Z"
                            fill="#D65166"
                          />
                        </svg>
                      </span>
                      <span className="countNotify">24</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="cardMachineRight">
              <div className="machineTitle">
                <ul className="machineTitleUl">
                  <li>
                    <span className="statusCls"></span>
                    <span className="machineTxt">
                      Line 1/Protab 300-NXT/Serial No.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="machineDetails">
                <div className="machineRightImg">
                  <img src={machineImage} alt="" />
                </div>
                <div className="machineRightDescription">
                  <div className="machineModeRight">
                    <div className="modetextN">Mode:</div>
                    <div className="modetextB">NA</div>
                  </div>
                  <div className="machineSinceRight">
                    <div className="modetextN">Since:</div>
                    <div className="modetextB">NA</div>
                  </div>
                  <div className="onOffStatus">
                    <div className="onoffTxtRight">ON</div>
                    <div className="notifyTxt">
                      <span className="notifyIcon">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 2.75517C4.19873 2.6389 4.29298 2.54465 4.40925 2.54465C4.96758 2.54465 5.50305 2.76645 5.89785 3.16125C6.29265 3.55605 6.51444 4.09151 6.51444 4.64985C6.51444 4.76611 6.42019 4.86037 6.30393 4.86037C6.18766 4.86037 6.09341 4.76611 6.09341 4.64985C6.09341 4.20318 5.91597 3.77481 5.60013 3.45897C5.28429 3.14313 4.85592 2.96569 4.40925 2.96569C4.29298 2.96569 4.19873 2.87144 4.19873 2.75517Z"
                            fill="#D65166"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 1.28153C4.19873 1.16527 4.29298 1.07101 4.40925 1.07101C5.35842 1.07101 6.2687 1.44807 6.93987 2.11923C7.61103 2.79039 7.98808 3.70068 7.98808 4.64985C7.98808 4.76611 7.89383 4.86037 7.77756 4.86037C7.6613 4.86037 7.56704 4.76611 7.56704 4.64985C7.56704 3.81235 7.23435 3.00915 6.64215 2.41695C6.04995 1.82475 5.24675 1.49205 4.40925 1.49205C4.29298 1.49205 4.19873 1.3978 4.19873 1.28153Z"
                            fill="#D65166"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 4.43933C4.19873 4.20679 4.38724 4.01829 4.61977 4.01829C4.8523 4.01829 5.04081 4.20679 5.04081 4.43933C5.04081 4.67186 4.8523 4.86037 4.61977 4.86037C4.38724 4.86037 4.19873 4.67186 4.19873 4.43933Z"
                            fill="#D65166"
                          />
                          <path
                            d="M5.82346 6.75869C5.55663 6.50253 5.22523 6.18373 5.22523 4.93899C5.22523 4.02494 4.53169 3.26654 3.62228 3.12192C3.6666 3.06047 3.6903 2.98748 3.69019 2.91274C3.69019 2.70927 3.51838 2.54433 3.30643 2.54433C3.09449 2.54433 2.92267 2.70927 2.92267 2.91274C2.92267 2.99045 2.9478 3.06249 2.99059 3.12192C2.08117 3.26654 1.38763 4.02494 1.38763 4.93899C1.38763 6.18373 1.05613 6.50253 0.789294 6.75869C0.427732 7.10578 0.683976 7.70205 1.19633 7.70205H2.53891C2.53891 8.10898 2.88255 8.43887 3.30643 8.43887C3.73032 8.43887 4.07395 8.10898 4.07395 7.70205H5.41643C5.92776 7.70205 6.18576 7.10649 5.82346 6.75869ZM3.30643 7.97836C3.33188 7.97836 3.35628 7.98806 3.37427 8.00534C3.39226 8.02261 3.40237 8.04604 3.40237 8.07046C3.40237 8.09489 3.39226 8.11832 3.37427 8.13559C3.35628 8.15286 3.33188 8.16257 3.30643 8.16257C3.04193 8.16257 2.82673 7.95598 2.82673 7.70205H3.01861C3.01861 7.85441 3.14772 7.97836 3.30643 7.97836Z"
                            fill="#D65166"
                          />
                        </svg>
                      </span>
                      <span className="countNotify">24</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="cardMachineRight">
              <div className="machineTitle">
                <ul className="machineTitleUl">
                  <li>
                    <span className="statusCls"></span>
                    <span className="machineTxt">
                      Line 1/Protab 300-NXT/Serial No.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="machineDetails">
                <div className="machineRightImg">
                  <img src={machineImage} alt="" />
                </div>
                <div className="machineRightDescription">
                  <div className="machineModeRight">
                    <div className="modetextN">Mode:</div>
                    <div className="modetextB">NA</div>
                  </div>
                  <div className="machineSinceRight">
                    <div className="modetextN">Since:</div>
                    <div className="modetextB">NA</div>
                  </div>
                  <div className="onOffStatus">
                    <div className="onoffTxtRight">ON</div>
                    <div className="notifyTxt">
                      <span className="notifyIcon">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 2.75517C4.19873 2.6389 4.29298 2.54465 4.40925 2.54465C4.96758 2.54465 5.50305 2.76645 5.89785 3.16125C6.29265 3.55605 6.51444 4.09151 6.51444 4.64985C6.51444 4.76611 6.42019 4.86037 6.30393 4.86037C6.18766 4.86037 6.09341 4.76611 6.09341 4.64985C6.09341 4.20318 5.91597 3.77481 5.60013 3.45897C5.28429 3.14313 4.85592 2.96569 4.40925 2.96569C4.29298 2.96569 4.19873 2.87144 4.19873 2.75517Z"
                            fill="#D65166"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 1.28153C4.19873 1.16527 4.29298 1.07101 4.40925 1.07101C5.35842 1.07101 6.2687 1.44807 6.93987 2.11923C7.61103 2.79039 7.98808 3.70068 7.98808 4.64985C7.98808 4.76611 7.89383 4.86037 7.77756 4.86037C7.6613 4.86037 7.56704 4.76611 7.56704 4.64985C7.56704 3.81235 7.23435 3.00915 6.64215 2.41695C6.04995 1.82475 5.24675 1.49205 4.40925 1.49205C4.29298 1.49205 4.19873 1.3978 4.19873 1.28153Z"
                            fill="#D65166"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 4.43933C4.19873 4.20679 4.38724 4.01829 4.61977 4.01829C4.8523 4.01829 5.04081 4.20679 5.04081 4.43933C5.04081 4.67186 4.8523 4.86037 4.61977 4.86037C4.38724 4.86037 4.19873 4.67186 4.19873 4.43933Z"
                            fill="#D65166"
                          />
                          <path
                            d="M5.82346 6.75869C5.55663 6.50253 5.22523 6.18373 5.22523 4.93899C5.22523 4.02494 4.53169 3.26654 3.62228 3.12192C3.6666 3.06047 3.6903 2.98748 3.69019 2.91274C3.69019 2.70927 3.51838 2.54433 3.30643 2.54433C3.09449 2.54433 2.92267 2.70927 2.92267 2.91274C2.92267 2.99045 2.9478 3.06249 2.99059 3.12192C2.08117 3.26654 1.38763 4.02494 1.38763 4.93899C1.38763 6.18373 1.05613 6.50253 0.789294 6.75869C0.427732 7.10578 0.683976 7.70205 1.19633 7.70205H2.53891C2.53891 8.10898 2.88255 8.43887 3.30643 8.43887C3.73032 8.43887 4.07395 8.10898 4.07395 7.70205H5.41643C5.92776 7.70205 6.18576 7.10649 5.82346 6.75869ZM3.30643 7.97836C3.33188 7.97836 3.35628 7.98806 3.37427 8.00534C3.39226 8.02261 3.40237 8.04604 3.40237 8.07046C3.40237 8.09489 3.39226 8.11832 3.37427 8.13559C3.35628 8.15286 3.33188 8.16257 3.30643 8.16257C3.04193 8.16257 2.82673 7.95598 2.82673 7.70205H3.01861C3.01861 7.85441 3.14772 7.97836 3.30643 7.97836Z"
                            fill="#D65166"
                          />
                        </svg>
                      </span>
                      <span className="countNotify">24</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="cardMachineRight">
              <div className="machineTitle">
                <ul className="machineTitleUl">
                  <li>
                    <span className="statusCls"></span>
                    <span className="machineTxt">
                      Line 1/Protab 300-NXT/Serial No.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="machineDetails">
                <div className="machineRightImg">
                  <img src={machineImage} alt="" />
                </div>
                <div className="machineRightDescription">
                  <div className="machineModeRight">
                    <div className="modetextN">Mode:</div>
                    <div className="modetextB">NA</div>
                  </div>
                  <div className="machineSinceRight">
                    <div className="modetextN">Since:</div>
                    <div className="modetextB">NA</div>
                  </div>
                  <div className="onOffStatus">
                    <div className="onoffTxtRight">ON</div>
                    <div className="notifyTxt">
                      <span className="notifyIcon">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 2.75517C4.19873 2.6389 4.29298 2.54465 4.40925 2.54465C4.96758 2.54465 5.50305 2.76645 5.89785 3.16125C6.29265 3.55605 6.51444 4.09151 6.51444 4.64985C6.51444 4.76611 6.42019 4.86037 6.30393 4.86037C6.18766 4.86037 6.09341 4.76611 6.09341 4.64985C6.09341 4.20318 5.91597 3.77481 5.60013 3.45897C5.28429 3.14313 4.85592 2.96569 4.40925 2.96569C4.29298 2.96569 4.19873 2.87144 4.19873 2.75517Z"
                            fill="#D65166"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 1.28153C4.19873 1.16527 4.29298 1.07101 4.40925 1.07101C5.35842 1.07101 6.2687 1.44807 6.93987 2.11923C7.61103 2.79039 7.98808 3.70068 7.98808 4.64985C7.98808 4.76611 7.89383 4.86037 7.77756 4.86037C7.6613 4.86037 7.56704 4.76611 7.56704 4.64985C7.56704 3.81235 7.23435 3.00915 6.64215 2.41695C6.04995 1.82475 5.24675 1.49205 4.40925 1.49205C4.29298 1.49205 4.19873 1.3978 4.19873 1.28153Z"
                            fill="#D65166"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 4.43933C4.19873 4.20679 4.38724 4.01829 4.61977 4.01829C4.8523 4.01829 5.04081 4.20679 5.04081 4.43933C5.04081 4.67186 4.8523 4.86037 4.61977 4.86037C4.38724 4.86037 4.19873 4.67186 4.19873 4.43933Z"
                            fill="#D65166"
                          />
                          <path
                            d="M5.82346 6.75869C5.55663 6.50253 5.22523 6.18373 5.22523 4.93899C5.22523 4.02494 4.53169 3.26654 3.62228 3.12192C3.6666 3.06047 3.6903 2.98748 3.69019 2.91274C3.69019 2.70927 3.51838 2.54433 3.30643 2.54433C3.09449 2.54433 2.92267 2.70927 2.92267 2.91274C2.92267 2.99045 2.9478 3.06249 2.99059 3.12192C2.08117 3.26654 1.38763 4.02494 1.38763 4.93899C1.38763 6.18373 1.05613 6.50253 0.789294 6.75869C0.427732 7.10578 0.683976 7.70205 1.19633 7.70205H2.53891C2.53891 8.10898 2.88255 8.43887 3.30643 8.43887C3.73032 8.43887 4.07395 8.10898 4.07395 7.70205H5.41643C5.92776 7.70205 6.18576 7.10649 5.82346 6.75869ZM3.30643 7.97836C3.33188 7.97836 3.35628 7.98806 3.37427 8.00534C3.39226 8.02261 3.40237 8.04604 3.40237 8.07046C3.40237 8.09489 3.39226 8.11832 3.37427 8.13559C3.35628 8.15286 3.33188 8.16257 3.30643 8.16257C3.04193 8.16257 2.82673 7.95598 2.82673 7.70205H3.01861C3.01861 7.85441 3.14772 7.97836 3.30643 7.97836Z"
                            fill="#D65166"
                          />
                        </svg>
                      </span>
                      <span className="countNotify">24</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="cardMachineRight">
              <div className="machineTitle">
                <ul className="machineTitleUl">
                  <li>
                    <span className="statusCls"></span>
                    <span className="machineTxt">
                      Line 1/Protab 300-NXT/Serial No.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="machineDetails">
                <div className="machineRightImg">
                  <img src={machineImage} alt="" />
                </div>
                <div className="machineRightDescription">
                  <div className="machineModeRight">
                    <div className="modetextN">Mode:</div>
                    <div className="modetextB">NA</div>
                  </div>
                  <div className="machineSinceRight">
                    <div className="modetextN">Since:</div>
                    <div className="modetextB">NA</div>
                  </div>
                  <div className="onOffStatus">
                    <div className="onoffTxtRight">ON</div>
                    <div className="notifyTxt">
                      <span className="notifyIcon">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 2.75517C4.19873 2.6389 4.29298 2.54465 4.40925 2.54465C4.96758 2.54465 5.50305 2.76645 5.89785 3.16125C6.29265 3.55605 6.51444 4.09151 6.51444 4.64985C6.51444 4.76611 6.42019 4.86037 6.30393 4.86037C6.18766 4.86037 6.09341 4.76611 6.09341 4.64985C6.09341 4.20318 5.91597 3.77481 5.60013 3.45897C5.28429 3.14313 4.85592 2.96569 4.40925 2.96569C4.29298 2.96569 4.19873 2.87144 4.19873 2.75517Z"
                            fill="#D65166"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 1.28153C4.19873 1.16527 4.29298 1.07101 4.40925 1.07101C5.35842 1.07101 6.2687 1.44807 6.93987 2.11923C7.61103 2.79039 7.98808 3.70068 7.98808 4.64985C7.98808 4.76611 7.89383 4.86037 7.77756 4.86037C7.6613 4.86037 7.56704 4.76611 7.56704 4.64985C7.56704 3.81235 7.23435 3.00915 6.64215 2.41695C6.04995 1.82475 5.24675 1.49205 4.40925 1.49205C4.29298 1.49205 4.19873 1.3978 4.19873 1.28153Z"
                            fill="#D65166"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.19873 4.43933C4.19873 4.20679 4.38724 4.01829 4.61977 4.01829C4.8523 4.01829 5.04081 4.20679 5.04081 4.43933C5.04081 4.67186 4.8523 4.86037 4.61977 4.86037C4.38724 4.86037 4.19873 4.67186 4.19873 4.43933Z"
                            fill="#D65166"
                          />
                          <path
                            d="M5.82346 6.75869C5.55663 6.50253 5.22523 6.18373 5.22523 4.93899C5.22523 4.02494 4.53169 3.26654 3.62228 3.12192C3.6666 3.06047 3.6903 2.98748 3.69019 2.91274C3.69019 2.70927 3.51838 2.54433 3.30643 2.54433C3.09449 2.54433 2.92267 2.70927 2.92267 2.91274C2.92267 2.99045 2.9478 3.06249 2.99059 3.12192C2.08117 3.26654 1.38763 4.02494 1.38763 4.93899C1.38763 6.18373 1.05613 6.50253 0.789294 6.75869C0.427732 7.10578 0.683976 7.70205 1.19633 7.70205H2.53891C2.53891 8.10898 2.88255 8.43887 3.30643 8.43887C3.73032 8.43887 4.07395 8.10898 4.07395 7.70205H5.41643C5.92776 7.70205 6.18576 7.10649 5.82346 6.75869ZM3.30643 7.97836C3.33188 7.97836 3.35628 7.98806 3.37427 8.00534C3.39226 8.02261 3.40237 8.04604 3.40237 8.07046C3.40237 8.09489 3.39226 8.11832 3.37427 8.13559C3.35628 8.15286 3.33188 8.16257 3.30643 8.16257C3.04193 8.16257 2.82673 7.95598 2.82673 7.70205H3.01861C3.01861 7.85441 3.14772 7.97836 3.30643 7.97836Z"
                            fill="#D65166"
                          />
                        </svg>
                      </span>
                      <span className="countNotify">24</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default RightMachinePanel;
