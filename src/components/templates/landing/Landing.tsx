import React from "react";
import Image from "next/image";
function Landing() {
  return (
    <div className="grid grid-cols-1  gap-10  mt-20 lg:grid-cols-2">
      <div className="Landing-Text">
        <h1>
          Navigation the <br />
          digital landscape <br />
          for success
        </h1>
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        <div className="btn">
        <button >
            book a consultation
        </button>
        </div>
      </div>
      <div className="image flex justify-center items-center">
        <Image src={'/Illustration.png'} alt="landing image" width={600} height={600} />
      </div>
    </div>
  );
}

export default Landing;
