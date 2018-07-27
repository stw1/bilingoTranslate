function postAjax(url, data, success) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
        ).join('&');

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
}

// example request
function translateS() {
    inputValue = document.getElementById('field1').value;
    var postArguments = 'key=AIzaSyAu5F3tkRzpG-IDmeMMamVs4lu7nsLNk4o&q=' + inputValue + '&target=es';
    
    postAjax('https://translation.googleapis.com/language/translate/v2', postArguments, function(data){ console.log(data); document.getElementById('translateResult').innerHTML = data;});
}


// example request with data object
// postAjax('http://foo.bar/', { p1: 1, p2: 'Hello World' }, function(data){ console.log(data); });
