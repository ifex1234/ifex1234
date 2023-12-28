import BoxHalf from './BoxHalf'
import BoxFull from './BoxFull'
import { Breaking_news } from '../assets/DATA/breaking'



 const Breaking = () => {
  return (
    <div className='w-[93%] md:w-[96%] lg:w-11/12 m-auto md:m-3 lg:ml-12 h-auto text-white flex md:flex-col lg:flex-row mb-2'>
      <BoxFull img={Breaking_news[4].image}  title='Michigan top court reject Trump election ban lift' category={Breaking_news[1].zone}/>
      <div className='hidden md:flex flex-row md:w-full lg:w-[49%] flex-wrap m-auto h-auto'>
        {Breaking_news.slice(0,4).map((item) => (
        <BoxHalf key={item.id} image={item.image} title={item.title} category={item.zone}/>
        ))
        }
      </div>
      
    </div>
    
  )
}
export default Breaking;
