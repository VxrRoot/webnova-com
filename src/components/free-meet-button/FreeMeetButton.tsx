"use client";
import { getCalApi } from "@calcom/embed-react";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
export default function FreeMeetButton(props: { text: string }) {
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
      className="bg-white rounded-3xl px-8 py-3 text-base md:text-xl group font-semibold flex items-center hover:bg-black hover:text-white hover:shadow-md transition-all hover:shadow-white text-black"
      data-cal-namespace="bezpłatna-konsultacja"
      data-cal-link="web-nova/bezpłatna-konsultacja"
      data-cal-config='{"layout":"month_view"}'
    >
      {props.text}{" "}
      <ArrowRight className="ml-4 group-hover:translate-x-4 transition-transform" />
    </button>
  );
}
