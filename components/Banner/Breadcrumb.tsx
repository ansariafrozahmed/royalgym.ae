import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  list: string[];
}

const Breadcrumb: React.FC<Props> = ({ title, list }) => {
  return (
    <>
      <div
        data-aos="fade"
        className="h-[250px] lg:h-[350px] relative overflow-hidden w-full"
      >
        <Image
          src={
            "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
          className="object-cover object-center h-full w-full"
          height={100}
          sizes="100vw"
          width={1500}
        />
        <div className="absolute inset-0 bg-black/40 lg:bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl lg:text-3xl font-semibold tracking-wider uppercase text-templateWhite">
              {title}
            </h1>
            <ul className="flex items-center justify-center gap-1.5 text-sm mt-2">
              {list.map((item, index) => (
                <React.Fragment key={index}>
                  {item === "Home" ? (
                    <Link href={"/"}>
                      <li className={`text-templateWhite`}>{item}</li>
                    </Link>
                  ) : (
                    <li
                      className={`${
                        index === list.length - 1
                          ? "text-templatePrimary font-semibold"
                          : "text-templateWhite"
                      }`}
                    >
                      {item}
                    </li>
                  )}
                  {index < list.length - 1 && (
                    <ChevronRight
                      className="text-templateWhite mb-[1px]"
                      size={15}
                    />
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
