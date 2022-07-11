import siteMetadata from "../../data/siteMetadata";

export default function Footer() {
  const startYear = new Date("July 7, 2022").getFullYear();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="h-20 w-full bg-roslyn text-white py-4 flex items-center justify-center">
        <div className="w-full max-w-5xl text-center">
          <a
            href="https://szhao.dev"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold tracking-tight"
          >
            &copy;{" "}
            {startYear == currentYear
              ? currentYear
              : `${startYear}-${currentYear}`}{" "}
            Stanley Zhao
          </a>
          <h1 className="text-xs tracking-tighter">
            No part of this website may be reproduced or commercialized in any
            manner without prior written permission.{" "}
            <a
              href={siteMetadata.license}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Learn More
            </a>
            .
          </h1>
        </div>
      </footer>
    </>
  );
}
