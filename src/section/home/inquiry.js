// import Quiry from "../../asset/quiry.jpg";
// import Button from "../../components/Button";
// import HorizontalLine from "../../components/HorizontalLine";

// export default function Inquiry() {
//   return (
//     <>
//       <section className="px-12 md:px-20 mt-16 md:mt-24 mb-16 text-white relative w-full" style={{backgroundImage:`url(${Quiry})`}}>
//         {/* <img src={Quiry} alt="quiry" className="absolute inset-0" /> */}
//         <div className="content flex justify-center item-center">
//           <div className="text-center top-16">
//             <HorizontalLine />
//             <div className="text-2xl mt-20 flex justify-center item-center gap-8 mb-8">
//               <div className="ring-2 ring-[#66FCF1] flex justify-center items-center h-12 w-12 rounded-full ">
//                 <ion-icon name="logo-facebook" className=""></ion-icon>
//               </div>
//               <div className="ring-2 ring-[#66FCF1] flex justify-center items-center h-12 w-12 rounded-full ">
//                 <ion-icon name="logo-twitter"></ion-icon>
//               </div>
//               <div className="ring-2 ring-[#66FCF1] flex justify-center items-center h-12 w-12 rounded-full ">
//                 <ion-icon name="logo-instagram"></ion-icon>
//               </div>
//               <div className="ring-2 ring-[#66FCF1] flex justify-center items-center h-12 w-12 rounded-full ">
//                 <ion-icon name="logo-youtube"></ion-icon>
//               </div>
//             </div>
//             <h3 className="text-4xl font-bold text-center pb-12">
//               Have any project in mind?
//             </h3>
//             <Button name="Make Inquiry" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import Inquiry from "../../components/Inquiry";

export default function HomeInquiry() {
  return (
    <>

        <Inquiry />
    </>
  );
}
