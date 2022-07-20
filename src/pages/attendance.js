import { getSession } from "next-auth/react";
import dayjs from "dayjs";
import { noMeetings } from "../data/noMeetings";
import pepesleep from "../../public/img/pepesleep.gif";
import Image from "next/image";

export default function Attendance() {
  const today = new Date();
  let noMeeting;
  noMeetings.forEach((d) =>
    dayjs(d).isSame(today, "day") ? (noMeeting = true) : (noMeeting = false)
  );
  const dayOfWeek = new Date().toLocaleString("default", { weekday: "long" });
  return (
    <div className="flex flex-col justify-center items-center min-h-screen h-auto">
      {dayOfWeek === "Wednesday" && noMeeting != true ? (
        <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight py-8 w-full text-center">
          Place Form Here
        </h1>
      ) : (
        <>
          <h1 className="text-5xl md:text-6xl 2xl:text-7xl font-bold tracking-tight py-8 w-full text-center">
            {`No meeting today :(`}
          </h1>
          <Image src={pepesleep} alt="Pepe Sleep" draggable="false" />
        </>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/sign-in",
      },
    };
  }
  return {
    props: { session },
  };
}
