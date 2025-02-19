import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Control, useController } from "react-hook-form";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { iconsData } from "./IconsData";
import { z } from "zod";
import { formSchema } from "../HabitContainer/NewHabitForm";

type IconsWindowProps = {
  control?: Control<z.infer<typeof formSchema>>;
  name: keyof z.infer<typeof formSchema>;
};

export default function IconsWindow({ control, name }: IconsWindowProps) {
  const [open, setOpen] = React.useState(false);
  const { field } = useController({
    name,
    control,
  });

  const handleIconSelection = (icon: IconProp) => {
    // setIconSelected(icon);
    field.onChange(icon);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <FontAwesomeIcon
          className="bg-primary mt-1 p-4 rounded-md text-white cursor-pointer"
          icon={field.value}
          height={16}
          width={20}
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-w-full">
        <DialogHeader>
          <DialogTitle>Choose Your Icon</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap border p-2 border-gray-300 gap-4 items-center rounded-md mb-5">
          {iconsData.map((icon, iconIndex) => (
            <FontAwesomeIcon
              key={iconIndex}
              title={icon.iconTitle}
              className="border p-2 border-gray-300 rounded-md text-xl cursor-pointer hover:text-primary hover:border-primary"
              height={50}
              width={50}
              icon={icon.faIcon}
              onClick={() => handleIconSelection(icon.faIcon)}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
