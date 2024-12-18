"use client";

import { useRouter } from "next/navigation";

import Lottie from "react-lottie-player";

import { Button } from "@/lib/components/client";

import { LOTTIE_ANIMATION_404 } from "@/lib/assets";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <main className="w-full h-full bg-yellow_500 flex items-center justify-center select-none">
      <section className="w-[40%] min-w-[30rem] py-[4rem] px-[2rem] flex flex-col gap-[2rem] bg-white_500 rounded-16">
        <h1 className="w-full text-center text-big font-bold">
          페이지에 문제가 있어요!
        </h1>

        <p className="w-full text-gray_500 text-large font-semibold text-center">
          이게바로 404!
        </p>

        <Lottie
          animationData={LOTTIE_ANIMATION_404}
          className="w-full"
          play
          loop
        />

        <div className="w-full flex justify-center gap-[2rem]">
          <Button
            className="w-[12rem] bg-red_500 text-white_500"
            onClick={() => router.back()}
          >
            이전 페이지
          </Button>

          <Button
            className="w-[12rem] bg-green_500 text-white_500"
            onClick={() => router.push("/")}
          >
            홈 으로
          </Button>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
