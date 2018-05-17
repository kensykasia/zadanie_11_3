function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
Phone.prototype.yourDiscount = function() {
    console.log("Today is your lucky day and the price is " + (this.price - 100) + "!");
}
var samsungGalaxyS6 = new Phone("Samsung Galaxy S6", "2500", "black");
var iPhone6S = new Phone("Iphone 6S", "3200", "gold");
var onePlusOne = new Phone("One Plus One", "1500", "white");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();
samsungGalaxyS6.yourDiscount();
