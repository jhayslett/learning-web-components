function toggleClass(r,t,e){t?(r.classList.add("valid"),r.classList.remove("invalid")):(r.classList.add("invalid"),r.classList.remove("valid"),e&&e.preventDefault())}function checkEmptyAndDate(r,t){validator.isEmpty(r.value)||!validator.isDate(r.value)?toggleClass(r,!1,t):validator.isDate(r.value)&&toggleClass(r,!0)}function checkNotEmpty(r,t){validator.isEmpty(r.value)?toggleClass(r,!1,t):toggleClass(r,!0)}function checkEmptyAndLengthGreater(r,t,e){validator.isEmpty(r.value)||!validator.moreWordsThan(r.value,t)?toggleClass(r,!1,e):validator.lessWordsThan(r.value,t)&&toggleClass(r,!0)}function checkEmptyAndCharacterLengthGreater(r,t,e){validator.isEmpty(r.value)||!validator.isOfLength(r.value,t)?toggleClass(r,!1,e):validator.isOfLength(r.value,t)&&toggleClass(r,!0)}function checkEmptyAndLengthIs(r,t,e){validator.isEmpty(r.value)||!validator.characterCount(r.value,t)?toggleClass(r,!1,e):validator.characterCount(r.value,t)&&toggleClass(r,!0)}function checkEmptyAndEmail(r,t,e){validator.isEmpty(r.value)||!validator.isEmailAddress(r.value)?toggleClass(r,!1,e):validator.isEmailAddress(r.value)&&toggleClass(r,!0)}var validator={};validator.isEmailAddress=function(r){if(!r)throw new Error("No input included.");var t=r.length,e=r.indexOf("@"),a=r.slice(e),i=a.indexOf("."),n=a.slice(i);return t>4&&e>0&&i>1&&n.length>1},validator.isPhoneNumber=function(r){if(!r)throw new Error("No input included.");var t=r.length;if(12===t||10===t){r=r.split("");var e=["0","1","2","3","4","5","6","7","8","9"],a="";if(r.forEach(function(r){e.includes(r)&&(a+=r)}),10===a.length)return!0}return!1},validator.withoutSymbols=function(r){if(!r)throw new Error("No input included.");var t="",e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "],r=r.split("");return r.forEach(function(r){e.includes(r)&&(t+=r)}),t},validator.isDate=function(r){if(!r)throw new Error("No input included.");var t=new Date(r);if("Invalid Date"!=t.toString()){return!0;console.log("true")}else{return!1;console.log("false")}},validator.isBeforeDate=function(r,t){if(!r)throw new Error("No input included.");var e=new Date(r),a=new Date(t);return e<a},validator.isAfterDate=function(r,t){if(!r)throw new Error("No input included.");var e=new Date(r),a=new Date(t);return e>a},validator.isBeforeToday=function(r){if(!r)throw new Error("No input included.");var t=new Date(r),e=new Date;return t<e},validator.isAfterToday=function(r){if(!r)throw new Error("No input included.");var t=new Date(r),e=new Date;return t>e},validator.isEmpty=function(r){var t=!0;return null!==r?(r=r.split(""),r.forEach(function(r){" "!==r&&(t=!1)})):t=!1,t},validator.contains=function(r,t){if("string"==typeof t)var t=[t];for(var e=t.length,a=[",",".",":",";","-","!","-","(",")","?","&","/",'"',"[","]","|","$","@","#","'"],i=a.length,n="",o=0;o<i;o++)for(;r.indexOf(a[o])!==-1;)var r=r.replace(a[o]," ");n=r.split(" ");for(var l=!1,s=0;s<e;s++)n.indexOf(t[s])>-1&&(l=!0);return l},validator.lacks=function(r,t){if("string"==typeof t)var t=[t];for(var e=t.length,a=[",",".",":",";","-","!","-","(",")","?","&","/",'"',"[","]","|","$","@","#","'"],i=a.length,n="",o=0;o<i;o++)for(;r.indexOf(a[o])!==-1;)var r=r.replace(a[o]," ");n=r.split(" ");for(var l=!0,s=0;s<e;s++)n.indexOf(t[s])>-1&&(l=!1);return l},validator.isComposedOf=function(r,t){},validator.isLength=function(r,t){var e=r.length;return e<=t},validator.isOfLength=function(r,t){var e=r.length;return e>=t},validator.characterCount=function(r,t){var e=r.length;return!!(e=t)},validator.countWords=function(r){for(var t=[",",".",":",";","-","!","-","(",")","?","&","/",'"',"[","]","|","$","@","#","'"],e=t.length,a="",i=0;i<e;i++)for(;r.indexOf(t[i])!==-1;)var r=r.replace(t[i]," ");return a=r.split(" "),a.length},validator.lessWordsThan=function(r,t){for(var e=[",",".",":",";","-","!","-","(",")","?","&","/",'"',"[","]","|","$","@","#","'"],a=e.length,i="",n=0;n<a;n++)for(;r.indexOf(e[n])!==-1;)var r=r.replace(e[n]," ");i=r.split(" ");var o=i.length;return o<=t},validator.moreWordsThan=function(r,t){for(var e=[",",".",":",";","-","!","-","(",")","?","&","/",'"',"[","]","|","$","@","#","'"],a=e.length,i="",n=0;n<a;n++)for(;r.indexOf(e[n])!==-1;)var r=r.replace(e[n]," ");i=r.split(" ");var o=i.length;return o>=t},validator.isBetween=function(r,t,e){return r>=t&&r<=e},validator.isAlphanumeric=function(r){if(!r)throw new Error("No input included.");for(var t=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9"," "],e=t.length,a=r.length,i=0;i<a;i++){for(var n=!1,o=0;o<e;o++)t[o]===r[i].toLowerCase()&&(n=!0);if(n===!1)break}return n},validator.isCreditCard=function(r){var t=r.split(""),e=t.length,a=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],i=a.length;if((19!==e||"-"!==t[4]||"-"!==t[9]||"-"!==t[14])&&16!==t.length)return!1;19===e&&(t.splice(14,1),t.splice(9,1),t.splice(4,1));for(var n=0;n<e;n++){for(var o=!1,l=0;l<i;l++)t[n]===a[l]&&(o=!0);return o!==!1&&o}},validator.isHex=function(r){var t=!1;if("#"===r[0]&&(4===r.length||7===r.length)){var e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","#"];t=!0,r=r.toLowerCase().split(""),r.forEach(function(r){e.indexOf(r)===-1&&(t=!1)})}return!!t},validator.isRGB=function(r){if(r=validator.removeWhiteSpace(r),"rgb("===r.substr(0,4).toLowerCase()&&")"===r.substr(-1)){var t=r.indexOf("(")+1,e=r.indexOf(")"),a=r.slice(t,e);a=a.split(",");var i=a.length;if(3!==i)return!1;for(var n=0;n<i;n++)if(!validator.isBetween(a[n],0,255))return!1;return!0}return!1},validator.isHLA=function(r){if(r=validator.removeWhiteSpace(r),"hla("===r.substr(0,4).toLowerCase()&&")"===r.substr(-1)){var t=r.indexOf("(")+1,e=r.indexOf(")"),a=r.slice(t,e);a=a.split(",");var i=a.length;return 3===i&&!!(validator.isBetween(a[0],0,360)&&validator.isBetween(a[1],0,255)&&validator.isBetween(a[2],0,1))}return!1},validator.isColor=function(r){return!!(validator.isHex(r)||validator.isRGB(r)||validator.isHLA(r))},validator.inputimmed=function(r){return!(" "===r[0]||" "===r.slice(-1)||r.indexOf("  ")>=0)},validator.removeWhiteSpace=function(r){for(;r.indexOf(" ")>0;)r=r.replace(" ","");return r};