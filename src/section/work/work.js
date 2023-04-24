import {useState} from "react";
import image1 from '../../asset/work_cat.jpg'

const works = [{
    id : 1,
    title: "All",
    image: image1,
    category: "Architecture"


},
{
    id : 2,
    title: "All",
    image: image1,
    category: "Design"


},
{
    id : 3,
    title: "All",
    image: image1,
    category: "Architecture"


}]
export default function Work() {
    const[category, setCategory] = useState('');

    const selectedWorks = category === '' ? works : works.filter((work) =>{
        return work.category.toLowerCase() === category.toLowerCase()
    })

  return (
    <div>
        <div className="text-white">
            <button onClick={ () => setCategory('')}>All</button>
            <button onClick={ () => setCategory('Architecture')}>Architecture</button>
            <button onClick={ () => setCategory('Design')}>Design</button>
        </div>
        <div>
            {
                selectedWorks.map((data) => {
                    return <div key={data.id}>
                        <p>{data.title}-{data.category}</p>
                    </div>
                })
            }
        </div>
    </div>
  );
}