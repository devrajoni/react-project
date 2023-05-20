import TopTitle from "../../components/TopTitleTwo";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../data/baseUrl";
import swal from 'sweetalert';

export default function FooterCard() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data, e) => {
    fetch(`${BASE_URL}/contact`,{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
    }).then(res => res.json()).then(data => {
      if(data.success){
        e.target.reset()
        swal("Congrats!", "Message Sent!", "success");
      }

    })
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
        <div class="grid grid-cols-12 gap-4 pt-12 px-6 lg:px-20 md:mb-0 w-full">
            <div className="col-span-12 md:col-span-6 ">
                <input type="text" placeholder="First Name" {...register("first_name", { required: true })} className="bg-[#242424] w-full p-4" />
                {errors.first_name && <span>This field is required</span>}
            </div>
            <div className="col-span-12 md:col-span-6">
                <input type="text" placeholder="Last Name" {...register("last_name", { required: true })} className="bg-[#242424] w-full p-4" />
                {errors.last_name && <span>This field is required</span>}
            </div>
        </div>
        <div class="grid grid-cols-12 gap-4 pt-4 md:pt-12 px-6 lg:px-20 w-full">
            <div className="col-span-12 md:col-span-6">
                <input type="email" placeholder="Email" {...register("email", { required: true })} className="bg-[#242424] w-full p-4"  />
                {errors.email && <span>This field is required</span>}
            </div>
            <div className="col-span-12 md:col-span-6">
                <input type="text" placeholder="Subject" {...register("subject", { required: true })} className="bg-[#242424] w-full p-4" />
                {errors.subject && <span>This field is required</span>}
            </div>
        </div>
        <div class="grid grid-cols-12 gap-4 pt-4 md:pt-12 px-6 lg:px-20 w-full">
            <div className="col-span-12">
                <textarea placeholder="Your Message" {...register("message", { required: true })} className="bg-[#242424] w-full p-4" rows={4} />
                {errors.message && <span>This field is required</span>}
            </div>
        </div>
        <div className="text-center mt-12 pb-32">
            <Button name="SEND MESSAGE" type="submit" />
        </div>
        </form>
      </section>
        </>
    )
}