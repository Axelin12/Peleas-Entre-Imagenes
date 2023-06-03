
Webcam.set({
    width:400,
    height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function shot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captura_de_imagen"src="'+data_uri+'"/>';
    });
}
console.log("ml5: ",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Tn6soIn13/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelo cargado");
}
function clasificar(){
    img=document.getElementById("captura_de_imagen");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.error(error);
}else{
    console.log(results);
    document.getElementById("result_object").innerHTML=results[0].label;
    document.getElementById("precision_object").innerHTML=results[0].confidence.toFixed(3);
}
}