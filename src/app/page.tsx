"use client";
import TimeLine from "@/components/TimeLine";
import Main from "@/components/Main";
import Controller from "@/components/Controller";
import Technology from "@/components/Technology";

export default function Home() {
  return (
    <div className="px-2">
      <Controller />
      <Main />
      <TimeLine />
      {/*<Projects />*/}
      <Technology />
      {/*<Contact />*/}
    </div>
  );
}
