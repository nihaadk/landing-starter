type Props = {
  color: string
  children: JSX.Element | JSX.Element[] | string | string[]
}

export default function UiButton({ children }: Props) {
  return (
    <button className="before:bg-gradient-to-r before:from-cyan-500 before:to-indigo-500 relative z-10 mx-auto mt-16 flex h-28 overflow-hidden border-4 border-indigo-500 py-8 px-16 font-sans text-4xl text-indigo-500 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:-translate-x-full  before:transition before:duration-500 before:content-[''] hover:text-white hover:before:translate-x-0">
      {children}
    </button>
  )
}
