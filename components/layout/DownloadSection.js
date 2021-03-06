import React from "react";
import Image from "next/image";
import Link from "next/link";
import mobile from "../../public/images/mobileApp-photo.png";
import appstore from "../../public/images/appstore.png";
import playstore from "../../public/images/playstore.png";
const appstoreURL = "https://apps.apple.com/ph/app/hup-soon-cheong/id993107830";
const playstoreURL =
  "https://play.google.com/store/apps/details?id=com.hupsooncheong.mobileapp";

const DownloadSection = () => {
  return (
    <div className="flex justify-between items-center py-24">
      <div>
        <Image src={mobile} width={480} height={520} alt='HSC logo' />
      </div>
      <div className="grid grid-row-3">
        <p className="text-3xl row-span-2">Track better with mobile app</p>
        <div className="flex justify-between items-center pt-10">
          <Link href={appstoreURL}>
            <a>
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
            <a>
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
