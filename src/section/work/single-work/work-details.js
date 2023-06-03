import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

export default function WorkDetails({ data = {} }) {
  console.log(data);
  // console.log(window.location)
  return (
    <>
      <section className="bg-[#121212]">
        <div className="container px-6 lg:px-20  py-12">
          <div class="grid grid-cols-12 gap-y-4 md:gap-12 h-auto drop-shadow-md text-white">
            <div className="col-span-12 md:col-span-8">
              <h1 className="bold text-4xl">{data.title}</h1>
              <div
                className="font-medium text-white py-2"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
            <div className="col-span-12 md:col-span-4">
              <div class="grid grid-cols-12 pt-12 pb-2">
                <div class="col-span-3">
                  <button className="bg-[#66FCF1] px-2">Category</button>
                </div>
                <div class="col-span-9">
                  <button className="bg-[#66FCF1] px-2">
                    {data?.category?.name}
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-12">
                <div class="col-span-3">Author:</div>
                <div class="col-span-9 text-xs pt-1">{data.author}</div>
              </div>
              <div class="grid grid-cols-12">
                <div class="col-span-3">Client:</div>
                <div class="col-span-9 text-xs pt-1">{data.client}</div>
              </div>
              <div class="grid grid-cols-12">
                <div class="col-span-3">Date:</div>
                <div class="col-span-9 text-xs pt-1">{data.date}</div>
              </div>
              <div class="grid grid-cols-12">
                <div class="col-span-3">Share:</div>
                <div class="col-span-9 pt-2">
                  <div className="flex gap-2">
                    <FacebookShareButton url="https://www.google.com/">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </FacebookShareButton>
                    <LinkedinShareButton url="https://www.google.com/">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </LinkedinShareButton>
                    <TwitterShareButton url="https://www.google.com/">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </TwitterShareButton>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
