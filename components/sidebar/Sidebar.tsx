// import React, { useRef, useEffect } from "react";
// import LogoAndName from "./LogoAndName";
// // import MenuSelection from "./MenuSelection";
// import LogoutSection from "./LogoutSection";
// import { useGlobalContextProvider } from "@/types/contextApi";
// import { AppSidebar } from "./sidebar-new/app-sidebar";

// const Sidebar = () => {
//   const { openSideBarObject } = useGlobalContextProvider();
//   const { openSideBar, setOpenSideBar } = openSideBarObject;
//   const sideBarRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleOutsideClicked(event: MouseEvent) {
//       if (!sideBarRef.current?.contains(event.target as Node)) {
//         setOpenSideBar(false);
//       }
//     }

//     document.addEventListener("click", handleOutsideClicked);
//     return () => {
//       document.removeEventListener("click", handleOutsideClicked);
//     };
//   }, [openSideBar]);

//   return (
//     <div
//       ref={sideBarRef}
//       className={` ${
//         !openSideBar
//           ? "max-xl:hidden bg-gray-100 dark:bg-darkBackground "
//           : "fixed shadow-lg"
//       }

//       flex-grow z-50 p-10  flex-col transition-all  min-h-screen`}
//     >
//       {/* <LogoAndName /> */}
//       {/* <AppSidebar /> */}
//       {/* <MenuSelection /> */}
//       {/* <LogoutSection /> */}
//     </div>
//   );
// };

// export default Sidebar;
