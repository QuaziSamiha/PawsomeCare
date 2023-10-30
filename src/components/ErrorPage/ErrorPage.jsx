import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div
        id="error-page"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Oops!</h1>
          <p className="text-lg text-gray-700">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="text-lg mt-2 font-bold text-red-600 ">
            {error.statusText || error.message}
          </p>
        </div>
      </div>
    </>
  );
}
