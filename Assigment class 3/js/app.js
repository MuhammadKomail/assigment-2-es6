let name = document.getElementById('name')
let clas = document.getElementById('clas')
let age = document.getElementById('age')
let institute = document.getElementById('institute')
let cnic = document.getElementById('cnic')
let objctFromLocalStorage
let data2;
let index;

if(localStorage == null){
    console.log('local storagae is not empty')
    
}

function inputData(){

    if(name.value == ""){
        alert('Please Insert Name')
    }else if(clas.value == ""){
        alert('Please Insert Class')
    }else if(age.value == ""){
        alert('Please Insert age')
    }else if(institute.value == ""){
        alert('Please Insert Institute')
    }else if(cnic.value == ""){
        alert('Please Insert CNIC')
    }else
    {
    let valueName = name.value
    let valueClas = clas.value
    let valueAge = age.value
    let valueInstitute = institute.value 
    let valueCnic = cnic.value

    name.value = ""
    clas.value = ""
    age.value = ""
    institute.value = "" 
    cnic.value = ""

    console.log(valueName,valueClas,valueAge,valueInstitute,valueCnic)
    data2 = 
    {    
        name: valueName,
        clas: valueClas,
        age: valueAge,
        institute: valueInstitute,
        cnic: valueCnic
    }
    }
    // localStorage.setItem(`stData ${index}`,JSON.stringify(data2))
    // objctFromLocalStorage = JSON.parse(localStorage.getItem(`stData ${index}`)) 
    // console.log(objctFromLocalStorage)
    // index++
}


function ClearWholeData(){
localStorage.clear()
}





let data = [
    {
    name: 'Muhammad Komail',
    class: 7,
    age: 14,
    institute: 'SMI School',
    cnic: 4220105573021
    },
    {
    name: 'Muhammad Shaffan',
    class: 7,
    age: 15,
    institute: 'SMI School',
    cnic: 4220105572677
    },
    {
    name: 'Muhammad Mifzal',
    class: 7,
    age: 14,
    institute: 'SMI School',
    cnic: 4220742172677
    },
    {
    name: 'Muhammad Ammar',
    class: 7,
    age: 13,
    institute: 'SMI School',
    cnic: 4932105572677
    },
    {
    name: 'Muhammad Obaidullah',
    class: 7,
    age: 15,
    institute: 'SMI School',
    cnic: 4932105831277
    },
    {
    name: 'Jan Muhammad',
    class: 8,
    age: 17,
    institute: 'SMI School',
    cnic: 4932105578203
    },
    {
    name: 'Arif Khan',
    class: 8,
    age: 17,
    institute: 'SMI School',
    cnic: 4931005572677
    },
    {
    name: 'Amir abbasi',
    class: 8,
    age: 16,
    institute: 'SMI School',
    cnic: 4810805572677
    },
    {
    name: 'Haroon',
    class: 8,
    age: 14,
    institute: 'SMI School',
    cnic: 4975435572677
    },
    {
    name: 'Hamza',
    class: 8,
    age: 16,
    institute: 'SMI School',
    cnic: 4932105570642
    },
    {
    name: 'Khairullah Khan',
    class: 9,
    age: 18,
    institute: 'SMI School',
    cnic: 4932105555432
    },
    {
    name: 'Amin',
    class: 9,
    age: 17,
    institute: 'SMI School',
    cnic: 4632055726777
    },
    {
    name: 'Raseed',
    class: 9,
    age: 18,
    institute: 'SMI School',
    cnic: 4932765572677
    },
    {
    name: 'Hassan',
    class: 9,
    age: 18,
    institute: 'SMI School',
    cnic: 4932105577654
    },
    {
    name: 'Sohail',
    class: 9,
    age: 19,
    institute: 'SMI School',
    cnic: 4932105579875
    },
    {
    name: 'Salman',
    class: 10,
    age: 19,
    institute: 'SMI School',
    cnic: 4932105578543
    },
    {
    name: 'Noman',
    class: 10,
    age: 19,
    institute: 'SMI School',
    cnic: 4932105577542
    },
    {
    name: 'Zaid',
    class: 10,
    age: 20,
    institute: 'SMI School',
    cnic: 4932105587531
    },
    {
    name: 'Uzair',
    class: 10,
    age: 17,
    institute: 'SMI School',
    cnic: 4932105594241
    },
    {
    name: 'Imad',
    class: 10,
    age: 19,
    institute: 'SMI School',
    cnic: 4932105570653
    }
]

var dataParent = document.getElementById('data')

function main(){

    dataParent.innerHTML = ""
    for(var i=0; i < data.length ;i++){
        dataParent.innerHTML += `<tr>
        <td>${data[i].name}</td>
        <td>${data[i].class}</td>
        <td>${data[i].age}</td>
        <td>${data[i].institute}</td>
        <td>${data[i].cnic}</td>
        </tr>`
    }
}
    

let inp = document.getElementById('inp')
let MyDropDownList = document.getElementById('MyDropDownList')

let a;
let b;

function search(searchValue,searchby){
    a = inp.value;
    inp.value = ""

    b = MyDropDownList.value
    let arr = data.filter(function(x){
        return x[searchby] == searchValue
    })
    dataParent.innerHTML = ""
    for(var i=0; i < arr.length ;i++){

    dataParent.innerHTML += `<tr>
    <td>${arr[i].name}</td>
    <td>${arr[i].class}</td>
    <td>${arr[i].age}</td>
    <td>${arr[i].institute}</td>
    <td>${arr[i].cnic}</td>
    </tr>`
}
    if(arr.lenght == 0){
        dataParent.innerHTML = `                <tr>
        <td colspan="5">No Data Available</td>
    </tr>`
    }
}



function mainSearch()
{
    if(inp.value == ""){
        alert('Please Enter Value')
    }
    else if(MyDropDownList.value == "")
    {
        alert('Please Select the category')        
    }
    else{
        search(inp.value,MyDropDownList.value)
    }
}



