import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Card } from "@/components/ui/card";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

type PathFormItemType = {
  title: string;
  description: string;
  isShowing: boolean;
  children: ({
    handleFormCompleted,
  }: {
    handleFormCompleted: (complete: boolean) => void;
  }) => JSX.Element | false | null;
};

export function FormCard(props: PathFormItemType) {
  const { title, description, isShowing, children } = props;
  const [isComplete, setIsComplete] = useState(false);

  function handleFormCompleted(complete: boolean) {
    setIsComplete(complete);
  }

  return (
    <Transition
      appear={true}
      show={isShowing}
      enter="transition-opacity duration-250"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Card className="p-6">
        <div className="grid grid-cols-5">
          <div className="col-span-4">
            <h2 className="text-2xl font-bold text-gray-700">{title}</h2>
            <p className="text-md mb-6 text-gray-700">{description}</p>
          </div>
          <div className="col-span-1 flex">
            <div className="ml-auto">
              <Transition
                show={isComplete}
                enter="transform transition duration-250"
                enterFrom="opacity-0 scale-50"
                enterTo="opacity-100 scale-100"
                leave="transition-opacity duration-75"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <CheckCircleIcon
                  className="block h-10 w-10 text-green-600"
                  aria-label="step complete"
                />
              </Transition>
            </div>
          </div>
        </div>
        {children({ handleFormCompleted })}
      </Card>
    </Transition>
  );
}
