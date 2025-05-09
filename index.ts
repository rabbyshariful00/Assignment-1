

function formatString(input: string, toUpper?: boolean): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

const formatStringValue = formatString("Whats-up");




function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}


const Books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3 },
    { title: "Book C", rating: 5 }
];

const filteredItems = filterByRating(Books);



function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result = [];
    for (const arr of arrays) {
        result.push(...arr)
    }
    return result;
}


const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6, 7];

const result = concatenateArrays(array1, array2, array3);




{
    class Vehicle {
        private make: string;
        private year: number;


        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        public getinfo(): string {
            return `Make: ${this.make}, year: ${this.year}`
        }
    }


    class Car extends Vehicle {
        private model: string;


        constructor(make: string, year: number, model: string) {
            super(make, year)
            this.model = model;
        }

        public getModel(): string {
            return `Model: ${this.model}`
        }
    }

    const Car1 = new Car("Toyota", 2020, "Corolla")
}



function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
    } else {
        return value * 2;
    }

}



interface Product {
    name: string;
    price: number;
}


function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    } else {
        return products.reduce((mostExpensive, current) => {
            return (current.price > mostExpensive.price) ? current : mostExpensive;
        });
    }

}


const products: Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 45 }
];



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    } else {
        return "Weekday";
    }
};


async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject("Error: Negative number not allowed");
        } else {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        }
    });
}





