import { Button, HStack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import DashboardTable from "../features/Dashboard/DashboardTable";
import useRecentBookings from "../features/Dashboard/useRecentBookings";
import { useSearchParams } from "react-router-dom";

const days = [7, 30, 90];
function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading } = useRecentBookings();
  if (isLoading) return <div />;

  const day = Number(searchParams.get("last")) || 7;
  const handleDaySelect = (day) => {
    searchParams.set("last", day);
    setSearchParams(searchParams);
  };

  return (
    <>
      <HStack alignItems='center' justifyContent='space-between'>
        <Heading mb='32px'>Dashboard</Heading>
        <HStack gap='8px'>
          {days.map((d) => (
            <Button
              bgColor={day === d ? "var(--secondary)" : ""}
              _hover={{
                bgColor: "var(--secondary)",
              }}
              key={d}
              onClick={() => handleDaySelect(d)}
            >
              In {d} days
            </Button>
          ))}
        </HStack>
      </HStack>

      <DashboardTable />
    </>
  );
}

export default Dashboard;
