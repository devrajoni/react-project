import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
import swal from "sweetalert";
import { BASE_URL } from "../../../data/baseUrl";

export default function Comment({ blog }) {
  const [rating, setRating] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log("hei", blog.id);
  const onSubmit = (data, e) => {
    console.log(data.image[0]);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("latest_id", blog.id);
    formData.append("designation", data.designation);
    formData.append("rating", rating);
    formData.append("image", data.image[0]);
    formData.append("description", data.description);
    fetch(`${BASE_URL}/testimonials`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          e.target.reset();
          swal("Congrats!", "Message Sent!", "success");
        }
      });
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
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
              <div className="grid grid-cols-12 lg:pr-40 gap-4 md:mb-0 w-full">
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
              <div className="grid grid-cols-12 gap-4 pt-4 lg:pt-6 w-full lg:pr-40">
                <div className="col-span-12 md:col-span-6">
                  <input
                    type="file"
                    {...register("image", { required: true })}
                    name="image"
                    className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-[#66FCF1] file:text-black
                    hover:file:bg-violet-50
                  "
                  />
                  {errors.image && <span>This field is required</span>}
                </div>
                <div className="col-span-12 md:col-span-6 flex gap-4">
                  <div className="mt-2">Rating :</div>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    color2={"#ffd700"}
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 pt-4 lg:pt-6 w-full lg:pr-40">
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
