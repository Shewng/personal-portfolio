import Link from "next/link";

/**
 * Custom 404 page
 * @returns Custom 404 page
 */
const NotFound = () => {
  return (
    <div className="404-container">
      <h1>Oh.</h1>
      <h2>There is no page for this route.</h2>
      <p>
        Instead, you can go back{" "}
        <Link href="/">
          <a>home</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
