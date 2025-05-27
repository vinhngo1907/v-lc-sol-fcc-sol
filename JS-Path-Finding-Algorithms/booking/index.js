class BusSeatManager {
    constructor(totalSeats) {
        this.totalSeats = totalSeats;
        this.seats = Array(totalSeats).fill(null);
        this.bookedSeats = new Set();
    }

    bookSeat(seatNumber) {
        if (this.seats[seatNumber] === null) {
            this.seats[seatNumber] = true;
            return `Seat ${seatNumber} booked successfully.`;
        } else {
            return `Seat ${seatNumber} is already booked`;
        }
    }

    findAdjacentSeats() {
        for (var i = 0; i < this.totalSeats; i++) {
            if (this.seats[i] === null && this.seats[i + 1] === null) {
                return `Found adjacent seats: ${i} and ${i + 1}.`;
            }
        }

        return "No adjacent seats available";
    }

    cancelBooking(seatNumber) {
        if (this.seats[seatNumber] === true) {
            this.seats[seatNumber] = null;
            return `Booking for seat ${seatNumber} canceled successfully.`;
        } else {
            return `Seat ${seatNumber} is not booked.`;
        }
    }

    displaySeats() {
        return this.seats.map((seat, index) => (
            seat === null
                ? `Seat ${index}: Free`
                : `Seat ${index}: Booked`)).join('\n');
    }
}

const bus = new BusSeatManager(10);
console.log(bus.bookSeat(2)); // Đặt ghế 2
console.log(bus.bookSeat(2)); // Thử đặt lại ghế 2
console.log(bus.findAdjacentSeats()); // Tìm ghế cạnh nhau
console.log(bus.cancelBooking(2)); // Hủy ghế 2
console.log(bus.displaySeats());

// const obj = { 1: "a", 2: "b", 3: "c" };
// const set = new Set([1, 2, 3, 4, 5]);
// console.log(obj)
// console.log(obj.hasOwnProperty("1"),
// obj.hasOwnProperty(1),
// set.has("1"),
// set.has(1))