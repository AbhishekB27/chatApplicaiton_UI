import React from "react";

const SideBar = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      {Array(5)
        .fill(0)
        .map((item,index) => {
          return (
            <div className="flex gap-1 justify-start items-center border-b p-2 hover:bg-slate-500/10 cursor-pointer">
              <div className={`before:content-[''] relative before:absolute before:bottom-[0.2rem] before:right-[0.2rem] before:w-[1rem] before:h-[1rem] ${index%2===0 ? 'before:bg-green-400 before:ring-2 before:ring-white' : 'before:bg-slate-300'} before:rounded-full`}>
                {" "}
                <img
                  className="w-[4rem] h-[4rem]"
                  src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=Auburn&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelGreen&eyeType=Wink&eyebrowType=UpDown&mouthType=Default&skinColor=Pale"
                />{" "}
              </div>{" "}
              <div className="flex flex-col justify-center items-start leading-[1.2]">
                {" "}
                <span className="font-medium">John Doe</span>{" "}
                <span className="text-sm">Hi there, How are you?</span>{" "}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SideBar;
