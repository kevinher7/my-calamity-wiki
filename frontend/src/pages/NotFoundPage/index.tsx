import { Link } from "react-router-dom";

import "./styles.css";

function NotFoundPage() {
	return (
		<main className="not-found--main">
			<h1>¿Pa' donde va papi?</h1>
			<h2>404</h2>
			<p>Page not Found</p>
			<Link to="/" className="not-found-link">
				Go back Home
			</Link>
		</main>
	);
}

export default NotFoundPage;
