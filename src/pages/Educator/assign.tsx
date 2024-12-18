import { useEffect } from "react";
import { TableWithSearch } from "./table";
import DefaultLayout from "@/layouts/default";

export default function EducatorDashBoard() {
    useEffect(() => {
    console.log("Educator Dashboard");
    }, []);
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <TableWithSearch />




      </section>
    </DefaultLayout>
  );
}
