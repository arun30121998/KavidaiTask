import React from "react";
import { ChakraProvider, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Suppliers from "./Suppliers";
import InputUI from "./Input";
import "./Tabs.css";
import SearchIcon from "@mui/icons-material/Search";

// 
export default function MyTabs() {
  return (
    <div>
      <div className='search-section p-2 col-5'>
        <p>Manage all your supplier contacts and your interaction history within the page</p>
        <InputUI icon={SearchIcon} />
      </div>
      <div className='pl-2'>
        <ChakraProvider>
          <Tabs>
            <TabList>
              <Tab>Suppliers</Tab>
              <Tab>Contacts</Tab>
              <Tab>Purchase Orders</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Suppliers />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ChakraProvider>
      </div>
    </div>
  );
}
