export const Button = ({ text, dispatch }) => {
  const addTag = () => {
    const action = {
      type: "ADD_TAG",
      payload: {
        text,
      },
    };
    dispatch(action);
  };

  return (
    <button
      onClick={addTag}
      className="bg-light-grayish-cyan-background inline hover:bg-[#5EA2A4] text-desaturated-dark-cyan hover:text-[#fff] px-2 pt-3 pb-[6px]"
    >
      <span className=" font-bold">{text}</span>
    </button>
  );
};
