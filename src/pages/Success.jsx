import { Link } from "react-router-dom";
import { Layout } from "./../components";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="max-w-lg text-center">
          <h1 className="mb-8 text-5xl font-extrabold text-primary"> Success </h1>
          <p className="mb-8 text-gray-600">
            You have successfully subscribed to our newsletter, you now stand a chance to receive any new updates from us.
          </p>
          <Link to="/">
            <button className="rounded-lg bg-primary py-3 px-6 font-bold text-white hover:scale-90 active:scale-100">
              Continue to site
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
