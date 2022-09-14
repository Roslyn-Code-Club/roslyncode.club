import { getSession } from "next-auth/react";
import dayjs from "dayjs";
import { noMeetings } from "../data/noMeetings";
import pepesleep from "../../public/img/pepesleep.gif";
import Image from "next/image";
const wedForm = "https://docs.google.com/forms/d/e/1FAIpQLSeL9vX0fFXSQmTvCRNKHhae90P27DH4cGzVlJ7cD85bLEepUQ/viewform";

export default function Attendance() {
  const today = new Date();
  let noMeeting;
  noMeetings.forEach((d) =>
    dayjs(d).isSame(today, "day") ? (noMeeting = true) : (noMeeting = false)
  );
  const dayOfWeek = new Date().toLocaleString("default", { weekday: "long" });
  let formElement;
  if (dayOfWeek === "Wednesday" && noMeeting != true) {
    formElement = (
      <iframe
        className="overflow- shadow-lg rounded-lg w-[95vw] max-w-none h-[60vh] sm:w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
        src={`${wedForm}`}
      />
    );
  } else if (dayOfWeek === "Friday" && noMeeting != true) {
    formElement = (
      <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-tight py-8 w-full text-center">
        Place Friday Form Here
      </h1>
    );
  } else {
    formElement = (
      <>
        <h1 className="text-5xl md:text-6xl 2xl:text-7xl font-bold tracking-tight py-8 w-full text-center">
          {`No meeting today :(`}
        </h1>
        <Image src={pepesleep} alt="Pepe Sleep" draggable="false" />
      </>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen h-auto">
      {formElement}
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
