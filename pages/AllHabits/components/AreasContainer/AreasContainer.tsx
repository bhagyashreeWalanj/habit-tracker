"use client";

import { AreaType } from "@/types/GlobalTypes";
import { useGlobalContextProvider } from "@/types/contextApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

// areas selection tabs
const AreasContainer = () => {
  const { allAreasObject, selectedAreaTabObject } = useGlobalContextProvider();
  const { allAreas } = allAreasObject;

  const [selectedArea, setSelectedAreas] = useState<{
    [key: number]: boolean;
  }>({});
  const { setSelectedAreaTab } = selectedAreaTabObject;

  const toggleSelection = (index: number) => {
    const selectedAreasCopy = { ...selectedArea };

    // make all the indexes false
    Object.keys(selectedAreasCopy).forEach((key) => {
      selectedAreasCopy[parseInt(key)] = false;
    });

    // Only set the index that we clicked on the true
    selectedAreasCopy[index] = true;
    setSelectedAreaTab(allAreas[index].value);
    setSelectedAreas(selectedAreasCopy);
    // filteringAllHabits(allAreas[index].value);
  };

  useEffect(() => {
    // Create an empty key value pair object
    const initialSelectedArea: { [key: number]: boolean } = {};

    // Add in it the indexes based on the areas item with false as a value  for all of them
    // { 0: false, 1: false}
    allAreas.forEach((_, index) => {
      initialSelectedArea[index] = false;
    });

    // set first index as true which is all
    initialSelectedArea[0] = true;

    // update the selected areas
    setSelectedAreas(initialSelectedArea);
  }, [allAreas]);

  return (
    <div className="p-5 bg-white dark:bg-darkBackground rounded-md flex gap-3 items-center  transition-all mt-5 text-base dark:border-white/[0.2] border-black/[0.1] border dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:text-white">
      {allAreas.map((area: AreaType, index: number) => (
        <div
          onClick={() => toggleSelection(index)}
          key={`${area.value}_${index}`}
        >
          <SingleAreaContainer
            singleArea={area}
            isSelected={selectedArea[index]}
          />
        </div>
      ))}
    </div>
  );
};

export default AreasContainer;

const SingleAreaContainer = ({
  singleArea,
  isSelected,
}: {
  singleArea: AreaType;
  isSelected: boolean;
}) => {
  return (
    <div
      className={`p-3 px-5 rounded-md flex gap-1 items-center justify-center cursor-pointer border py-2 text-center text-sm transition-all shadow-sm hover:shadow-lg text-primary dark:text-white dark:hover:text-black hover:text-black hover:bg-slate-100 focus:text-white  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
        isSelected ? "bg-primary text-white" : "text-gray-400"
      }`}
    >
      <FontAwesomeIcon icon={singleArea.icon} />
      <span>{singleArea.label}</span>
    </div>
  );
};
