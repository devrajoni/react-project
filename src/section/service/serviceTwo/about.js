// import { useEffect, useState } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import serviceAbout from "../../../asset/service_about.jpg";
// import { BASE_URL, IMAGE_URL } from "../../../data/baseUrl";

// export default function About() {
//   let [testimonial, setTestimonial] = useState([]);

//   // let items =[
//   //     {
//   //         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
//   //         star:"star",
//   //         image:Test1,
//   //         name:"Jhon Doe",
//   //         designation:"Designation",
//   //     },
//   //     {
//   //         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
//   //         star:"star",
//   //         image:Test2,
//   //         name:"Jhon Doe",
//   //         designation:"Designation",
//   //     },
//   //     {
//   //         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
//   //         star:"star",
//   //         image:Test3,
//   //         name:"Jhon Doe",
//   //         designation:"Designation",
//   //     },
//   //     {
//   //         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
//   //         star:"star",
//   //         image:Test1,
//   //         name:"Jhon Doe",
//   //         designation:"Designation",
//   //     },
//   // ];

//   useEffect(() => {
//     const loadData = async () => {
//       const url = `${BASE_URL}/testimonial`;
//       try {
//         const response = await fetch(url);
//         const result = await response.json();
//         setTestimonial(result.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     loadData();
//   }, []);

//   return (
//     <>
//       <section
//         className="h-full pb-8 text-white relative w-full bg-cover bg-no-repeat bg-center"
//         style={{ backgroundImage: `url(${serviceAbout})` }}
//       >
//         <div className="container">
//           <div className="py-20">
//             <h1 className="flex justify-center w-full text-white font-bold text-4xl">
//               What people say about us
//             </h1>
//           </div>
//           <div class=" grid grid-cols-12 gap-6 w-full text-white">
//             {testimonial.slice(0, 4).map((item) => (
//               <div
//                 className="col-span-12 md:col-span-6 lg:col-span-3 bg-[#0B0C10] px-8 pt-12 gap-6 mb-44 ring-4 ring-[#191919] relative"
//                 key={item.id}
//               >
//                 <div
//                   className=" font-medium text-center"
//                   dangerouslySetInnerHTML={{ __html: item.description }}
//                 />
//                 <div className="py-8 mb-28 flex justify-center items-center gap-3 text-1xl font-bold text-[#FEC42D]">
//                   <ion-icon name="star"></ion-icon>
//                   <ion-icon name="star"></ion-icon>
//                   <ion-icon name="star"></ion-icon>
//                   <ion-icon name="star"></ion-icon>
//                   <ion-icon name="star"></ion-icon>
//                 </div>
//                 <div className="absolute bottom-0 translate-y-1/2 w-full  left-0">
//                   <div className=" flex justify-center items-center text-white">
//                     <LazyLoadImage
//                       src={`${IMAGE_URL}${item.image}`}
//                       className="h-32 w-32 rounded-full mt-16"
//                       alt="testimonial1"
//                     />
//                   </div>
//                   <div className="text-center pt-4 gap-6">
//                     <h3 className="font-bold text-2xl">{item.name}</h3>
//                     <div>{item.designation}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BASE_URL, IMAGE_URL } from "../../../data/baseUrl";

export default function Testimonial() {
  let [testimonial, setTestimonial] = useState([]);
  let [load, setLoad] = useState(4);

  let heading = [
    {
      titleData: "Testimonials.",
      subTitle: "WE ARE MORE THAN DIGITAL AGENCY",
    },
  ];

  useEffect(() => {
    const loadData = async () => {
      const url = `${BASE_URL}/testimonial`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setTestimonial(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  const loadMore = () => {
    setLoad((prevValue) => prevValue + 4);
  };

  const rating1 = (rating) => {
    switch (rating) {
      case "1":
        return (
          <>
            <ion-icon name="star"></ion-icon>
          </>
        );
      case "1.5":
        return (
          <>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
          </>
        );
      case "2":
        return (
          <>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </>
        );
      case "2.5":
        return (
          <>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
          </>
        );
      case "3":
        return (
          <>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </>
        );
      case "3.5":
        return (
          <>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
          </>
        );
      case "4":
        return (
          <>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </>
        );
      case "4.5":
        return (
          <>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
          </>
        );
      case "5":
        return (
          <>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <section className=" mt-16 md:mt-28 bg-[#121212]">
        <div className="container">
          <div className=" text-white  ">
            <div className="py-20">
              <h1 className="flex justify-center w-full text-white font-bold text-4xl">
                What people say about us
              </h1>
            </div>
          </div>
          <div class="grid grid-cols-12  gap-6 w-full text-white">
            {testimonial.slice(0, load).map((item) => (
              <div className="col-span-12 md:col-span-6 lg:col-span-3 h-full flex flex-col justify-between w-full bg-[#0B0C10] px-8 pt-12 gap-6 ring-4 ring-[#191919] h-full w-full">
                <div>
                  <div
                    className=" font-medium text-center"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <div className="pt-8 flex justify-center items-center gap-3 text-1xl font-bold text-[#66FCF1]">
                    {rating1(item.rating)}
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 py-8">
                    <LazyLoadImage
                      key={item.id}
                      src={`${IMAGE_URL}${item.image}`}
                      className="rounded-full"
                      style={{ height: "100px", width: "100px" }}
                      alt="testimonial1"
                    />
                  </div>
                  <div className="flex items-center h-full">
                    <div>
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-xs">{item.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-12 pb-16">
            <button
              onClick={loadMore}
              className="text-white  border border-[#66FCF1] rounded-md border-opacity-20  px-6 py-4 font-bold text-1xl uppercase"
            >
              See More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
