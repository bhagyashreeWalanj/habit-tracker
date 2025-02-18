// "use client";
// import { menuItemType } from "@/types/MenuItemType";
// import { useGlobalContextProvider } from "@/types/contextApi";
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const MenuSelection = () => {
//   const { menuItemsObject } = useGlobalContextProvider();
//   const { menuItems } = menuItemsObject;

//   return (
//     <div className="mt-[180px]">
//       {menuItems.map((menuItem: menuItemType) => {
//         console.log("menuItem.id", menuItem.id);
//         return (
//           <div key={menuItem.id}>
//             <SingleMenuItem menuItemProp={menuItem} />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// function SingleMenuItem({ menuItemProp }: { menuItemProp: menuItemType }) {
//   console.log("menuItemProp", menuItemProp);
//   const { menuItemsObject } = useGlobalContextProvider();
//   const { menuItems, setMenuItems } = menuItemsObject;

//   function handleMenuItem() {
//     const copyMenuItems = menuItems.map((menuItem) => {
//       if (menuItemProp.name === menuItem.name) {
//         return { ...menuItem, isSelected: true };
//       } else {
//         return { ...menuItem, isSelected: false };
//       }
//     });
//     setMenuItems(copyMenuItems);
//   }

//   return (
//     <div
//       onClick={handleMenuItem}
//       className={`flex gap-2 items-center p-2 mb-3 ml-8 cursor-pointer rounded-md w-36 select-none ${
//         menuItemProp.isSelected
//           ? "bg-primary text-white transition-all"
//           : "hover:text-primary"
//       }`}
//     >
//       <FontAwesomeIcon
//         className=""
//         icon={menuItemProp.icon}
//         width={20}
//         height={20}
//       />
//       <div>{menuItemProp.name}</div>
//     </div>
//   );
// }

// export default MenuSelection;
