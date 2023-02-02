export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

type GTagEvent = (
  eventName: Gtag.EventNames | (string & {}),
  params: Gtag.CustomParams | Gtag.ControlParams | Gtag.EventParams | undefined
) => void;

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event: GTagEvent = (eventName, params) => {
  window.gtag("event", eventName, {
    ...params,
  });
};

export const visitOptiGTagEvent = () => {
  window.gtag("event", "visiting_optiminastic_website", {
    event_category: "engagement",
    event_label: "visiting_optiminastic_website",
    value: 1,
  });
};
