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
        <div className="absolute top-0 left-0 w-full h-full flex items-center  flex-col ">
        <img
            src="https://web.archive.org/web/20190717171034im_/http://vrplog.com/wp-content/uploads/2016/05/VrpLog-4-x-4.png"
            alt="A cada paso cuidamos tu negocio"
            title="A cada paso cuidamos tu negocio"
            className=" object-cover border-white"
          />
          <div className="flex flex-row gap-6">
            <div>
              <Link
                href="#2"
                className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-black hover:bg-gray-200 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
                <span>Ver mas</span>
              </Link>
            </div>
            <div>
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-black hover:bg-gray-200 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
                <span>contacto</span>
              </Link>
            </div>
          </div>
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
              {/* <div className="mt-10 flex justify-center">
                <Link
                  href="/archive"
                  className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
                  <span>View all Posts</span>
                </Link>
              </div> */}
            </Container>
          )}
        </>
      </div>
      <div id="2" className="h-screen items-center flex justify-center">
        <About></About>
      </div>
      <div id="3" className="h-screen">
        <Contact></Contact>
      </div>
    </>
  );
}
