menu_list_array = ["Veg Margherita Pizza","Cheese and Corn Pizza", "Capsicum Pizza", "Paneer Tandoori Pizza", "Onion Mayo Pizza"];                 

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}

function add_item(){
var htmldata;
var imgtags='<img id="im1" src="https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw="/>'
var item=document.getElementById("add_item").value;
        menu_list_array.sort();
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata= htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
