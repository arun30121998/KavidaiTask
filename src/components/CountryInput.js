import { Box, Button, ButtonGroup, Flex, HStack, IconButton, Input, SkeletonText, Text } from "@chakra-ui/react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import NearMeIcon from "@mui/icons-material/NearMe";
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from "@react-google-maps/api";
import { useRef, useState } from "react";

const center = { lat: 48.8584, lng: 2.2945 };

function CountryUI() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef(); // Corrected typo here

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      // Corrected typo here
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value, // Corrected typo here
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = ""; // Corrected typo here
  }

  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='90vh'
      w='100vw'
      marginTop={10}
    >
      <Box
        position='absolute'
        left={0}
        top={0}
        h='100%'
        w='100%'
      >
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: true,
            fullscreenControl: true,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='1'
      >
        <HStack
          spacing={2}
          justifyContent='space-between'
        >
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type='text'
                placeholder='Origin'
                ref={originRef}
              />
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type='text'
                placeholder='Destination'
                ref={destinationRef} // Corrected typo here
              />
            </Autocomplete>
          </Box>

          <ButtonGroup>
            <Button
              colorScheme='pink'
              type='submit'
              onClick={calculateRoute}
            >
              Calculate Route
            </Button>
            <IconButton
              aria-label='center back'
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        <HStack
          spacing={4}
          mt={4}
          justifyContent='space-between'
        >
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label='center back'
            isRound
            icon={<NearMeIcon/>}
            onClick={() => {
              map.panTo(center);
              map.setZoom(15);
            }}
          />
        </HStack>
      </Box>
    </Flex>
  );
}

export default CountryUI;
