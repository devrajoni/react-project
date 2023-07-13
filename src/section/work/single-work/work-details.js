import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { IMAGE_URL } from "../../../data/baseUrl";

export default function WorkDetails({ data = {} }) {
  return (
    <>
      <section className="bg-[#121212]">
        <div className="container py-24">
          <div>
            <LazyLoadImage
              src={`${IMAGE_URL}${data.image}`}
              className="w-full"
              alt="banner"
            />
          </div>
          <div class="grid grid-cols-12 gap-y-4 md:gap-12 mt-16 h-auto drop-shadow-md text-white">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="bold text-4xl">{data.title}</h1>
              <div
                className="font-medium text-white py-2"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
            <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
              <div>
                <div class="grid grid-cols-12">
                  <div class="col-span-3">
                    <button className="font-bold">Category :</button>
                  </div>
                  <div class="col-span-9">
                    <button className="text-xs pt-1">
                      {data?.category?.name}
                    </button>
                  </div>
                </div>
                <div class="grid grid-cols-12">
                  <div class="col-span-3 font-bold">Author :</div>
                  <div class="col-span-9 text-xs pt-1">{data.author}</div>
                </div>
                <div class="grid grid-cols-12">
                  <div class="col-span-3 font-bold">Client :</div>
                  <div class="col-span-9 text-xs pt-1">{data.client}</div>
                </div>
                <div class="grid grid-cols-12">
                  <div class="col-span-3 font-bold">Date :</div>
                  <div class="col-span-9 text-xs pt-1">{data.date}</div>
                </div>
                <div class="grid grid-cols-12">
                  <div class="col-span-3 font-bold">Share :</div>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
