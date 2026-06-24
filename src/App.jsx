import { routes } from "./routes";
import { useHashRoute } from "./hooks/useHashRoute";
import AppLayout from "./components/layout/AppLayout";
import NotFoundPage from "./pages/NotFoundPage";



export default function App() {
  const currentRoute = useHashRoute();
  const page = routes.find((route) => route.path === currentRoute);
  const Page = page?.component ?? NotFoundPage;

  return (
    <AppLayout activePath={page?.path ?? "/"}>
     
      <Page />
      
    </AppLayout>
  );
}
