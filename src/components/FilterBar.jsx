import removeIcon from "../../images/icon-remove.svg";

const ButtonTag = ({ text, dispatch }) => {
  const handleDeleteTag = () => {
    const action = {
      type: "DELETE_TAG",
      payload: {
        text,
      },
    };
    dispatch(action);
  };

  return (
    <div className="flex flex-wrap gap-2 items-center bg-light-grayish-cyan-background text-desaturated-dark-cyan pl-2 ">
      <span className=" font-bold">{text}</span>
      <button
        onClick={handleDeleteTag}
        className="w-10 bg-[#5CA1A4]  hover:bg-[#303E3E] py-[10px]  pl-[11.75px] rounded-br-md rounded-tr-md"
      >
        <img src={removeIcon} alt="xd" />
      </button>
    </div>
  );
};

export const FilterBar = ({ filterState, dispatch }) => {
  const handleDeleteAll = () => {
    dispatch({ type: "DELETE_ALL_TAGS" });
  };

  return (
    <div className="bg-[#fff] rounded-md flex flex-wrap justify-between items-center p-8 -mt-28 gap-2">
      <div className="flex flex-wrap  gap-4">
        {filterState.map(({ text }) => (
          <ButtonTag key={text} text={text} dispatch={dispatch} />
        ))}
      </div>
      <button
        onClick={handleDeleteAll}
        className="text-desaturated-dark-cyan border-b-2 border-[transparent] hover:border-y-gray"
      >
        Clear
      </button>
    </div>
  );
};
