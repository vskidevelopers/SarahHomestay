import { Truck, Copy, CreditCard, ListFilter, File } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { auth, useBookingFunctions, useHotelFunctions } from "@/utils/firebase"
import { useEffect, useState } from "react"
import capitalize from "@/utils/Capitalize"
import { Link } from "react-router-dom"
import BookingDetailsCard from "@/components/admin/BookingDetailsCard"



function AdminDashboard() {
    const [hotel, setHotel] = useState()
    const [bookings, setBooking] = useState([])
    const { getHotelByUserId } = useHotelFunctions()
    const { getBookingsForHotel } = useBookingFunctions()
    const user = auth?.currentUser
    console.log("user from admin dashboard > ", user);


    const getUserHotel = async () => {
        const hotelResponse = await getHotelByUserId(user?.uid)
        console.log("hotelResponse from adminDash > ", hotelResponse?.hotelsData[0]);
        setHotel(hotelResponse?.hotelsData[0])
        localStorage.setItem("hotelId", hotelResponse?.hotelsData[0]?.id)
    }

    const getAllBookings = async () => {
        const localId = localStorage.getItem("hotelId")
        const bookingResponse = await getBookingsForHotel(localId)
        console.log("bookingResponse from adminDash > ", bookingResponse);
        setBooking(bookingResponse?.data)

    }


    useEffect(() => {
        getUserHotel()
        getAllBookings()
    }, [])


    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                    <Card
                        className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
                    >
                        <CardHeader className="pb-3">
                            <CardTitle className="text-2xl ">
                                Welcome, to <span className="text-primary font-bold">Sarah Homestay</span>
                            </CardTitle>

                            <CardDescription className="max-w-lg text-balance leading-relaxed">
  Seamlessly manage your rental homes with Sarah Homestay. Oversee bookings, monitor guest stays, and gain valuable insights to provide a comfortable and unforgettable experience for your clients.
</CardDescription>

                        </CardHeader>
                        <CardFooter>
                            <Link to={`/admin/homes`}>
                                <Button>Manage Homes</Button>
                            </Link>

                        </CardFooter>
                    </Card>

                    <Card x-chunk="dashboard-05-chunk-1">
                        <CardHeader className="pb-2">
                            <CardDescription>Homes</CardDescription>
                            <CardTitle className="text-4xl">0</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                +25% from last week
                            </div>
                        </CardContent>
                        <CardFooter>

                        </CardFooter>
                    </Card>
                    <Card x-chunk="dashboard-05-chunk-2">
                        <CardHeader className="pb-2">
                            <CardDescription>Bookings</CardDescription>
                            <CardTitle className="text-4xl">0 </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                +10% from last month
                            </div>
                        </CardContent>
                        <CardFooter>

                        </CardFooter>
                    </Card>
                </div>
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
                                        Fulfilled
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Declined
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Refunded
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button
                                size="sm"
                                variant="outline"
                                className="h-7 gap-1 text-sm"
                            >
                                <File className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only">Export</span>
                            </Button>
                        </div>
                    </div>
                    <TabsContent value="month">
                        <Card x-chunk="dashboard-05-chunk-3">
                            <CardHeader className="px-7">
                                <CardTitle>Bookings</CardTitle>
                                <CardDescription>Recent bookings in your system.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Customer</TableHead>
                                            <TableHead className="hidden sm:table-cell">Unit Type</TableHead>
                                            <TableHead className="hidden sm:table-cell">Special Requirements</TableHead>
                                            <TableHead className="hidden md:table-cell">Check-In</TableHead>
                                            <TableHead className="hidden md:table-cell">Check-Out</TableHead>
                                            <TableHead className="hidden sm:table-cell">Guests</TableHead>

                                            <TableHead className="text-right">Created At</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {bookings?.map((booking, index) => (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    <div className="font-medium">{`${booking.firstName} ${booking.lastName}`}</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        {booking.email}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground">
                                                        Phone: {booking.phoneNumber}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">{booking.roomType}</TableCell>
                                                <TableCell className="hidden sm:table-cell">{booking.specialRequirements}</TableCell>
                                                <TableCell className="hidden md:table-cell">{booking.checkIn}</TableCell>
                                                <TableCell className="hidden md:table-cell">{booking.checkOut}</TableCell>
                                                <TableCell className="hidden sm:table-cell">{booking.guests}</TableCell>
                                                <TableCell className="text-right">{booking.createdAt}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>

                </Tabs>
            </div>
            <div>
                                        <BookingDetailsCard  booking={mockBooking} />
            </div>
        </main>
    )
}

export default AdminDashboard

const mockBooking = {
    id: "Oe31b70H",
    name: "John Doe",
    unitType: "Deluxe Room",
    checkIn: "2025-01-28",
    checkOut: "2025-01-30",
    totalPrice: 329,
    date: "2025-01-26",
    payment: {
      method: "mpesa",
      confirmationCode: "MPESA12345",
      cardNumber: "4532767890123456", // Only for visa method
    },
    updatedAt: "2025-01-26",
  };