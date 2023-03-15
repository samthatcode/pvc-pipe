import { Link } from 'react-router-dom';
import { Layout } from './../components';

const NotFoundPage = () => {
    return (
        <Layout>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="max-w-lg text-center">
                    <h1 className="text-9xl font-extrabold text-gray-800 mb-8">404</h1>
                    <p className="text-gray-600 mb-8">
                        Sorry, the page you are looking for could not be found.
                    </p>
                    <Link
                        to="/"
                    >
                        <button
                            className="bg-primary hover:scale-90 active:scale-100 text-white font-bold py-3 px-6 rounded-lg"
                        >

                            Go back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
