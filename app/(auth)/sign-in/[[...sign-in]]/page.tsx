import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="grid place-items-center mt-20">
      <SignIn />
    </section>
  );
}
