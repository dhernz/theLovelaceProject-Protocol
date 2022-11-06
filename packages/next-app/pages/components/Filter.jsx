import React, { useState } from "react";
import {
    SimpleGrid,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Select,
    Stack,
    useColorModeValue,
    useMediaQuery
} from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";
import Card from "./Card";
import areaJSON from '../../data/area.json';
import typeJSON from '../../data/type.json';

    const ALL = gql`
        query getGreetings {
            greetings {
                greetingID
                ownerAddress
                country
                name
                age
                message
                crypto
                imageURL
                timestamp
                totalRecieved
            }
        }
    `;
    const SORT = gql`
        query getGreetings {
            greetings(orderBy: totalRecieved orderDirection: desc) {
                greetingID
                ownerAddress
                country
                name
                age
                message
                crypto
                imageURL
                timestamp
                totalRecieved
            }
        }
    `;

  
  function Filter() {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
    const yesterdayInSecs = Math.floor((new Date().getTime() / 1000) - 86400); // the timestamps recorded in our solidity contract are in seconds, we convert them to miliseconds here to be compatible with the Date/Time library
    const [yesterdayTimestamp] = useState(yesterdayInSecs.toString());
    const [personCountry, setCountry] = useState("");
    const [faveCrypto, setCrypto] = useState("");
    const [other, setOther] = useState("");

    const allGreetingsQuery = useQuery(ALL);
    const sortQuery = useQuery(SORT);

    return (
      <div>
        <Flex 
            align="center" 
            justify="center">
            <Box
                borderWidth='1px'
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                p={2}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base">
                <Stack direction={ isLargerThanLG ? 'row' : 'column'} spacing={2}>[]
                {/* FIELD: COUNTRY */}
                    <FormControl>
                    <FormLabel>Area</FormLabel>
                    <Select
                        id={"Country"}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder='Select Area'>
                            {areaJSON.map((country) => {return(
                                <option key={country.code}>
                                    {country.name}
                                </option>);
                            })}
                    </Select>
                    </FormControl>

                    <FormControl>
                    <FormLabel>Role</FormLabel>
                    <Select
                        id={"Crypto"}
                        onChange={(e) => setCrypto(e.target.value)}
                        placeholder='Select Role'>
                            {typeJSON.map((crypto) => {return(
                                <option key={crypto.code}>
                                    {crypto.name}
                                </option>);
                            })}
                    </Select>
                    </FormControl>

                    <FormControl>
                    <FormLabel>Sort By</FormLabel>
                    <Select
                        id={"Other"}
                        onChange={(e) => setOther(e.target.value)}
                        placeholder='Select Sort'>
                            <option>
                                Level
                            </option>
                    </Select>
                    </FormControl>
                </Stack>
            </Box>
        </Flex>

        <SimpleGrid minChildWidth='300px' spacing='40px'>
            { faveCrypto == "" 
            && personCountry == ""
            && other == ""
            && allGreetingsQuery.data 
            && allGreetingsQuery.data.greetings.map((greeting) => ( 
                <Card
                    key={greeting.greetingID}
                    greetingID={greeting.greetingID}
                    ownerAddress={greeting.ownerAddress}
                    country={greeting.country}
                    name={greeting.name}
                    age={greeting.age}
                    message={greeting.message}
                    crypto={greeting.crypto}
                    imageURL={greeting.imageURL}
                    timestamp={greeting.timestamp}
                    totalRecieved={greeting.totalRecieved}> 
                </Card>))
            }
        </SimpleGrid>
      </div>
    );
  }
  
  export default Filter;
  