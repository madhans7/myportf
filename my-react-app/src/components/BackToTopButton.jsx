export default function BackToTopButton() {
  return (
    <button
      className="back-top"
      id="backTop"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
