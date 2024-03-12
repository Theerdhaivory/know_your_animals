function classify()
{
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/S26OlIRBN/model.json',ready);
}

function ready(){
    console.log("model is good to go");
    classifier.classify(gotResults);
}