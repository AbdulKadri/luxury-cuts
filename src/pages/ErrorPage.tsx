import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="min-h-screen flex items-center justify-center bg-bgsecondary"
    >
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Oops!</h1>
        <p className="text-lg text-tprimary mb-4">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-gray-500 mb-4">
          <i>
            {(error as { statusText?: string })?.statusText ||
              (error as Error)?.message}
          </i>
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
