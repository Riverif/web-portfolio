import Image from "next/image";
import profile from "@/public/profile.png";

export default function Home() {
  return (
    <main className="ml-64 mr-48 flex min-h-screen items-center justify-between">
      <div className="space-y-5">
        <h1 className="space-y-2 text-5xl">
          <p>Hello,</p>
          <p>
            {`I'm `}
            <span className="font-bold text-teal-500">Rifki Alfian</span>
          </p>
          <p>{`Fullstack Developer`}</p>
        </h1>
        <p className="text-2xl font-light">5+ Projects, 2+ Live Web Projects</p>
      </div>
      <Image src={profile} alt="profile" />
    </main>
  );
}
