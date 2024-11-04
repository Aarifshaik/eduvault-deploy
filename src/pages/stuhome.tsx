import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import { FlipWords } from "@/components/ui/flip-words";

export default function StudentHomePage() {
  const user = localStorage.getItem("name");
  console.log("User in stuhome  "+user);
  const words = ["Inspire", "Explore", "Achieve", "Succeed"];
  
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ color: "violet" })}>Welcome Back, </h1>
          <br/>
          <h1 className={title({ color: "blue" })}>{user}</h1>
          <br/>
          <h1 className={title()}>Empower Your </h1>
          <br/>
          <h1 className={title({color: "green"})}>Learning,</h1>
          <FlipWords className={title()} words={words} />
          <br />
          <h1 className={title({ color: "cyan" })}>with Resources&nbsp;</h1>
          <h1 className={title()}>Curated for You</h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            "Unlock Knowledge, One Resource at a Time"
          </h4>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/student/resources"
          >
            Browse Resources
          </Link>
          <Link
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href="/student/bookshelf"
          >
            Go to Bookshelf
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Check your latest <Code color="primary">Assignments</Code> and{" "}
              <Code color="primary">Upcoming Events</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
}
