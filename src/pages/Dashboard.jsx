import { Button, HStack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import DashboardTable from "../features/Dashboard/DashboardTable";
const days = [7, 30, 90];
function Dashboard() {
  const [day, setDay] = useState(7);
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
              onClick={() => setDay(d)}
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
