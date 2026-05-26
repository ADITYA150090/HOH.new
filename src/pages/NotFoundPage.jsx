import { toRoute } from "../hooks/useHashRoute";
import Button from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <div>
        <div className="label">404</div>
        <h1>That page slipped out of the venue.</h1>
        <p>Head back home and keep moving through the House of Hearts site.</p>
        <Button onClick={() => toRoute("/")}>Back Home</Button>
      </div>
    </main>
  );
}
