import {
  EmailIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
} from "@/lib/components/server";

export const CONTACT_URL = {
  GIT_HUB: "https://github.com/Jae0o",
  INSTAGRAM: "https://www.instagram.com/jae_0o_/",
  EMAIL: "mailto:leey153@naver.com",
};

export const CONTACT_DATA = [
  { url: CONTACT_URL.GIT_HUB, Icon: <GithubLogoIcon /> },
  { url: CONTACT_URL.INSTAGRAM, Icon: <InstagramLogoIcon /> },
  { url: CONTACT_URL.EMAIL, Icon: <EmailIcon /> },
];
