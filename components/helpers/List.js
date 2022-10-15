const List = ({ item }) => {
  return (
    <li>
      <a href={item.url} className="text-neutral-gray text-base">
        {item.title}
      </a>
    </li>
  )
}

export default List