"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import IconsWindow from "../IconWindow/IconsWindow";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import MultipleSelector from "@/components/ui/multiple-selector";

import { WeekDays } from "@/constants";
import TimeWindow from "../TimeWindow/TimeWindow";
import addNewHabit from "@/utils/allHabitsUtils/addNewHabit";
import { useGlobalContextProvider } from "@/types/contextApi";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HabitSelection from "../SettingsWindow/HabitSelection";
import { AllHabitsProps, DayOption } from "@/types";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

const areasSchema = z.object({
  label: z.string(),
  value: z.string(),
});
export const formSchema = z.object({
  habitName: z
    .string({ message: "The habit name field is still empty!" })
    .min(2, {
      message: "The Habit Name must be at least 2 characters",
    }),
  _id: z.string().optional(),
  icon: z.any().optional(),
  frequency: z.object({
    type: z.string(),
    days: z.array(z.string()),
    timesPerWeek: z.number().optional(),
    timesPerDay: z.any().optional(),
  }),
  isNotificationOn: z.boolean().optional(),
  notificationTime: z.string().optional(),
  areas: z.array(areasSchema).min(1, {
    message: "Select atleast 1 area to tag",
  }),
});

const NewHabitForm = ({
  setCloseModalAfterSubmit,
}: {
  setCloseModalAfterSubmit: () => void;
}) => {
  const [allDays, setAllDays] = useState<DayOption[]>(WeekDays);
  const { toast } = useToast();
  const { allHabitsObject, allAreasObject } = useGlobalContextProvider();
  const { allHabits, setAllHabits } = allHabitsObject;
  const { allAreas } = allAreasObject;
  const [repeatOptions, setRepeatOptions] = useState([
    { name: "Daily", isSelected: true },
    { name: "Weekly", isSelected: false },
    // { name: "Monthly", isSelected: false },
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      _id: "",
      habitName: "",
      icon: faLayerGroup,
      isNotificationOn: false,
      frequency: {
        type: "Daily",
        days: ["Mo"],
        timesPerWeek: 1,
        timesPerDay: 1,
      },
      notificationTime: "",
      areas: [],
    },
  });

  // const handleIconSelected = (icon: IconProp) => {
  //   setIconSelected(icon);
  //   form.setValue("icon", icon);
  // };
  const changeOption = (indexClicked: number, option: string) => {
    if (option === "repeat") {
      const updatedOption = repeatOptions.map((option, index) => ({
        ...option,
        isSelected: index === indexClicked,
      }));
      setRepeatOptions(updatedOption);
      const currenttimesPerDay: number =
        Number(form.getValues("frequency.timesPerDay")) || 1;

      const selectedType =
        updatedOption.find((option) => option.isSelected)?.name || "Daily";
      form.setValue("frequency", {
        type: selectedType,
        days: selectedType === "Daily" ? ["Mo"] : ["Mo"],
        timesPerWeek: selectedType === "Weekly" ? 1 : 0,
        timesPerDay: currenttimesPerDay || 1,
      });
    } else if (option === "days") {
      const updatedAllDaysOption = allDays.map((singleDay, index) =>
        index === indexClicked
          ? { ...singleDay, isSelected: !singleDay.isSelected }
          : singleDay
      );
      setAllDays(updatedAllDaysOption);

      const updatedDays = updatedAllDaysOption
        .filter((option) => option.isSelected)
        .map((day) => day.name);
      form.setValue("frequency", {
        ...form.getValues("frequency"),
        days: updatedDays,
      });
    }
  };

  const adjustTimesPerWeek = (increment: number) => {
    const currentValue = form.getValues("frequency.timesPerWeek") || 0;
    const newValue = Math.max(1, Math.min(7, currentValue + increment));
    form.setValue("frequency.timesPerWeek", newValue);
  };

  const setNotificationTime = (time: string) => {
    form.setValue("notificationTime", time);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // setIsLoading(true);
    console.log("values", values.frequency);
    try {
      const habitData: AllHabitsProps = {
        _id: uuidv4(),
        name: values.habitName,
        icon: { prefix: values.icon.prefix, iconName: values.icon.iconName },
        isNotificationOn: values.isNotificationOn,
        completedDays: [{ _id: "1", date: "03/02/2025" }],
        frequency: values.frequency,
        notificationTime: values.notificationTime,
        areas: values.areas,
      };
      console.log("values", habitData);

      addNewHabit({ allHabits, setAllHabits, newHabit: habitData });

      setTimeout(() => {
        toast({
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
          ),
          title: "Your new Habit has been added Succcessfully",
          description: `${new Date().toLocaleString()}`,
          variant: "success",
        });
      }, 200);
      setTimeout(() => {
        setCloseModalAfterSubmit();
      }, 200);
      //  const newHabit = await createHabit(habitData);

      //if (newHabit) router.push(`/patients/${user.$id}/register`);

      //console.log(userData);
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
        <FormField
          control={form.control}
          name="habitName"
          render={() => (
            <FormItem>
              <FormLabel className="font-bold text-base">Habit Name</FormLabel>
              <FormControl>
                <div className="flex gap-4 justify-between items-center ">
                  <HabitSelection control={form.control} name="habitName" />

                  <IconsWindow control={form.control} name="icon" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Goal options */}
        <FormField
          control={form.control}
          name="frequency.timesPerDay"
          render={({ field }) => (
            <FormItem className="flex flex-col  gap-2 mt-10 px-3">
              <FormLabel className="font-bold text-base">Goal</FormLabel>
              <FormControl>
                <div className="flex  gap-2 mt-4 items-center max-w-sm">
                  <Input
                    type="number"
                    min={0}
                    max={100}
                    step={1}
                    //value={field.value}
                    {...field}
                    className="border w-[100px] border-gray-200 outline-none rounded-md text-[13px]"
                  />
                  <Select>
                    <SelectTrigger className="w-full border  border-gray-200 outline-none p-4 rounded-md text-[13px]">
                      <SelectValue placeholder="times" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="times">times</SelectItem>
                      <SelectItem value="minutes">minutes</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="per day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="perday">per day</SelectItem>
                      <SelectItem value="perweek">per week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*  repeat option */}
        <FormField
          control={form.control}
          name="frequency.type"
          render={({ field }) => (
            <FormItem className="flex flex-col  gap-2 mt-10 px-3">
              <FormLabel className="font-bold text-base">Repeat</FormLabel>
              <FormControl>
                <div className="flex gap-2 mt-4 items-center max-w-sm">
                  {repeatOptions.map((option, index) => (
                    <Button
                      type="button"
                      key={index}
                      onClick={() => changeOption(index, "repeat")}
                      {...field}
                      className={`p-2 px-3 rounded-md text-white cursor-pointer ${
                        option.isSelected
                          ? "bg-primary dark:bg-primary"
                          : "bg-white dark:bg-primary/20 dark:text-white border text-primary hover:text-white"
                      }`}
                    >
                      {option.name}
                    </Button>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Days to repeat */}
        {form.watch("frequency.type") === "Daily" && (
          <FormField
            control={form.control}
            name="frequency.days"
            render={() => (
              <FormItem className="flex flex-col gap-2 mt-10 px-3">
                <FormLabel className="font-bold text-base">
                  Days to Repeat
                </FormLabel>
                <FormControl>
                  <div className="flex gap-2 mt-4 items-center max-w-sm">
                    {allDays.map((option, index) => (
                      <Button
                        type="button"
                        key={option.id}
                        onClick={() => changeOption(index, "days")}
                        className={`p-2 px-3 rounded-md text-white cursor-pointer ${
                          option.isSelected
                            ? "bg-primary dark:bg-primary"
                            : "bg-white dark:bg-primary/20 dark:text-white border text-primary hover:text-white"
                        }`}
                      >
                        {option.name}
                      </Button>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {/* if frequency is weekly  */}
        {form.watch("frequency.type") === "Weekly" && (
          <FormField
            control={form.control}
            name="frequency.timesPerWeek"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2 mt-10 px-3">
                <FormLabel>Frequency</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-sm">
                      {field.value} times a week
                    </span>
                    <Button
                      type="button"
                      onClick={() => adjustTimesPerWeek(-1)}
                      className="p-2 bg-primary hover:bg-primary/40 rounded-sm w-10 h-10"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>
                    <span className="text-2xl font-light">{field.value}</span>
                    <Button
                      type="button"
                      onClick={() => adjustTimesPerWeek(1)}
                      className="p-2 bg-primary hover:bg-primary rounded-sm w-10 h-10"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {/* daily notification  */}
        <FormField
          control={form.control}
          name="isNotificationOn"
          render={({ field }) => (
            <FormItem className="flex flex-col  gap-2 mt-10 px-3">
              <FormLabel className="font-bold text-base"></FormLabel>
              <FormControl>
                <div>
                  <div className="flex justify-between gap-2 ">
                    <Label className="font-bold text-base">
                      {" "}
                      Daily Notification
                    </Label>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </div>
                  {field.value === true ? (
                    <TimeWindow
                      setTimeSelected={setNotificationTime}
                      // control={form.control}
                      //  name="notificationTime"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* areas  */}
        <FormField
          control={form.control}
          name="areas"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 px-3 mt-10">
              <FormLabel className="font-semibold text-[17px]">Areas</FormLabel>
              <FormControl>
                <div>
                  <MultipleSelector
                    {...field}
                    defaultOptions={allAreas}
                    placeholder="Select areas you like..."
                    emptyIndicator={
                      <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                        no results found.
                      </p>
                    }
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="default"
          className="bg-primary p-4 w-[98%] rounded-md text-white"
        >
          Add a Habit
        </Button>
      </form>
    </Form>
  );
};
export default NewHabitForm;
