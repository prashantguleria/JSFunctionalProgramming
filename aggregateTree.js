/**
 * Created by pg on 12/02/17.
 */


var T  = [
    ['Country','Sex','Martial Status','Population'],
    ['India','M','Married',131313],
    ['India','M','Single',31131],
    ['Australia','F','Single',391326],
    ['Russia','M','Married',263952],
    ['Australia','F','Married',316213]
]

var A= ['Country','Sex','Martial Status',null];

function aggregate(T,A){

    if(Array.isArray(T)){

        var headers = T.shift();

        var arrayAsObject = T.map(function(values){

            return headers.reduce(function(finalObj,line,i){

                finalObj[line] = values[i];

                return finalObj;
            },{}); /// Initialize finalObj to empty object {}

        });

      var TotalPopulation =   arrayAsObject.reduce(function(sum,line,iteration){

            sum =sum + line.Population;
           return sum;
        },0); /// Initial Value for param sum is 0

       // console.log('arrayAsObject is ', JSON.stringify(arrayAsObject,null,2));
        console.log('Total Population ', JSON.stringify(TotalPopulation));

    }
    else{
        console.log('Input param isn\'t a array');
    }
}

aggregate(T,A);
