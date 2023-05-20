import { useEffect, useState } from "react";
import { BASE_URL, IMAGE_URL } from "../../data/baseUrl";

export default function FooterMap() {
    let [map, setMap] = useState({});
    useEffect(() => {
        const loadData = async () => {
          const URL = `${BASE_URL}/setting`;
          try {
            const response = await fetch(URL);
            const result = await response.json();
            setMap(result.data);
          } catch (error) {
            console.log(error);
          }
        };

        loadData();
      }, []);
      // console.log('ss', map);

    return(
        <>
      <section className=" h-full w-full">
            <div>
                <iframe src={map.map} width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
      </section>
        </>
    )
}