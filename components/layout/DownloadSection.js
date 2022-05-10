import React from "react";
import Image from "next/image";
import Link from "next/link";
import mobile from "../../assets/images/mobileApp-photo.png";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
const appstoreURL = "https://apps.apple.com/ph/app/hup-soon-cheong/id993107830";
const playstoreURL =
  "https://play.google.com/store/apps/details?id=com.hupsooncheong.mobileapp";

const DownloadSection = () => {
  return (
    <div className="md:flex justify-between items-center p-10 md:pt-20">
      <Image src={mobile} width={480} height={520} alt='HSC logo' />
      <div className="grid grid-row-3 md:pl-4">
        <p className="font-bold text-xl text-center pt-6 md:text-2xl row-span-2">Track better with mobile app</p>
        <div className="flex justify-between items-center pt-8">
          <Link href={appstoreURL}>
            <a className="px-2">
              <Image
                alt='HSC logo'
                path={"/"}
                className="cursor-pointer"
                src={appstore}
                width={200}
                height={65}
              />
            </a>
          </Link>
          <Link href={playstoreURL}>
            <a className="px-2">
              <Image
                alt='HSC logo'
                path={"/"}
                className="cursor-pointer"
                src={playstore}
                width={200}
                height={65}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
