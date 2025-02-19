"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { HabitSuggestions } from "@/constants";
import { Control, useController } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HabitSelect } from "@/types";
import { z } from "zod";
import { formSchema } from "../HabitContainer/NewHabitForm";

type HabitSelectionProp = {
  control: Control<z.infer<typeof formSchema>>;
  name: keyof z.infer<typeof formSchema>;
};
const HabitSelection = ({ control, name }: HabitSelectionProp) => {
  const { field } = useController({ name, control });

  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [habits] = useState<HabitSelect[]>(HabitSuggestions);

  const handleSelectHabit = (habitName: string) => {
    setInputValue(habitName);
    field.onChange(habitName);
    setOpen(false);
  };

  return (
    <div className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative  w-full flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring ">
            <Input
              {...field}
              placeholder="Search or create a habit..."
              className="rounded-r-none w-full"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="w-[var(--radix-popover-trigger-width)] p-0"
          align="start"
        >
          <Command className="w-full ">
            <CommandInput
              placeholder="Search habits..."
              value={inputValue}
              onValueChange={setInputValue}
            />
            <CommandList className="h-60">
              <CommandEmpty>
                {`No habit found. Press enter or click the plus button to create 
                ${inputValue}.`}
              </CommandEmpty>
              {habits.map((category) => (
                <CommandGroup key={category.id} heading={category.title}>
                  {category.areas.map((habit) => {
                    return (
                      <CommandItem
                        key={habit.id}
                        value={habit.name}
                        onSelect={() => handleSelectHabit(habit.name)}
                      >
                        <FontAwesomeIcon
                          icon={{
                            prefix: habit.icon.prefix,
                            iconName: habit.icon.iconName,
                          }}
                          className={cn("mr-2 h-4 w-4")}
                        />
                        {habit.name}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default HabitSelection;

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { type Control, useController } from "react-hook-form";

// import {
//   Command,
//   CommandDialog,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
//   CommandShortcut,
// } from "@/components/ui/command";
// import { Input } from "@/components/ui/input";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAngleDown,
//   faArrowDown,
//   faCalculator,
//   faCalendar,
//   faRectangleList,
//   faSearch,
//   faSmile,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { HabitSuggestions } from "@/constants";

// type HabitSelectionProp = {
//   setHabitSelected: (value: string) => void;
//   habitSelected: string;
//   control: Control<any>;
//   name: string;
// };

// const HabitSelection = ({
//   setHabitSelected,
//   habitSelected,
//   control,
//   name,
// }: HabitSelectionProp) => {
//   const [open, setOpen] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const { field } = useController({ name, control });

//   const handleSelect = (value: string) => {
//     setInputValue(value);
//     field.onChange(value);
//     setOpen(false);
//   };

//   return (
//     <>
//       <div className="relative  w-full flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
//         <Input
//           type="text"
//           placeholder="Type a habit name..."
//           //value={inputValue}
//           {...field}
//           //onChange={(e) => setInputValue(e.target.value)}
//           //onFocus={() => setOpen(true)}
//           className=" w-full  text-[13px]"
//         />
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger>
//               <span onClick={() => setOpen(true)}>
//                 <FontAwesomeIcon icon={faAngleDown} className="text-primary" />
//               </span>
//             </TooltipTrigger>
//             <TooltipContent>Defined Habits</TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//       </div>

//       {open && (
//         <CommandDialog open={open} onOpenChange={setOpen}>
//           <CommandInput placeholder="search..." />
//           <CommandList className="max-h-60 ">
//             <CommandEmpty>No results found.</CommandEmpty>
//             {HabitSuggestions.map((habitSuggest, index) => (
//               <CommandGroup heading={habitSuggest.title} key={index}>
//                 {habitSuggest.areas.map((habit, i) => (
//                   <CommandItem key={habit.id}>
//                     <FontAwesomeIcon icon={faCalendar} />
//                     <span>{habit.name}</span>
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//             ))}

//             <CommandSeparator />
//           </CommandList>
//           {/* <CommandList>
//             <CommandEmpty>No results found.</CommandEmpty>
//             <CommandGroup heading="Suggestions">
//               <CommandItem>
//                 <FontAwesomeIcon icon={faCalendar} />
//                 <span>Calendar</span>
//               </CommandItem>
//               <CommandItem>
//                 <FontAwesomeIcon icon={faSmile} />
//                 <span>Search Emoji</span>
//               </CommandItem>
//               <CommandItem disabled>
//                 <FontAwesomeIcon icon={faCalculator} />
//                 <span>Calculator</span>
//               </CommandItem>
//             </CommandGroup>
//             <CommandSeparator />
//             <CommandGroup heading="Settings">
//               <CommandItem>
//                 <FontAwesomeIcon icon={faSmile} />
//                 <span>Profile</span>
//                 <CommandShortcut>⌘P</CommandShortcut>
//               </CommandItem>
//               <CommandItem>
//                 <FontAwesomeIcon icon={faSmile} />
//                 <span>Billing</span>
//                 <CommandShortcut>⌘B</CommandShortcut>
//               </CommandItem>
//               <CommandItem onSelect={() => handleSelect("Calendar")}>
//                 <FontAwesomeIcon icon={faSmile} />
//                 <span>Settings</span>
//                 <CommandShortcut>⌘S</CommandShortcut>
//               </CommandItem>
//             </CommandGroup>
//           </CommandList> */}
//         </CommandDialog>
//       )}
//       {/* // <CommandDialog>
//         //   <CommandInput placeholder="Type a command or search..." />
//         //   <CommandList>
//         //     <CommandEmpty>No results found.</CommandEmpty>
//         //     <CommandGroup heading="Suggestions">
//         //       <CommandItem onSelect={() => handleSelect("Calendar")}>
//         //         Calendar
//         //       </CommandItem>
//         //       <CommandItem onSelect={() => handleSelect("Emoji")}>
//         //         Search Emoji
//         //       </CommandItem>
//         //       <CommandItem onSelect={() => handleSelect("Calculator")}>
//         //         {" "}
//         //         Calculator
//         //       </CommandItem>
//         //     </CommandGroup>
//         //     <CommandSeparator />
//         //     <CommandGroup heading="Settings">
//         //       <CommandItem onSelect={() => handleSelect("Profile")}>
//         //         Profile
//         //       </CommandItem>
//         //       <CommandItem onSelect={() => handleSelect("Billing")}>
//         //         Billing
//         //       </CommandItem>
//         //       <CommandItem onSelect={() => handleSelect("Settings")}>
//         //         Settings
//         //       </CommandItem>
//         //     </CommandGroup>
//         //   </CommandList>
//         // </CommandDialog> */}
//     </>
//   );
// };

// export default HabitSelection;
