import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        "container px-8 mx-auto xl:px-5",
        props.large ? "max-w-screen-xl" : "max-w-screen-lg",
        !props.alt && "py-3 lg:py-1", // Ajuste en el padding vertical
        "my-2", // Ajuste en el margen vertical
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
