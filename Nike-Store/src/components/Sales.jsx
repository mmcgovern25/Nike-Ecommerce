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
        <div className='grid items-center justify-items-center grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7'>
          <Item/>
        </div>
      </div>
    </>
  )
}

export default Sales
