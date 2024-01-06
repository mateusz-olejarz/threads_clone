import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="grid place-items-center mt-20">
      <SignUp />
    </section>
  );
}
