export default function TableSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-10 bg-gray-200 rounded" />
      ))}
    </div>
  );
}
