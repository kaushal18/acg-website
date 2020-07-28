import React, { useState, useMemo } from "react";
import CardMachine from "./CardMachine";
import CardSkeleton from "./CardSkeleton";
import MachineSideFilter from "./MachineSideFilter";
import useScroll from "../../../hooks/useScroll";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const MachineList = React.memo((props) => {
  const [element, setElement] = useState(null);
  const { loading, data, more } = useScroll(element);

  const memoisedRows = useMemo(() => {
    // convert into bootstrap grid
    const rowCount = Math.ceil(data.length / 3);
    let rows = [];
    for (let i = 0; i < rowCount; i++) {
      let cards = [];
      const cardsLeft = data.length - 3 * i;
      for (let j = 0; j < Math.min(cardsLeft, 3); j++) {
        cards.push(<CardMachine key={j} data={data[j + 3 * i]} />);
      }
      rows.push(
        <div key={i} className="row mb14">
          {cards}
        </div>
      );
    }
    return rows;
  }, [data]);

  const scrollTobottom = () => {
    // console.log(document.querySelector("#allMachineList").scrollHeight);
    const element = document.querySelector("#allMachineList");
    element.scrollTop = element.scrollHeight;
  };

  return (
    <div className="contentPart">
      <MachineSideFilter {...props} />

      <div
        // prettier-ignore
        className={`mapDiv allMachineList ${props.filterVisible ? "" : "expandMapWidth"}`}
        id="allMachineList"
        style={{ overflowY: "auto" }}
      >
        <div className="innerMachine">
          <SimpleBar style={{ maxHeight: 500, overflowX: "hidden" }}>
            {memoisedRows}

            {loading && <CardSkeleton />}

            {!loading && more && (
              <div ref={setElement} className="row mb14"></div>
            )}
          </SimpleBar>

          <div
            style={{ position: "absolute", bottom: "5%", left: "50%" }}
            onClick={scrollTobottom}
          >
            <button>bottom</button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MachineList;
