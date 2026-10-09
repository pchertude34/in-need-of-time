import React from "react";
import Link from "next/link";
import { Button } from "@in-need-of-time/ui";
import { XMarkIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

type ProviderMapPopupProps = {
  id: string;
  title: string;
  description?: PortableTextBlock[];
  onClose: () => void;
};

export function ProviderMapPopup(props: ProviderMapPopupProps) {
  const { id, title, description, onClose } = props;
  return (
    <div className="after:border-t-primary-600 absolute bottom-[8px] left-0 w-full after:absolute after:top-0 after:left-0 after:h-0 after:w-0 after:-translate-x-2/4 after:border-t-[8px] after:border-r-[6px] after:border-l-[6px] after:border-r-transparent after:border-l-transparent after:content-['']">
      <div className="padding-[5px] bg-primary-600 absolute top-0 left-0 -translate-x-2/4 -translate-y-full overflow-y-auto rounded-xl shadow-2xl">
        <div className="flex w-[300px] flex-col p-5 text-white">
          <div className="flex">
            <Button variant="text-light" size="text-sm" className="ml-auto" onClick={onClose}>
              <XMarkIcon className="h-4 w-4" />
            </Button>
          </div>
          <p className="mb-2 text-lg font-bold">{title}</p>
          {description && (
            <article className="prose prose-p:text-sm prose-p:leading-snug text-white">
              <PortableText value={description} />
            </article>
          )}
          <Button variant="light" size="sm" className="mt-5" asChild>
            <Link href={`/providers/${id}`}>
              Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
