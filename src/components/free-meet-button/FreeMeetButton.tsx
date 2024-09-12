"use cliet";
import { getCalApi } from "@calcom/embed-react";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
export default function FreeMeetButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "bezpłatna-konsultacja" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      className="bg-white rounded-3xl px-8 py-3 text-xl group font-semibold flex items-center hover:bg-black hover:text-white hover:shadow-md transition-all hover:shadow-white"
      data-cal-namespace="bezpłatna-konsultacja"
      data-cal-link="web-nova/bezpłatna-konsultacja"
      data-cal-config='{"layout":"month_view"}'
    >
      Bezpłatna konsultacja{" "}
      <ArrowRight className="ml-4 group-hover:translate-x-4 transition-transform" />
    </button>
  );
}
