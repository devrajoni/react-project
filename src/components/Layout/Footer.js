
export default function Footer() {


    return(
        <>
            <div className="">
                <div className='grid grid-cols-1 md:grid-cols-5 gap-6 px-12 md:px-20 mt-12 md:mt-16 mb-16 text-white text-left'>
                    <div className="col-span-2 md:text-xs">
                        <p className="font-bold text-2xl font-[poppins] pb-4">Logo</p>
                        <p className="text-1xl pb-4">We are more than a digital agency</p>
                        <hr className="h-0.5 text-2xl w-16 bg-[#66FCF1]" />
                    </div>

                    <div className="gap-4">
                        <h1 className="text-2xl pb-4">Contact Us</h1>
                        <div className="flex pb-4 gap-2">
                            <ion-icon name="call-outline"></ion-icon>
                            <p className="text-1xl">+1234567890</p>
                        </div>
                        <div className="flex pb-4 gap-2">
                            <ion-icon name="mail-outline"></ion-icon>
                            <p className="text-1xl">anymail@mail.com</p>
                        </div>
                        <div className="flex pb-4 gap-2">
                            <ion-icon name="location-outline"></ion-icon>
                            <p className="text-1xl">West Virginia, USA</p>
                        </div>
                        <div className="flex pb-4 gap-2">
                            <ion-icon name="calendar-outline"></ion-icon>
                            <p className="text-1xl ">Monday to Friday</p>
                        </div>
                    </div>
                    <div className="gap-4">
                        <h1 className="text-2xl pb-4">Our Services</h1>
                        <p className="text-1xl pb-4">Single Project</p>
                        <p className="text-1xl pb-4">Service 1</p>
                        <p className="text-1xl pb-4">Service 2</p>
                        <p className="text-1xl pb-4">Works</p>
                    </div>
                    <div className="">
                        <h1 className="text-2xl pb-4">About Us</h1>
                        <p className="text-1xl pb-4">About</p>
                        <p className="text-1xl pb-4">Blog</p>
                        <p className="text-1xl pb-4">Contact Us 1</p>
                        <p className="text-1xl pb-4">Contact Us 2</p>
                    </div>
                </div>
            </div>
            <div className="mb-8 px-12 md:px-20">
                <div className="flex gap-12 text-white mt-8 text-sm">
                    <p>Copyright 2020 All rights reserved</p>
                    <p>PRIVACY POLICY</p>
                    <p>Terms of Use</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2   text-white text-left mt-4">
                    <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className="flex gap-6 text-bold  ps-16 md:ps-56 lg:ps-96">
                        <div>
                            <ion-icon name="logo-facebook"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="logo-twitter"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                        <div>
                         <ion-icon name="logo-youtube"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}