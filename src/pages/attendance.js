import { getSession } from "next-auth/react";
import dayjs from "dayjs";
var isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);
import { noMeetings } from "../data/noMeetings";
import pepesleep from "../../public/img/pepesleep.gif";
import Image from "next/image";
const attendanceForm =
  "https://docs.google.com/forms/d/e/1FAIpQLSeL9vX0fFXSQmTvCRNKHhae90P27DH4cGzVlJ7cD85bLEepUQ/viewform";

export default function Attendance() {
  const today = new Date();
  let dayjsObj = dayjs(today);
  let noMeeting;
  noMeetings.forEach((d) =>
    dayjs(d).isSame(today, "day") ? (noMeeting = true) : (noMeeting = false)
  );
  const dayOfWeek = new Date().toLocaleString("default", { weekday: "long" });
  let formElement;
  if (dayOfWeek === "Wednesday" && noMeeting != true) {
    if (
      dayjsObj.isBetween(
        dayjs(today.setHours(15, 45)),
        dayjs(today.setHours(16, 30))
      )
    ) {
      formElement = (
        <>
          <iframe
            className="overflow-hidden shadow-lg rounded-xl w-[95vw] max-w-none h-[60vh] sm:w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeL9vX0fFXSQmTvCRNKHhae90P27DH4cGzVlJ7cD85bLEepUQ/viewform?embedded=true"
          >
            Loading…
          </iframe>
          <h1 className="font-semibold italic">
            {`If the form isn't loading for you, click `}
            <a className="text-roslyn font-bold" href={attendanceForm}>
              here
            </a>
          </h1>
        </>
      );
    } else {
      formElement = (
        <>
          <span className="text-5xl md:text-6xl 2xl:text-7xl font-bold tracking-tight p-8 w-full text-center">
            {`Meetings are from 3:45 PM to 4:30 PM`}
          </span>
          <Image src={pepesleep} alt="Pepe Sleep" draggable="false" />
        </>
      );
    }
  } else if (dayOfWeek === "Friday" && noMeeting != true) {
    if (
      dayjsObj.isBetween(
        dayjs(today.setHours(14, 44)),
        dayjs(today.setHours(15, 30))
      )
    ) {
      formElement = (
        <>
          <iframe
            className="overflow-hidden shadow-lg rounded-xl w-[95vw] max-w-none h-[60vh] sm:w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeL9vX0fFXSQmTvCRNKHhae90P27DH4cGzVlJ7cD85bLEepUQ/viewform?embedded=true"
          >
            Loading…
          </iframe>
          <h1 className="font-semibold italic">
            {`If the form isn't loading for you, click `}
            <a className="text-roslyn font-bold" href={attendanceForm}>
              here
            </a>
          </h1>
        </>
      );
    } else {
      formElement = (
        <>
          <h1 className="text-5xl md:text-6xl 2xl:text-7xl font-bold tracking-tight py-8 w-full text-center">
            {`Meetings are from 2:44 PM to 3:30 PM`}
          </h1>
          <Image src={pepesleep} alt="Pepe Sleep" draggable="false" />
        </>
      );
    }
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
    <div className="flex flex-col justify-center items-center min-h-screen h-auto gap-y-10">
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
