import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/performance">Performance</Link>
        <Link href="/reliability">Reliability</Link>
        <Link href="/scale">Scale</Link>
      </div>
      <h1>Home Page</h1>
    </div>
  );
}
