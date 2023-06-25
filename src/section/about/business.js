import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../components/Button";
import { BASE_URL, IMAGE_URL } from "../../data/baseUrl";
// import Card from "../../../components/Card";

export default function Business() {
  const [businesss, setBusiness] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const url = `${BASE_URL}/about-business`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setBusiness(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return (
    <>
      <section className="container gap-y-4 mt-20 md:mt-40">
        <div>
          <div class="grid grid-cols-12 sm:gap-y-8 md:gap-12 h-auto text-white">
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <LazyLoadImage
                src={`${IMAGE_URL}${businesss.image}`}
                alt="activity"
                className="h-full"
              />
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-6 mt-12 lg:mt-0 text-left">
              <h3 className="font-bold sm:text-2xl md:text-2xl lg:text-6xl">
                {businesss.title}
              </h3>
              <div
                className="text-1xl py-8 md:py-8 lg:py-16"
                dangerouslySetInnerHTML={{ __html: businesss.description }}
              />
              <Button name="Watch Video" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
