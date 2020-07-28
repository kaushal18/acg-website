import { useCallback, useReducer, useEffect, useRef } from "react";

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

/**
 *
 * @param {HTMLElement} element html element to watch for
 * @returns {Object} loading indicator, fetched data, boolean to check if more data is to be fetched
 */
export default function useScroll(element) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: 0,
  });
  const { loading, data, after, more } = state;

  const load = useCallback(() => {
    console.log("fetching data...");
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

  return { loading, data, more };
}
