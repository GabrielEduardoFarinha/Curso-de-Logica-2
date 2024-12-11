function calculateImc(){
    var pWeight = (parseInt(prompt('What is your weight (in kg)?')));
    var pHeight = (parseFloat(prompt('What is your height (in meters,1.(..))?')));
    var trans = (pHeight * pHeight);
    var IMC = (pWeight / trans);
    var IMCFormatted = IMC.toFixed(2);
    alert('Your BMI is '+IMCFormatted);
    
};
calculateImc();

function factorial() {
    var number = parseInt(prompt('What number do you want to calculate the factorial for?'));
    var fact = 1;
    for (var i = 1; i <= number; i++) {
        fact *= i; 
    }

    alert('The factorial of ' + number + ' is ' + fact);
};
factorial();

function exchange(){
    dollar = parseFloat(prompt('How many dollars would you like to convert?'));
    change = dollar * 5.95;
    alert('The converted value in Brazilian real is '+change);

};
exchange();

function zone(){
    format = prompt('Is your area rectangular or circular?');
    if (format == 'rectangular'){
        var rWidth = (parseFloat(prompt('what is the width?')));
        var rHeight = (parseFloat(prompt('what is the height?')));
        var rArea = (rHeight * rWidth);
        var rPerimeter = (rHeight*2 / rWidth*2);
        alert('area is ' + rArea+ ' and perimeter is ' +rPerimeter)
    }else if(format == 'circle'){
        var pi = 3.14;
        var cRadius = (parseFloat(prompt('what is the radius')));
        var cArea = (pi * cRadius ** 2);
        var cPerimeter = (2 * pi * cRadius);
        var perimeterFormatted = cPerimeter.toFixed(2);
        alert('area is ' + cArea+ ' and perimeter is ' +perimeterFormatted);
    };
};

zone();

function multiplicationTable(){
    var numberTable = (parseInt(prompt('which number do you want the multiplication table of?')));
    var results = "";
    for(var i=1; i <=10;i++){
        let tableResult = numberTable * 1;
        results += `${numberTable} * ${i} = ${tableResult}\n`;
        alert(results);
    }

}
multiplicationTable();
