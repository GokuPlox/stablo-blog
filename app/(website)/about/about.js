import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Nosotros
      </h1>
      <div className="text-center">
        <p className="text-lg">A cada paso cuidamos tu negocio.</p>
      </div>   



      <div className=" mx-auto mt-14 text-center dark:prose-invert">
        <div id="1" className="flex flex-row gap-6 justify-between text-center">
          <div >
            <p className="font-semibold text-center ">
            Visión
            </p>
            <p>
              Ser reconocidos como empresa líder en el desarrollo logístico y de transporte.
            </p>
          </div>
          <div>
            <p className="font-semibold text-center ">
            Misión
            </p>
            <p>
              Buscar el perfeccionamiento y optimización de las necesidades logísticas internas de nuestro país, para lograr la competitividad de nuestros clientes.
            </p>
          </div>
          <div>
            <p className="font-semibold text-center ">
              Objetivos
            </p>
            <p>
              Brindar los servicios necesarios para acompañar el desarrollo y crecimiento sostenido de su empresa.
            </p>
          </div>
        </div>
        <p className="p-6 font-semibold" >
          <Link href="/contact">Acércate</Link>
        </p>

        {/* <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
          {authors.slice(0, 3).map(author => {
            const imageProps = urlForImage(author?.image) || null;
            return (
              <div
                key={author._id}
                className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
                <Link href={`/author/${author?.slug}`}>
                  {imageProps && (
                    <Image
                      src={imageProps?.src}
                      alt={author?.name || " "}
                      fill
                      sizes="(max-width: 320px) 100vw, 320px"
                      className="object-cover"
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </div> */}

      </div>
    </Container>
  );
}
