import React, { createContext } from "react";

export type SidebarContextType = {
	isSidebar: boolean;
	setIsSidebar: React.Dispatch<React.SetStateAction<boolean>> | null;
};

export const SidebarContext = createContext<SidebarContextType>({
	isSidebar: false,
	setIsSidebar: null,
});
