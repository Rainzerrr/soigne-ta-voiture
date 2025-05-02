import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import "./social-media.scss";

interface SocialMediaProps {
  linkUrl: string;
  imageUrl: string;
  label: string;
}
const SocialMedia: FC<SocialMediaProps> = ({ linkUrl, imageUrl, label }) => {
  return (
    <Link className="social-media" href={linkUrl}>
      <div className="social-media__image-wrapper">
        <Image src={imageUrl} alt="social media" fill />
      </div>
      <span className="social-media__label">{label}</span>
    </Link>
  );
};

export default SocialMedia;
export type { SocialMediaProps };
