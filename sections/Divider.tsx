import Counter from '../interfaces/Counter.interface'

export default function Divider() {
  const items: Counter[] = [
    {
      title: 'Users',
      count: '2.7k',
    },
    {
      title: 'Subscribes',
      count: '1.4k',
    },
    {
      title: 'Downloads',
      count: '35',
    },
    {
      title: 'Products',
      count: '5',
    },
  ]

  const listItems = items.map((item,index) => (
    <div key={index} className="p-4 sm:w-1/4 w-1/2">
      <h2 className="font-extrabold sm:text-6xl text-3xl text-cyan-indigo ">
        {item.count}
      </h2>
      <p className="leading-relaxed">{item.title}</p>
    </div>
  ))

  return (
    <section className="dark:text-gray-400 text-gray-800 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">{listItems}</div>
      </div>
    </section>
  )
}
