import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-16">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>This is the&nbsp;</span>
          <span className={title({ color: "primary" })}>real&nbsp;</span>
          <br />
          <span className={title()}>
            among us game.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            And I'm the impostor.
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
