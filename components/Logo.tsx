export default function Logo(prop: { title: string }) {
  return (
    <span className="ml-3 text-3xl text-indigo-500 hover:translate-x-4 ease-in-out duration-150 delay-100">
      {prop.title}
    </span>
  )
}
