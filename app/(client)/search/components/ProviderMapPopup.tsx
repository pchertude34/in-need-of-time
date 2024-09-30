import React from "react";
import { Button } from "@/components/ui/button";
import { XMarkIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

type ProviderMapPopupProps = {
  title: string;
  description?: PortableTextBlock[];
  onClose: () => void;
};

export function ProviderMapPopup(props: ProviderMapPopupProps) {
  const { title, description, onClose } = props;
  return (
    <div className="absolute bottom-[8px] left-0 w-full after:absolute after:left-0 after:top-0 after:h-0 after:w-0 after:-translate-x-2/4 after:border-l-[6px] after:border-r-[6px] after:border-t-[8px] after:border-l-transparent after:border-r-transparent after:border-t-primary-600 after:content-['']">
      <div className="padding-[5px] absolute left-0 top-0 -translate-x-2/4 -translate-y-full overflow-y-auto rounded-xl bg-primary-600 shadow-2xl">
        <div className="flex w-[300px] flex-col p-5 text-white">
          <div className="flex">
            <Button variant="text-light" size="text-sm" className="ml-auto" onClick={onClose}>
              <XMarkIcon className="h-4 w-4" />
            </Button>
          </div>
          <p className="mb-2 text-lg font-bold">{title}</p>
          {description && (
            <article className="prose text-white prose-p:text-sm prose-p:leading-snug">
              <PortableText value={description} />
            </article>
          )}
          <Button variant="light" size="sm" className="mt-5" onClick={() => console.log("clicked a thing")}>
            Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
