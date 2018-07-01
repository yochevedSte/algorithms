function printStars(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += "*";
    console.log(str);
  }
}

//printStars(5);


function printStarsBigToSmall(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += "*";
  }


  for (let i = 0; i < num; i++) {
    console.log(str);
    str = str.slice(1);
  }

}

//printStarsBigToSmall(5)

function reverse(str) {

  let reversed = '';
  for (let i = str.length; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

/* reverse("dog"); //should return "god"
reverse("race car"); //should return "rac ecar" */


function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i])
      return false;
  }
  return true;
}

//palindrome("abab");


function encrypt(str) {
  let incrypted = '';
  for (let i = 0; i < str.length; i++) {
    incrypted += String.fromCharCode(str[i].charCodeAt(0) + 1);

  }
  console.log(incrypted);
}

//encrypt("car");

function decrypt(str) {
  let decrypted = '';
  for (let i = 0; i < str.length; i++) {
    decrypted += String.fromCharCode(str[i].charCodeAt(0) - 1);

  }
  console.log(decrypted);
}

//decrypt("dbs");

function removeDupes(arr) {
  let single = [];
  for (let i = 0; i < arr.length; i++) {
    if (!single[arr[i]])
      single[arr[i]] = 1;
    else arr.splice(i, 1);
  }

  console.log(arr);
}

//removeDupes(["dog", "cat", "camel", "bee", "dog", "elephant", "dolphin"]);




function removeItem(arr, jumbledArr){
  let index = Math.floor(Math.random()*arr.length);
  let item = arr.splice(index, 1);
  jumbledArr.push(item);
}

function jumble(arr1, arr2) {

  var jumbledArr = [];

  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1.length > 0 && arr2.length > 0) {
      if (Math.random() == 0)
        removeItem(arr1, jumbledArr);
      else
        removeItem(arr2, jumbledArr);
    }

    else if (arr1.length > 0)
      removeItem(arr1, jumbledArr);
    else
      removeItem(arr2, jumbledArr);
  }


  console.log(jumbledArr);
}

/* var colors = ["red", "indigo", "white", "teal", "yellow"];
var foods = ["bread", "cheese", "cucumber"];
jumble(colors, foods); */