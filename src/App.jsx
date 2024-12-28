export default function App() {
  return (
    <div className="grid grid-cols-4 grid-rows-3 bg-gray-200 px-80 py-32 gap-7 w-full min-h-screen">
      <article className="bg-orange-100 rounded-xl flex flex-col justify-center text-3xl font-semibold h-full">
        <div className="pl-12 leading-6">
          Create and schedule
          <br /> content <br />
          <span className="text-violet-500"> quicker:</span>
        </div>
        <button className="flex justify-center mt-3">
          <img
            className="w-32 h-auto"
            src="../bento-grid-main/assets/images/illustration-create-post.webp"
          />
        </button>
      </article>
      <article className="bg-violet-500 flex flex-col items-center col-span-2 min-h-[50%] rounded-xl ">
        <span className="text-center text-5xl text-white font-semibold mt-4">
          Social Media <span className="text-orange-300">10x</span> <br />
          Faster with AI
        </span>
        <img
          className="w-32 h-auto mt-4"
          src="../bento-grid-main/assets/images/illustration-five-stars.webp"
        />
        <span className="text-white font-light">Over 4,000 5-star reviews</span>
      </article>
      <article className="flex flex-col h-full pt-8 bg-violet-200 row-span-2 rounded-xl   ">
        <span className="text-3xl leading-6 font-semibold pl-7">
          Schedule to
          <br /> social media.
        </span>
        <img
          className="mt-4 ml-7  h-64 object-cover object-left"
          src="../bento-grid-main/assets/images/illustration-schedule-posts.webp"
        />
        <p
          // style={{ lineHeight: "1.75" }}
          className="pl-7 pr-4 leading-5 py-3"
        >
          Optimize post timings to publish content at the perfect time for your
          audience
        </p>
      </article>
      <article className="flex flex-col items-center bg-yellow-400 row-span-2 rounded-xl ">
        <span className="text-3xl font-semibold leading-7 pl-6 pt-8 pr-4">
          {" "}
          Write your content using AI.
        </span>
        <img
          className="pt-16 px-5"
          src="../bento-grid-main/assets/images/illustration-ai-content.webp"
        />
      </article>
      <article className="bg-white leading-5 rounded-xl overflow-hidden ">
        <img
          className="pt-4 pl-6 object-cover object-left w-80 h-20"
          src="../bento-grid-main/assets/images/illustration-multiple-platforms.webp"
        />
        <p className="text-2xl leading-6 font-semibold pt-2 pb-4 pl-6">
          Manage
          <br /> multiple
          <br /> accounts and
          <br /> platforms
        </p>
      </article>
      <article className="flex flex-col leading-7 bg-yellow-400 rounded-xl ">
        <p className="text-2xl leading-6 font-semibold pt-5 pl-5">
          Maintain a<br className="leading-5" /> consistent
          <br className="leading-7" /> posting <br className="leading-7" />
          schedule
        </p>
        <img
          className="object-cover object-top pt-4 px-5 max-h-24 w-30 "
          src="../bento-grid-main/assets/images/illustration-consistent-schedule.webp"
        />
      </article>
      <article className="flex flex-col bg-white rounded-xl ">
        <span className="text-6xl font-semibold pt-4 pl-5">&gt;56%</span>
        <span className="pl-5 pt-3">faster audience growth</span>
        <img
          className="h-14 w-44 pl-6 mt-5"
          src="../bento-grid-main/assets/images/illustration-audience-growth.webp"
        />
      </article>
      <article className="flex bg-violet-500 col-span-2 rounded-xl ">
        <img
          className="pt-5 pl-5 w-60 h-48"
          src="../bento-grid-main/assets/images/illustration-grow-followers.webp"
        />
        <span className="flex items-center text-white text-4xl pl-3 font-semibold">
          Grow followers with non stop content
        </span>
      </article>
    </div>
  );
}
