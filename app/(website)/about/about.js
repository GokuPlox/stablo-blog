import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className=" text-brand-primary mb-3 mt-16 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Nosotros
      </h1>
      <div className="text-center">
        <p className="text-lg">A cada paso cuidamos tu negocio.</p>
      </div>
      <div className=" mx-auto mt-14 text-center dark:prose-invert">
        <div className="flex flex-col gap-6">
          <div id="5" className="flex flex-row gap-6 text-center">
          <div className="flex-1 flex flex-col items-center gap-3">
              <img
                className="h-32 object-cover"
                src="world.svg"
              />
              <p className="font-semibold text-center ">
                Visión
              </p>
              <p>
                Ser reconocidos como empresa líder en el desarrollo logístico y de transporte.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <img
                className="h-32 object-cover"
                src="truck.svg"
              />
              <p className="font-semibold text-center ">
                Misión
              </p>
              <p>
                Buscar el perfeccionamiento y optimización de las necesidades logísticas internas de nuestro país, para lograr la competitividad de nuestros clientes.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <img
                className="h-32 p-2 object-cover"
                src="graphic.svg"
              />
              <p className="font-semibold text-center ">
                Objetivos
              </p>
              <p>
                Brindar los servicios necesarios para acompañar el desarrollo y crecimiento sostenido de su empresa.
              </p>
            </div>
          </div>
          <div id="6" className="flex flex-row gap-6 justify-between text-center">
          <div className="flex-1 flex flex-col items-center gap-3">
              <img
                className="h-32 object-cover"
                src="like.svg"
              />
              <p className="font-semibold text-center ">
                El servicio es nuestro emblema
              </p>
              <p>
                El mejor servicio para lograr todos los objetivos marcados en tiempo y forma.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <img
                className="h-32 object-cover"
                src="medal.svg"
              />
              <p className="font-semibold text-center ">
                Sus inversiones seguras
              </p>
              <p className="text-center">
                Siempre que tenemos una buena experiencia queremos volver a repetirla y es ahí donde se forja el continuo retorno de nuestros clientes.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <img
                className="h-32 p-2 object-cover"
                src="objetive.svg"
              />
              <p className="font-semibold text-center">
                Su necesidad es nuestro propósito
              </p>
              <p className="text-center">
                Cumpliendo con los mayores estándares de calidad y buscando incansablemente la excelencia para lograr un producto único.
              </p>
            </div>
          </div>
        </div>

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
