export default function InputRequestComponent({
  url,
  onChange,
}: {
  url: string;
  onChange: (value: string) => void;
}) {
  return (
    <>
      <input
        className="p-2  rounded-s-lg focus:outline-none focus:ring focus:border-blue-500"
        placeholder="Insira sua URL"
        onChange={(e) => onChange(e.target.value)}
        value={url}
      ></input>
    </>
  );
}
