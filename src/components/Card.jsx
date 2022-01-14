import { Button } from "./Button";
import PhotoSnap from "../../images/photosnap.svg";
export const Card = ({ info, dispatch }) => {
  const {
    id,
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = info;

  return (
    <div
      className={`${
        featured && "border-l-[6px] border-[#5DA4A5]"
      } bg-[#fff] px-[40px] py-[32px] shadow-xl rounded-md relative`}
    >
      <div className="inline-flex flex-col lg:flex-row lg:justify-between lg:items-center lg:flex">
        <div className="lg:flex lg:gap-6">
          <div className="rounded-lg absolute lg:static -top-8 left-8">
            <img
              className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] object-cover"
              src={logo}
              alt={`${company} logo`}
            />
          </div>
          <div className="space-y-2">
            <div className="flex gap-4 flex-wrap items-baseline">
              <h2 className="text- text-desaturated-dark-cyan font-bold">
                {company}
              </h2>
              <div className="flex gap-2 flex-wrap items-baseline">
                {isNew && (
                  <div className="px-[8px] pt-[6px] pb-[3px] rounded-full bg-desaturated-dark-cyan">
                    <span className="text-[#fff] text-[12px] ">NEW!</span>
                  </div>
                )}
                {featured && (
                  <div className="p-[8px] pt-[6px] pb-[3px] rounded-full bg-very-dark-grayish-cyan ">
                    <span className="text-[#fff] text-[12px]">FEATURED</span>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h1 className="font-bold text-[18px]">{position}</h1>
            </div>
            <div>
              <p className="text-gray">{`${postedAt} ∘ ${contract} ∘ ${location}`}</p>
            </div>
          </div>
        </div>
        <div className="lg:border-none border-b-[1px] border-[#CCCECE] my-4"></div>
        <div className="flex flex-wrap gap-4">
          <Button text={role} dispatch={dispatch} />
          <Button text={level} dispatch={dispatch} />
          {languages.map((language) => (
            <Button
              key={language}
              text={language}
              id={id}
              dispatch={dispatch}
            />
          ))}
          {tools.map((tools) => (
            <Button key={tools} text={tools} id={id} dispatch={dispatch} />
          ))}
        </div>
      </div>
    </div>
  );
};
