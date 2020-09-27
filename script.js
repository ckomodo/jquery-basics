console.log("-----------------------");
var mainPart = $("#main");
function noHtml(){ 
var topTopic = $("<div>");
var headers = $("<h1>");
var para = $("<p>");
var para2 = $("<p>")

topTopic.addClass("redSky");
// headers.addClass("redSky");
// para.addClass("redSky");

mainPart.append(topTopic);
topTopic.append(headers);
topTopic.append(para);
topTopic.append(para2);

headers.text("this is a header");
para.text("this is paragraph");
para2.text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar vel ligula et auctor. Pellentesque at consequat ipsum, at dignissim arcu. Nullam mattis justo at tellus sodales tristique. Sed mattis venenatis odio. Mauris sollicitudin, dui pellentesque blandit ullamcorper, urna arcu pharetra quam.")

};

noHtml();

var text = $("<textarea>");
var newBtn = $("<button>");
mainPart.append(newBtn);
newBtn.text("click");
var spices = [" paprika", " nutmeg", " black pepper", " cumin", " curry powder", " ginger"]
// spices.push("seasoned salt");
spices.pop();
spices.splice(2, 0, [" basil", "rosemary "]);

newBtn.on("click", function(){
    
    for(i=0; i<spices.length; i++){
    // console.log(spices[i]);
    $(mainPart).append(spices);
    // alert("you have clicked a header");
    // alert(spices[i]);
    
}
});

var person = {
    name: "chris",
    age: 31,
    city: "Seattle",
    Hometown: "Allentown PA",
    Occupation: "Software Developer"

};
console.log(person.city);
console.log(person.Occupation);
console.log(person.age);
console.log(person.Hometown);

person.name = "sakwa"
console.log(person.name);