import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useBookingFunctions } from "@/firebase/firebase";
import { ListFilter, RotateCcw } from "lucide-react"; // Assuming you're using Lucide icons
import { useEffect, useState } from "react";

const bookings = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    roomType: "Deluxe Suite",
    specialRequirements: "None",
    checkIn: "2023-10-01",
    checkOut: "2023-10-05",
    guests: 2,
    createdAt: "2023-09-25",
    status: "Confirmed", // Status field
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phoneNumber: "987-654-3210",
    roomType: "Standard Room",
    specialRequirements: "Vegetarian meals",
    checkIn: "2023-11-01",
    checkOut: "2023-11-03",
    guests: 1,
    createdAt: "2023-09-26",
    status: "Pending", // Status field
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    phoneNumber: "555-123-4567",
    roomType: "Family Suite",
    specialRequirements: "Extra bed",
    checkIn: "2023-12-15",
    checkOut: "2023-12-20",
    guests: 4,
    createdAt: "2023-09-27",
    status: "Cancelled", // Status field
  },
];

function ManageBookings() {
  // Sample bookings data (replace with your actual data)
  const { getBookings } = useBookingFunctions();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllBookings = async () => {
    setLoading(true); // Assuming you have a state for loading, e.g., const [loading, setLoading] = useState(false);

    try {
      const getAllBookingSResponse = await getBookings();

      if (getAllBookingSResponse?.success) {
        console.log("All bookings >> ", getAllBookingSResponse?.data);
        setBookings(getAllBookingSResponse?.data); // Assuming you have a setBookings function
      } else {
        console.error(
          "Error fetching bookings:",
          getAllBookingSResponse?.message || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setError(
        "An error occurred while fetching bookings. Please try again later."
      ); // Assuming you have a setError function to display an error message to the user
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  useEffect(() => {
    fetchAllBookings();
  }, []);

  return (
    <div className="p-6">
      {/* Introductory Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Manage Bookings</h1>
        <p className="text-muted-foreground">
          Welcome to the Bookings Management page. Here, you can view and manage
          all bookings in your system. Use the tabs below to switch between
          monthly and yearly views, and filter or export bookings as needed.
        </p>
      </div>

      {/* Tabs and Table */}
      <Tabs defaultValue="month">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 gap-1 text-sm"
                >
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Confirmed
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Cancelled</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Refresh</span>
            </Button>
          </div>
        </div>

        {/* Monthly Bookings Tab */}
        <TabsContent value="month">
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Bookings</CardTitle>
              <CardDescription>Recent bookings in your system.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Unit Type
                    </TableHead>

                    <TableHead className="hidden md:table-cell">
                      Check-In
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Check-Out
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Guests
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Created At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings?.map((booking, index) => (
                    <TableRow key={booking.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <div className="font-medium">{booking.name}</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          {booking.email}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Phone: {booking.phone}
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {booking.unitType}
                      </TableCell>

                      <TableCell className="hidden md:table-cell">
                        {booking.checkIn}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {booking.checkOut}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {booking.guests}
                      </TableCell>
                      <TableCell>
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            booking.status === "confirmed"
                              ? "bg-green-100 text-green-700"
                              : booking.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {booking.status.charAt(0).toUpperCase() +
                            booking.status.slice(1)}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        {booking.createdAt}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="year">
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Bookings</CardTitle>
              <CardDescription>Annual bookings in your system.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Unit Type
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Special Requirements
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Check-In
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Check-Out
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Guests
                    </TableHead>
                    <TableHead className="text-right">Created At</TableHead>
                  </TableRow>
                </TableHeader>
              </Table>
              <div className="w-full">
                <div className="flex items-center justify-center h-64 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg">
                  <p className="text-white text-2xl font-semibold text-center">
                    Your Annual Statistics will appear after the year ends.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ManageBookings;
