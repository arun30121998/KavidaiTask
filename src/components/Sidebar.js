import { useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { useState } from "react";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSelectedSize(newSize);
    onOpen();
  };

  const sizeData = [
    { size: "xl", label: "Import Data" },
    { size: "xl", label: "Add Supplier" },
  ];

  return (
    <>
      {sizeData.map((item) => (
        <Button
          onClick={() => handleClick(item.size)}
          key={item.size}
          m={4}
        >{` ${item.label} `}</Button>
      ))}

      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        size={selectedSize}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>{`${selectedSize}  `}</DrawerHeader> */}
          <DrawerBody>
            {selectedSize === "xl" && <SidebarContent />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
