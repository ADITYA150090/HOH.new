import { useEffect, useState } from "react";

const normalizeHash = () => {
  const raw = window.location.hash.replace(/^#/, "");
  return raw.startsWith("/") ? raw : "/";
};

export function toRoute(path) {
  window.location.hash = path;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function useHashRoute() {
  const [route, setRoute] = useState(normalizeHash);

  useEffect(() => {
    const onHashChange = () => setRoute(normalizeHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}
