import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface SocialMediaProps {
  linkUrl: string;
  imageUrl: string;
  label: string;
}
const SocialMedia: FC<SocialMediaProps> = ({ linkUrl, imageUrl, label }) => {
  return (
    <Link className="social-media" href={linkUrl}>
      <div className="socia-media__image-wrapper">
        <Image src={imageUrl} alt="social media" fill />
      </div>
      <span className="socia-media__label">{label}</span>
    </Link>
  );
};

export default SocialMedia;
