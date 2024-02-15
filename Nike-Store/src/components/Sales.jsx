import Item from './utils/Item'
import Title from './utils/Title'


export const Sales = ({ endpoint: { title, items } }) => {
  return (
    <>
      <div>
        {items?.map((item, i) => (
          <Item {...item} key={i} />
        ))}
        <Title title={title}/>
        <div>
          <Item/>
        </div>
      </div>
    </>
  )
}

export default Sales
