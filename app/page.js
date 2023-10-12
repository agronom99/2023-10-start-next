import Link from "next/link";

export default function Home() {
  return (
    <div className=" text-center m-5 text-5xl">
      <h1>Головна сторінка</h1>
      <div className=" m-5 text-xl text-cyan-800 ">
      <Link className=" mr-5" href="/client">Client</Link>
      <Link href="/client/show">Show</Link>

      </div>
    </div>
  );
}
