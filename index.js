//Inventory Constructor
function Inventory(id, name, pizzas) {
    this.id = id;
    this.name = name;
    this.pizzas = pizzas;
}

//Invetory Functions
Inventory.prototype.displayPizza = function(obj) {
  console.log("PIZZA:", obj['id']);
  console.log("Name:", obj['name']);
  console.log("Description:", obj['description']);
  console.log("Medium Size Price:", obj['mediumSizePrice']);
  console.log("Big Size Price:", obj['bigSizePrice']);
  console.log("In stock:", obj['quantityInStock']);
};

Inventory.prototype.addPizza = function(newPizza) {
    this.pizzas.push(newPizza);
    console.log("[NEW] Pizza", newPizza['id'], "added");
    this.displayPizza(newPizza);
};

Inventory.prototype.deletePizza = function(searchId) {
    var that = this;
    this.pizzas.forEach(function(item, index) {
        if (item['id'] == searchId) {
            console.log("[DELETED] Pizza", searchId, "deleted");
            that.pizzas.splice(index, 1);
            }
    });
};

Inventory.prototype.updatePizza = function(pizzaId, updatedPizza) {
    var that = this;
    this.pizzas.forEach(function(item) {
        if (item['id'] == pizzaId) {
          var obj = Object.assign(item, updatedPizza);
          console.log("[UPDATED] Pizza", pizzaId, "updated");
          that.displayPizza(item);
        }
      });
}

Inventory.prototype.filterAvailablePizza = function() {
    var filteredAvailablePizza = this.pizzas.filter(function(item) {
        return item['quantityInStock'] > 0 && item['isAvailable'] == true;
    });
    return filteredAvailablePizza;
}

//Pizza Constructor
function Pizza(id, name, description, mediumSizePrice, bigSizePrice, quantityInStock, isAvailable, isOnSale, discount) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.mediumSizePrice = mediumSizePrice;
    this.bigSizePrice = bigSizePrice;
    this.quantityInStock = quantityInStock;
    this.isAvailable = isAvailable;
    this.isOnSale = isOnSale;
    this.discount = discount;
}

var pizza01 = new Pizza("pz001", 
                        "PIZZA MATCHA TÔM TEMPURA",
                        "Đế bánh truyền thống vị Matcha (Trà xanh Nhật) kết hợp tôm Tempura kèm xốt cheesy, tôm tươi, ớt chuông đỏ, rong biển và trứng cá hồi tạo điểm nhấn đặc biệt trên bề mặt bánh làm nên hương vị tuyệt vời",
                        300000, 500000, 100, true, false, 0);

var pizza02 = new Pizza("pz002", 
                        "PIZZA MATCHA TÔM TEMPURA",
                        "Đế bánh truyền thống vị Matcha (Trà xanh Nhật) kết hợp tôm Tempura kèm xốt cheesy, tôm tươi, ớt chuông đỏ, rong biển và trứng cá hồi tạo điểm nhấn đặc biệt trên bề mặt bánh làm nên hương vị tuyệt vời",
                        319000, 419000, 70, true, true, 20);

var inventory01 = new Inventory("01", "01", []);

inventory01.addPizza(pizza01);
inventory01.addPizza(pizza02);
console.log(inventory01);

// Order Constructor
function OrderedItem(id, pizzaId, size, quantity) {
    this.id = id;
    this.pizzaId = pizzaId;
    this.size = size;
    this.quantity = quantity;
}

function Order(id, name, orderedItems) {
    this.id = id;
    this.name = name;
    this.oderedItems = orderedItems;
}

Order.prototype.addOrderedItem = function(newItem) {
    this.oderedItems.push(newItem);
    console.log("[NEW] Item", newItem['id'], "added");
    this.displayPizza(newItem);
};

var order01 = new Order("01", "01", []);

var orderedItem01 = new OrderedItem("orderedItem01", 
                                    "pz001", "Medium", 1);


                                    

