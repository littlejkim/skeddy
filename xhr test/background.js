
document.getElementById("test").addEventListener('click', () => {
    
    function getjson(){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://finance.naver.com/item/sise_day.nhn?code=215600&page=1", true);
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // WARNING! Might be evaluating an evil script!
            console.log(xhr.responseText);
            
      }
    };
    xhr.send();
};

     chrome.tabs.executeScript({
        code: '(' + getjson + ')();' 
    }, (results) => {
       
        console.log('Popup script:')
        console.log(results);
        
    });
});
//aa