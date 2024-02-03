import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <p>Home page</p>
      <SignOutButton />
    </main>
  );
}
