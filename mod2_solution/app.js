(function(){
    'use strict';


    angular.module('BuyingStuff',[])
    .controller('BuyController', BuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);


    BuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function BuyController(ShoppingListCheckOffService){
        var Buy = this
        Buy.items = ShoppingListCheckOffService.getItems();
        Buy.bought = function(index, quantity, name){
        ShoppingListCheckOffService.boughtItem(index, quantity, name);
        }
    }



    function AlreadyBoughtController(ShoppingListCheckOffService){
        var Bought = this;
        
        Bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    }


    function ShoppingListCheckOffService(){
        var listServ = this 

        var itemsToBuy = [
                {"name": "apples",
                "quantity": "2 pieces"},
                {"name": "bananas",
                "quantity": "2 pieces"},
                {"name": "pineaples",
                "quantity": "3 pieces"},
                {"name": "coffee",
                "quantity": "1 bag"},
                {"name": "tables",
                "quantity": "2 sets"},
                {"name": "chairs",
                "quantity": "4 sets"},
            ];
        var boughtItems = []

        listServ.boughtItem = function(itemIndex, quantity, name){
            itemsToBuy.splice(itemIndex, 1);

            boughtItems.push({
                "name": name,
                "quantity": quantity
            })
        }
        
        listServ.getItems  = function(){
            return itemsToBuy;
        }

        listServ.getBoughtItems = function(){
            console.log("we here")
            return boughtItems;
        }

    }

})();