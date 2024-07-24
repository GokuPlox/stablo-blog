import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import About from "./about/about";
import Contact from "./contact/contact";

export default function Post({ posts }) {
  return (
    <>
      <div className="relative">
        <img
          src="/antwerp-3388127_1920.jpg"
          alt="logistica integral"
          title="logistica integral"
          className="w-full h-screen "
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center  flex-row  ">
          <div className="flex-1 relative bg-white/50 flex flex-col justify-start items-center mx-32 my-6 rounded-md border">
            <div className="flex-1">
              <div className="relative flex flex-col items-center">
                <img
                  src="vrplogo.svg"
                  className=" w-96 h-52 items-center"
                />
              </div>
              <div className="gap-3 py-3">
                <p className="text-3xl font-semibold text-center text-black">Al servicio de su empresa</p>
                <p className="text-center font-semibold text-black">Donde los negocios fluyen</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-row gap-6">
            <div>
              <Link
                href="#nosotros"
                className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-opacity-70 bg-white px-3 py-2 pl-4 text-sm font-medium text-black hover:bg-gray-200 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-opacity-50 dark:bg-gray-800 dark:text-gray-300">
                <span>Ver más</span>
              </Link>
            </div>
            <div>
              <Link
                href="#contact"
                className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-opacity-70 bg-white px-3 py-2 pl-4 text-sm font-medium text-black hover:bg-gray-200 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-opacity-50 dark:bg-gray-800 dark:text-gray-300">
                <span>Contacto</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
      <div id="nosotros" className="h-screen items-center flex justify-center">
        <About></About>
      </div>
      <div id="contact" className="h-screen">
        <Contact></Contact>
      </div>
      <>
        {posts && (
          <Container>
            <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
              {posts.slice(0, 2).map(post => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="landscape"
                  preloadImage={true}
                />
              ))}
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
              {posts.slice(2, 14).map(post => (
                <PostList key={post._id} post={post} aspect="square" />
              ))}
            </div>
             <div className="mt-10 flex justify-center">
                <Link
                  href="/archive"
                  className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
                  <span>View all Posts</span>
                </Link>
              </div> 
          </Container>
        )}
      </>
    </>
  );
}
