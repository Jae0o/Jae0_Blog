"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { ROUTE_PATH } from "@/lib/constants";
import { PostData } from "@/lib/types";

import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

interface HomePostItemProps {
  post: PostData;
}

const options_style =
  "py-[0.4rem] px-[1.2rem] bg-yellow_500 shadow-small rounded-[20rem] text-semiSmall font-bold text-nowrap tracking-[0.1rem]";

const HomePostItem = ({ post }: HomePostItemProps) => {
  const router = useRouter();

  return (
    <motion.li
      className="w-[32rem] p-[2rem] flex flex-col gap-[1rem] rounded-[1.2rem] select-none cursor-pointer"
      whileHover={{ scale: 1.1 }}
      onClick={() => router.push(ROUTE_PATH.POST_DETAIL(post.id))}
    >
      <div className="w-[28rem] h-[21rem] relative rounded-[1.2rem] shadow-small">
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={280}
          height={210}
          className="w-[28rem] h-[21rem] rounded-[1.2rem] object-cover"
        />

        <p
          className={twMerge(
            options_style,
            "absolute top-[1.6rem] left-[-0.8rem]",
          )}
        >
          {post.createAt}
        </p>

        <p
          className={twMerge(
            options_style,
            "absolute bottom-[1rem] left-[1rem]",
          )}
        >
          {post.category}
        </p>
      </div>

      <ul className="py-[0.6rem] px-[0.3rem] w-full h-fit flex items-center gap-[0.6rem] overflow-scroll scrollbar-hide">
        {post.tag.map(tag => (
          <li
            key={tag}
            className={twMerge(options_style, "bg-green_500")}
          >
            {tag}
          </li>
        ))}
      </ul>

      <h2 className="w-[28rem] h-[6rem] text-large font-semiBold line-clamp-2 overflow-hidden leading-[1.5] break-keep">
        {post.title}
      </h2>
    </motion.li>
  );
};

export default HomePostItem;
