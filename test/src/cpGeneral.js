export default {

     logthis(message) {
        document.getElementById("lastmsg").innerText = message;
        document.getElementById("msglog").innerHTML += "<li>" + message;
      },
      
     toggleLog() {
        if (document.getElementById("msglog").style.display == "block") {
          document.getElementById("msglog").style.display = "none";
        } else {
          document.getElementById("msglog").style.display = "block";
        }
      },
      
      downloadTree(demo) {
        var a = document.createElement("a");
        let filename = "export.json";
        let contentType = "application/json;charset=utf-8;";
        a.download = filename;
        a.href =
          "data:" +
          contentType +
          ","  +
          encodeURIComponent(JSON.stringify(demo.treeData));
          
        a.target = "_blank";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },
      
      chooseFile() {
        document.getElementById("import").style.display = "block";
      },
      
      importFile(demo) {
        var files = document.getElementById("selectFiles").files;
      
        console.log(files);
        if (files.length <= 0) {
          return false;
        }
        var fr = new FileReader();
      
        fr.onload = function (e) {
          console.log(e);
          var result = JSON.parse(e.target.result);
          var formatted = JSON.stringify(result, null, 2);
          document.getElementById("result").value = formatted;
        };
        fr.readAsText(files.item(0));
        demo.treeData = JSON.parse(fr.result);
        document.getElementById("import").style.display = "none";
      }

}