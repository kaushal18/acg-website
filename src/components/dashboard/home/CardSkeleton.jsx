import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    <div className="row mb14">
      <SkeletonTheme color="#636363" highlightColor="#858585">
        <div className="col-md-4">
          <div className="cardMachine">
            <div className="machineBar"></div>
            <div className="machineTitle">
              <Skeleton width={200} />
            </div>
            <div className="machineDetails">
              <div className="machineImg">
                <Skeleton height={110} width={120} />
              </div>
              <div className="machineDescription">
                <div className="machineMode">
                  <Skeleton width={50} />
                  <div className="txtMode">
                    <Skeleton width={75} />
                  </div>
                </div>
                <div className="machineSince">
                  <Skeleton width={50} />
                  <div className="txtMode">
                    <Skeleton width={75} />
                  </div>
                </div>
                <div className="onOffStatus">
                  <div
                    className="onoffTxt"
                    style={{ border: "none", background: "transparent" }}
                  >
                    <Skeleton />
                  </div>
                  <div
                    className="notifyTxt"
                    style={{ background: "transparent" }}
                  >
                    <Skeleton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="cardMachine">
            <div className="machineBar"></div>
            <div className="machineTitle">
              <Skeleton width={200} />
            </div>
            <div className="machineDetails">
              <div className="machineImg">
                <Skeleton height={110} width={120} />
              </div>
              <div className="machineDescription">
                <div className="machineMode">
                  <Skeleton width={50} />
                  <div className="txtMode">
                    <Skeleton width={75} />
                  </div>
                </div>
                <div className="machineSince">
                  <Skeleton width={50} />
                  <div className="txtMode">
                    <Skeleton width={75} />
                  </div>
                </div>
                <div className="onOffStatus">
                  <div
                    className="onoffTxt"
                    style={{ border: "none", background: "transparent" }}
                  >
                    <Skeleton />
                  </div>
                  <div
                    className="notifyTxt"
                    style={{ background: "transparent" }}
                  >
                    <Skeleton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="cardMachine">
            <div className="machineBar"></div>
            <div className="machineTitle">
              <Skeleton width={200} />
            </div>
            <div className="machineDetails">
              <div className="machineImg">
                <Skeleton height={110} width={120} />
              </div>
              <div className="machineDescription">
                <div className="machineMode">
                  <Skeleton width={50} />
                  <div className="txtMode">
                    <Skeleton width={75} />
                  </div>
                </div>
                <div className="machineSince">
                  <Skeleton width={50} />
                  <div className="txtMode">
                    <Skeleton width={75} />
                  </div>
                </div>
                <div className="onOffStatus">
                  <div
                    className="onoffTxt"
                    style={{ border: "none", background: "transparent" }}
                  >
                    <Skeleton />
                  </div>
                  <div
                    className="notifyTxt"
                    style={{ background: "transparent" }}
                  >
                    <Skeleton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default CardSkeleton;
