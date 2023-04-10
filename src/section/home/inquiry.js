import Quiry from '../../asset/quiry.jpg';
import Button from "../../components/Button";
import HorizontalLine from '../../components/HorizontalLine';

export default function Inquiry() {

    return(
        <>
        <section className="inquiry-section md:px-20 px-12 text-white relative w-full">
            <img src={Quiry} alt="quiry" className='bg-cover absolute'/>
            <div className='content flex justify-center item-center'>
                <div className='text-center absolute top-16'>
                    <HorizontalLine />
                    <div className='text-2xl mt-20 flex justify-center item-center gap-8 mb-8'>
                        <div className='ring-2 ring-[#66FCF1] bg-black h-12 w-12 rounded-full p-2 '>
                            <ion-icon name="logo-facebook" className=''></ion-icon>
                        </div>
                        <div className='ring-2 ring-[#66FCF1] bg-black h-12 w-12 rounded-full p-2 '>
                            <ion-icon name="logo-twitter"></ion-icon>
                        </div>
                        <div className='ring-2 ring-[#66FCF1] bg-black h-12 w-12 rounded-full p-2 '>
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                        <div className='ring-2 ring-[#66FCF1] bg-black h-12 w-12 rounded-full p-2 '>
                            <ion-icon name="logo-youtube"></ion-icon>
                        </div>
                    </div>
                    <h3 className='text-4xl font-bold text-center pb-12'>Have any project in mind?</h3>
                    <Button name="Make Inquiry"/>
                </div>
            </div>
        </section>
        </>
    )
}