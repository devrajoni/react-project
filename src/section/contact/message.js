import TopTitle from "../../components/TopTitleTwo";
import Button from "../../components/Button";

export default function FooterCard() {
    let heading = [
        {
          titleData: "Send us a message!",
          subTitle: "LOREM IPSUM DOLOR SIT AMET",
        },
      ];

    return(
        <>
      <section className=" text-white bg-[#121212]">
        <div className="py-8 lg:py-16">
          {heading.map((headings) => (
            <TopTitle headings={headings} />
          ))}
        </div>

        <div class="grid grid-cols-12 gap-4 pt-12 px-6 lg:px-20 md:mb-0 w-full">
            <div className="col-span-12 md:col-span-6 ">
                <input type="text" placeholder="First Name" name="first_name" id="first_name" className="bg-[#242424] w-full p-4" />
            </div>
            <div className="col-span-12 md:col-span-6">
                <input type="text" placeholder="Last Name" name="last_name" id="last_name" className="bg-[#242424] w-full p-4" />
            </div>
        </div>
        <div class="grid grid-cols-12 gap-4 pt-4 md:pt-12 px-6 lg:px-20 w-full">
            <div className="col-span-12 md:col-span-6">
                <input type="text" placeholder="Email" name="email" id="email" className="bg-[#242424] w-full p-4"  />
            </div>
            <div className="col-span-12 md:col-span-6">
                <input type="text" placeholder="Subject" name="subject" id="subject" className="bg-[#242424] w-full p-4" />
            </div>
        </div>
        <div class="grid grid-cols-12 gap-4 pt-4 md:pt-12 px-6 lg:px-20 w-full">
            <div className="col-span-12">
                <textarea placeholder="Your Message" name="message" id="message" className="bg-[#242424] w-full p-4" rows={4} />
            </div>
        </div>
        <div className="text-center mt-12 pb-32">
            <Button name="SEND MESSAGE" />
        </div>
      </section>
        </>
    )
}