import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[var(--neutral-50)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-8xl lg:text-9xl font-bold text-[var(--brand-teal-dark)]/20 mb-4">
            404
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--neutral-900)]">
            Page Not Found
          </h1>
          <p className="text-lg text-[var(--neutral-600)] mb-8">
            Sorry, we couldn't find the page you're looking for. It may have been
            moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal)] text-white"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[var(--brand-navy-dark)] text-[var(--brand-navy-dark)] hover:bg-[var(--brand-navy-dark)] hover:text-white"
              onClick={() => window.history.back()}
            >
              <button type="button">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
