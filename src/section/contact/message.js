import { useForm } from "react-hook-form";
import swal from "sweetalert";
import TopTitle from "../../components/TopTitleTwo";
import { BASE_URL } from "../../data/baseUrl";

export default function FooterCard() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    fetch(`${BASE_URL}/contact`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          e.target.reset();
          swal("Congrats!", "Message Sent!", "success");
        }
      });
  };

  let heading = [
    {
      titleData: "Send us a message!",
      subTitle: "FEEL FREE TO CONTACT",
    },
  ];

  return (
    <>
      <section className=" text-white bg-[#121212]">
        <div className="container">
          <div className="pt-8 pb-16">
            {heading.map((headings) => (
              <TopTitle headings={headings} />
            ))}
          </div>
          <div className="px-6 md:px-12 lg:px-32">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="grid grid-cols-12 gap-4 md:mb-0 w-full">
                <div className="col-span-12 md:col-span-6 ">
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register("first_name", { required: true })}
                    className="bg-[#242424] w-full p-4"
                  />
                  {errors.first_name && <span>This field is required</span>}
                </div>
                <div className="col-span-12 md:col-span-6">
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("last_name", { required: true })}
                    className="bg-[#242424] w-full p-4"
                  />
                  {errors.last_name && <span>This field is required</span>}
                </div>
              </div>
              <div class="grid grid-cols-12 gap-4 pt-4 lg:pt-6 w-full">
                <div className="col-span-12 md:col-span-6">
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                    className="bg-[#242424] w-full p-4"
                  />
                  {errors.email && <span>This field is required</span>}
                </div>
                <div className="col-span-12 md:col-span-6">
                  <input
                    type="text"
                    placeholder="Subject"
                    {...register("subject", { required: true })}
                    className="bg-[#242424] w-full p-4"
                  />
                  {errors.subject && <span>This field is required</span>}
                </div>
              </div>
              <div class="grid grid-cols-12 gap-4 pt-4 lg:pt-6 w-full">
                <div className="col-span-12">
                  <textarea
                    placeholder="Your Message"
                    {...register("message", { required: true })}
                    className="bg-[#242424] w-full p-4"
                    rows={6}
                  />
                  {errors.message && <span>This field is required</span>}
                </div>
              </div>
              <div className="text-center pt-8 pb-20">
                <button className="outline outline-[#66FCF1] hover:opacity-50 px-6 py-4 font-bold text-1xl uppercase">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
