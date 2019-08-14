/**
 * 
 * @param {当前使用的文字字体} fontSize 
 * @param {当前文字的字间距} fontSpace 
 */
String.prototype.getStringWidth = function(fontSize, fontSpace) {   
  var totalLength = 0;     
  var charCode;  
  for (var i = 0; i < this.length; i++) {  
      charCode = this.charCodeAt(i);  
      if (charCode < 0x007f)  {     
          totalLength++;     
      } else if ((0x0080 <= charCode) && (charCode <= 0x07ff))  {     
          totalLength += 2;     
      } else if ((0x0800 <= charCode) && (charCode <= 0xffff))  {     
          totalLength += 3;   
      } else{  
          totalLength += 4;   
      }          
  }  
  return totalLength / 3 * (fontSize + fontSpace)   
}  
var str="你好吗？world!!";  
console.log(str.getStringWidth(16, 1.5))