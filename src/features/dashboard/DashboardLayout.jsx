import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
function DashboardLayout() {
  const { bookings, isLoading1 } = useRecentBookings();
  const { stays, isLoading: isLoading2, confirmedStays } = useRecentStays();

  if (isLoading1 || isLoading2) return <Spinner />;

  console.log(bookings);
  console.log("this is for stays", stays);

  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today&apos;s activity</div>
      <div>Chart of stay duration</div>
      <div>Chart of sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
