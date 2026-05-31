import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="container-xxl">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p className="lead">The page you’re looking for doesn’t exist or has moved.</p>
        <Link href="/" className="btn-brand" style={{ marginTop: "1rem", display: "inline-flex" }}>
          <i className="bi bi-house" /> Back home
        </Link>
      </div>
    </section>
  );
}
