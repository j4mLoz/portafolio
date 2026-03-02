export type LogPayload = {
  section: string;
  action: "click";
  label: string;
};

export function logEvent({ section, action, label }: LogPayload) {
  fetch("/api/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      section,
      action,
      label,
    }),
  });
}
