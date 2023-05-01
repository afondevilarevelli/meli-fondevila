import { formatDate, getRatingNumber } from "@/lib/utils";
import { IOpinion } from "@/models/opinion";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import { FaEllipsisV, FaFlag, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";

type TProps = {
  opinion: IOpinion;
};

export default function OpinionItem({ opinion }: TProps) {
  const theme = useTheme();
  return (
    <Box width={"100%"}>
      <Flex justify={"space-between"} align={"center"}>
        <Rating
          readonly={true}
          allowFraction
          initialValue={getRatingNumber(opinion.rating)}
          emptyStyle={{ display: "flex" }}
          fillStyle={{ display: "-webkit-inline-box" }}
          size={16}
          fillColor={theme.colors.blue[400]}
        />

        <Text fontSize={12} color={"gray.400"}>
          {formatDate(opinion.created_at)}
        </Text>
      </Flex>

      <Text fontSize={14} my={4}>
        {opinion.text}
      </Text>

      <Flex justify={"space-between"} align={"center"}>
        <ButtonGroup>
          <Button
            rightIcon={
              <Flex gap={2}>
                <Icon as={FaThumbsUp} />
                {opinion.likes}
              </Flex>
            }
            borderRadius={99}
            size={"xs"}
            py={4}
            px={3}
          >
            Es útil
          </Button>
          <IconButton
            icon={<Icon as={FaThumbsDown} />}
            aria-label={"No me gusta"}
            borderRadius={99}
            size={"xs"}
            py={4}
            px={3}
          />
        </ButtonGroup>

        <Popover>
          <PopoverTrigger>
            <IconButton
              variant={"unstyled"}
              icon={<Icon as={FaEllipsisV} />}
              aria-label={"Options"}
              color={"gray.400"}
            />
          </PopoverTrigger>
          <PopoverContent width={"fit-content"}>
            <PopoverArrow />
            <PopoverBody>
              <Button
                width={"100%"}
                variant={"ghost"}
                leftIcon={<Icon as={FaFlag} />}
              >
                Denunciar
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Box>
  );
}
