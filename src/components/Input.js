import React from "react";
import "./Input.css";
import { ChakraProvider, Stack, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

export default function InputUI({ placeholder, icon,label }) {
  return (
    <div>
      <ChakraProvider>
        <Stack spacing={4}>
        <label>{label}</label>
          <InputGroup className="mb-2">
            {icon && (
              <InputLeftElement pointerEvents="none">
                <Icon as={icon} color="gray.300" />
              </InputLeftElement>
            )}
            <Input
              type="tel"
              placeholder={placeholder}
            />
          </InputGroup>
        </Stack>
      </ChakraProvider>
    </div>
  );
}
