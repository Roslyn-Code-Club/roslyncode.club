import Link from "next/link";
import Image from "next/image";
import placeholder from "../../../public/img/roslyncodeclub.svg";
import { parseCategory } from "../../utils/parseCategory";

export default function Workshop({ data }) {
  return (
    <>
      <Link href={`/workshops/${data.slug}`}>
        <div className="bg-gray-100 dark:bg-darkbgcontrast flex flex-col gap-y-2 items-center justify-around p-8 w-full rounded-lg shadow-lg h-full cursor-pointer hover:translate-y-[-0.125rem] transition-[3s] ease-linear">
          <div className="p-2">
            {parseCategory(data.category) == "placeholder" ? (
              <div className="relative w-16 sm:w-24 h-16 sm:h-24">
                <Image
                  src={placeholder}
                  alt={data.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center center"
                  draggable="false"
                />
              </div>
            ) : (
              <div className="relative w-16 sm:w-24 h-16 sm:h-24">
                <Image
                  src={parseCategory(data.category)}
                  alt={data.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center center"
                  draggable="false"
                />
              </div>
            )}
          </div>
          <h1 className="text-center text-2xl md:text-3xl font-semibold tracking-tighter">
            {data.title}
          </h1>
        </div>
      </Link>
    </>
  );
}
