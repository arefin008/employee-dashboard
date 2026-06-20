export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex gap-2 mt-4 justify-center">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-3 py-1 border rounded"
      >
        Prev
      </button>

      <span className="px-3 py-1">
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="px-3 py-1 border rounded"
      >
        Next
      </button>
    </div>
  );
}
