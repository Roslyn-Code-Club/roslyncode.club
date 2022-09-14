import siteMetadata from "../../data/siteMetadata";

export default function Footer() {
  const startYear = new Date("July 7, 2022").getFullYear();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="h-auto w-full bg-roslyn text-white p-4 flex items-center justify-center">
        <div className="w-full max-w-5xl text-center flex flex-col gap-4 items-center justify-center">
          <a
            href="https://szhao.dev"
            target="_blank"
            rel="noreferrer"
            className="text-lg font-semibold tracking-tight md:text-xl"
          >
            &copy;{" "}
            {startYear == currentYear
              ? currentYear
              : `${startYear}-${currentYear}`}{" "}
            Stanley Zhao
          </a>
          <div className="flex flex-row gap-8 justify-center items-center">
            <a href={siteMetadata.instagram} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-auto"
                stroke="none"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zM12 16.108a4.108 4.108 0 110-8.215 4.108 4.108 0 010 8.215zm4.271-7.418a.96.96 0 110-1.92.96.96 0 010 1.92zM14.667 12a2.667 2.667 0 11-5.334 0 2.667 2.667 0 015.334 0zM19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654C4.009 14.445 4 14.173 4 12c0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653C9.556 4.009 9.827 4 12 4s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"></path>
              </svg>
            </a>

            <a href={siteMetadata.facebook} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-auto"
                stroke="none"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
              </svg>
            </a>

            <a href={siteMetadata.github} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-auto"
                stroke="none"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82A7.616 7.616 0 0012 7.868a7.643 7.643 0 00-2.003.269c-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118a3.092 3.092 0 00-.824 2.147c0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385A8 8 0 0112 4a8 8 0 012.534 15.59z"></path>
              </svg>
            </a>
          </div>
          <h1 className="text-md tracking-tighter md:text-lg">
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
