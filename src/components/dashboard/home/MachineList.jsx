import React, {
  useReducer,
  useCallback,
  useRef,
  useState,
  useMemo,
  useEffect,
} from "react";
import CardMachine from "./CardMachine";
import CardSkeleton from "./CardSkeleton";
import MachineSideFilter from "./MachineSideFilter";

const allData = new Array(14).fill(0).map((_val, i) => i + 1);
const perPage = 9;
const types = {
  start: "START",
  loaded: "LOADED",
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.start:
      return { ...state, loading: true };
    case types.loaded:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.newData],
        more: action.newData.length === perPage,
        after: state.after + action.newData.length,
      };
    default:
      throw new Error("invalid action");
  }
};

const MachineList = React.memo((props) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: 0,
  });
  const { loading, data, after, more } = state;

  const load = useCallback(() => {
    console.log("loading");
    dispatch({ type: types.start });
    // call api services here
    setTimeout(() => {
      const newData = allData.slice(after, after + perPage);
      dispatch({ type: types.loaded, newData });
    }, 2000);
  }, [after]);

  const loader = useRef(load);
  // oberserve the last row
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loader.current();
        }
      },
      { threshold: 1 }
    )
  );
  const [element, setElement] = useState(null);

  useEffect(() => {
    loader.current = load;
  }, [load]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

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
          {memoisedRows}

          {loading && <CardSkeleton />}

          {!loading && more && (
            <div ref={setElement} className="row mb14"></div>
          )}
        </div>
      </div>
    </div>
  );
});

export default MachineList;
