import { useState, useEffect, useReducer } from "react";
import { jobsData } from "../data";
import headerMobile from "./assets/images/bg-header-mobile.svg";
import headerDesktop from "./assets/images/bg-header-desktop.svg";
import { Card } from "./components/Card.jsx";
import { FilterBar } from "./components/FilterBar.jsx";

const existeDuplicado = (state, action) => {
  const { payload } = action;
  const { text } = payload;
  let isDuplicated = false;
  state.map((tag) => {
    if (tag.text === text) isDuplicated = true;
  });
  return isDuplicated;
};

const verificarExistencia = (user, tags) => {
  const { role, level, languages, tools } = user;
  const arrList = [role, level, ...languages, ...tools];
  let exists = false;
  arrList.forEach((el) => {
    if (tags.includes(el)) exists = true;
  });
  return exists;
};

const filtrarPorTags = (setJobsState, filterState) => {
  const tags = filterState.map(({ text }) => text);
  const filteredData = jobsData.filter((user) =>
    verificarExistencia(user, tags)
  );
  setJobsState(filteredData);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TAG":
      return !existeDuplicado(state, action)
        ? [...state, action.payload]
        : state;
    case "DELETE_TAG":
      return state.filter(({ text }) => text !== action.payload.text);
    case "DELETE_ALL_TAGS":
      return [];
    default:
      return state;
  }
};

function App() {
  const [filterState, dispatch] = useReducer(reducer, []);
  const [jobsState, setJobsState] = useState(jobsData);
  const [windowSize, setWindowSize] = useState({
    w: window.innerWidth,
  });

  const { w } = windowSize;

  const handleResizeWindow = () => {
    let w = window.innerWidth;
    setWindowSize({
      w,
    });
  };

  useEffect(() => {
    document.body.onresize = handleResizeWindow;
    return () => {
      console.log("eliminado el evento");
      document.body.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    filterState.length
      ? filtrarPorTags(setJobsState, filterState)
      : setJobsState(jobsData);
  }, [filterState]);

  return (
    <>
      <div className="relative">
        <div className="bg-desaturated-dark-cyan">
          <img
            className="w-full object-cover max-h-64"
            src={w > 1024 ? headerDesktop : headerMobile}
            alt=""
          />
        </div>
      </div>
      <div className="px-8 py-16 bg-light-grayish-cyan-background space-y-16 relative">
        {filterState.length ? (
          <FilterBar filterState={filterState} dispatch={dispatch} />
        ) : null}
        {jobsState.map((job) => (
          <Card key={job.id} info={job} dispatch={dispatch} />
        ))}
      </div>
    </>
  );
}

export default App;
