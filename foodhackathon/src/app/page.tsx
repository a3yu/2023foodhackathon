import Image from "next/image";
import Example from "./Example";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold">Hello</h1>
      <Example />
    </main>
  );
}
