import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { BASE_URL } from "../../../data/baseUrl";

export default function Comment() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    fetch(`${BASE_URL}/testimonial`, {
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

  return (
    <>
      <section className=" text-white bg-[#121212]">
        <div className="container">
          <div className="pt-16 pb-8">
            <h1 className="font-bold ">Write A Comment</h1>
          </div>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="grid grid-cols-12 lg:pr-40 gap-4 md:mb-0 w-full">
                <div className="col-span-12 md:col-span-6 ">
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                    className="bg-[#242424] w-full p-4"
                  />
                  {errors.name && <span>This field is required</span>}
                </div>
                <div className="col-span-12 md:col-span-6 ">
                  <input
                    type="text"
                    placeholder="Designation"
                    {...register("designation", { required: true })}
                    className="bg-[#242424] w-full p-4"
                  />
                  {errors.designation && <span>This field is required</span>}
                </div>
              </div>
              <div class="grid grid-cols-12 gap-4 pt-4 lg:pt-6 w-full lg:pr-40">
                <div className="col-span-12 md:col-span-12">
                  <input
                    type="file"
                    {...register("image", { required: true })}
                    className="bg-[#242424] w-full p-4"
                  />
                  {errors.image && <span>This field is required</span>}
                </div>
              </div>
              <div class="grid grid-cols-12 gap-4 pt-4 lg:pt-6 w-full lg:pr-40">
                <div className="col-span-12">
                  <textarea
                    placeholder="Your Message"
                    {...register("description", { required: true })}
                    className="bg-[#242424] w-full p-4"
                    rows={6}
                  />
                  {errors.description && <span>This field is required</span>}
                </div>
              </div>
              <div className=" pt-8 pb-20">
                <button className="outline outline-[#66FCF1] hover:opacity-50 px-6 py-2 font-bold text-1xl uppercase">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
