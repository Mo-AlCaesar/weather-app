export default function Error({ error }) {
  return (
    <>
      {error && (
        <p className="text-red-700 text-center bg-red-100 p-3 rounded-md mb-6 font-semibold">
          {error}
        </p>
      )}
    </>
  );
}
