// BookingCard.jsx
import React from "react";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Copy, MapPin, Truck } from "lucide-react";

const BookingDetailsCard = ({ booking }) => {
  const formatPayment = (payment) => {
    if (payment.method === "mpesa") {
      return `Mpesa (Confirmation Code: ${payment.confirmationCode})`;
    } else if (payment.method === "visa") {
      return `Visa (**** **** **** ${payment.cardNumber.slice(-4)})`;
    } else if (payment.method === "cash") {
      return "Paid in Cash";
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Booking {booking.id}
            <Button
              size="icon"
              variant="outline"
              className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <Copy className="h-3 w-3" />
              <span className="sr-only">Copy Booking ID</span>
            </Button>
          </CardTitle>
          <CardDescription>Date: {booking.date}</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <Truck className="h-3.5 w-3.5" />
            <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
              Track Booking
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline" className="h-8 w-8">
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Trash</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold">Booking Details</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Unit Type</span>
              <span>{booking.unitType}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Check-in</span>
              <span>{booking.checkIn}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Check-out</span>
              <span>{booking.checkOut}</span>
            </li>
          </ul>
          <Separator className="my-2" />
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Total Price</span>
              <span>${booking.totalPrice}</span>
            </li>
          </ul>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="font-semibold">Payment Information</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="flex items-center gap-1 text-muted-foreground">
                <CreditCard className="h-4 w-4" />
                Payment Method
              </dt>
              <dd>{formatPayment(booking.payment)}</dd>
            </div>
          </dl>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Updated <time dateTime={booking.updatedAt}>{booking.updatedAt}</time>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BookingDetailsCard;

