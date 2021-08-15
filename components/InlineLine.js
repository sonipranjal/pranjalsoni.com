export default function InlineLine({ title }) {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="mr-2 text-lg font-semibold ">{title}</div>
      <hr className="bg-red-600 h-0.5 m-0 p-0 w-full flex-1" />
    </div>
  );
}
