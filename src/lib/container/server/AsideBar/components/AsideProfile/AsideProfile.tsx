import Image from "next/image";

import { PROFILE_IMAGE } from "@/lib/assets";

import { ASIDE_ACTIONS } from "../../constants";
import { AsideProfileButton, AsideProfileTitle } from "./components";

const AsideProfile = () => {
  return (
    <article className="w-[22rem] h-[22rem] p-[1rem] mt-[6rem] flex flex-col justify-center items-center rounded-[1rem] bg-white_500 shadow-medium select-none">
      <header className="w-full h-[14rem] flex">
        <div className="w-[14rem] h-[14rem] rounded-[1rem] shadow-medium">
          <Image
            src={PROFILE_IMAGE}
            alt="프로필 메인 이미지"
            className="w-[14rem] h-[14rem] rounded-[1rem]"
          />
        </div>

        <div className="h-full grow-[1] flex flex-col justify-evenly items-center">
          {ASIDE_ACTIONS.map(({ action, path, Icon }) => (
            <AsideProfileButton
              key={action}
              path={path}
              action={action}
              Icon={Icon}
            />
          ))}
        </div>
      </header>

      <AsideProfileTitle />
    </article>
  );
};

export default AsideProfile;
