import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import StoryPage from "./pages/StoryPage";
import CommunityPage from "./pages/CommunityPage";
import PartnerPage from "./pages/PartnerPage";

export const routes = [
  { path: "/", label: "Home", component: HomePage },
  { path: "/work", label: "Work", component: WorkPage },
  { path: "/story", label: "Story", component: StoryPage },
  { path: "/community", label: "Community", component: CommunityPage },
  { path: "/partner", label: "Partner", component: PartnerPage, cta: true },
];
