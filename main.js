var images = 
["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F193091902763487026%2F&psig=AOvVaw25C1d4mlH2vpBqcYWXNXZn&ust=1621421403529000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJC3h8qH0_ACFQAAAAAdAAAAABAD",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fdad_3048150&psig=AOvVaw3YUjMF8eVhHL9OgI4CPFs0&ust=1621421343907000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDgmqyH0_ACFQAAAAAdAAAAABAD",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F4043254%2Favatar_elderly_grandma_nanny_icon&psig=AOvVaw3Eo-AFn2KfmipYCVTMsM-i&ust=1621421439652000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiu5NqH0_ACFQAAAAAdAAAAABAD",
"https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreepngimg.com%2Fpng%2F57222-grandfather-png-file-hd%2Ficon&psig=AOvVaw1yAevug_mxAfV4Va33hnxJ&ust=1621421481517000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCXg_WH0_ACFQAAAAAdAAAAABAD"]
var names = ["Sneha Chhatani","Rakesh Chhatani","Rajni Chhatani","Shyam Chhatani"]
var i = 0;
function update(){
i++;
var number_of_family_member_array = 4;
if(i>number_of_family_member_array){
i=0;    
}    
}
var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").src = updatedName;