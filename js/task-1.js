const Customer = {
	username: "Mango",
	balance: 24000,
	discount: 0.1,
	orders: ["Burger", "Pizza", "Salad"],

	getBalance() {
		return this.balance;
	},
	getDiscount() {
		return this.discount;
	},
	setDiscount(value) {
		this.discount = value;
	},
	getOrders() {
		return this.orders;
	},
	addOrder(cost, order) {
		this.balance -= cost - cost * this.discount;
		return this.orders.push(order);
	},
};

Customer.setDiscount(0.15);
console.log(Customer.getDiscount()); // 0.15
Customer.addOrder(5000, "Steak");
console.log(Customer.getBalance()); // 19750
console.log(Customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
