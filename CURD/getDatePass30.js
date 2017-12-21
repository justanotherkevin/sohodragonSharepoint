function openPDF() {

  var getHeaders = new Headers({
      'X-RequestDigest': document.getElementById('__REQUESTDIGEST').value,
      'Accept': 'application/json; odata=verbose'
  })

  var getOptions = { 
      method: 'GET',
      headers: getHeaders,
      credentials: 'include'
  }
  fetch(_spPageContextInfo.webAbsoluteUrl + "/_api/lists/getbytitle('PDFEditorTestLibrary')/items(1)", getOptions ).then(
    function(response) {
      if (response.ok) {
        console.log(response)
        return response.json();
      }
      else {
        console.log(response)
        throw new Error('Network response was not ok.');
      }
    }).then(function(data) {
      if (window.console) {
        debugger
        const dataURI = data.d.File.__deferred.uri
        var doc = new jsPDF()
        doc.setFontSize(40)
        doc.text(35, 25, 'Paranyan loves jsPDF')
        doc.addImage(imgData, 'JPEG', 15, 40, 180, 160)
      }
    }).catch(function(error) {
      // Error handling code goes here
    })


}

var passDate = new Date(new Date().setDate(new Date().getDate() - 30));
_spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/GetByTitle('" + libraryName + "')/Items?$filter= Created lt datetime'" + passDate.toISOString() + "'",
//libraryName take in string 
fetchFromLibrary = (libraryName) => {
    if (typeof libraryName != "string") {
        //error handeling
        console.log('invalid variable type')
    } else {
        fetch(
            _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/GetByTitle('" + libraryName + "')/Items",
            { credentials: "include", headers: { "accept": "application/json;odata=verbose" } }).then(
            res => {
                if (res.ok) {
                    if (window.console) { console.log('Fetch call is ok') }
                    return res.json();
                }
                else {
                    throw new Error('Network response was not ok.');
                }
            }).then(data => {
                if (window.console) {
                    return data.d.resultsl
                }
            }).catch(function (error) {
                throw new Error(error); 
            })
    }

}



var postHeaders = new Headers({

    'X-RequestDigest': document.getElementById('__REQUESTDIGEST').value,
    'Accept': 'application/json; odata=verbose',
    'X-HTTP-Method': 'DELETE', // important - ensure DELETE is in all caps
    'If-Match': '*'

});



// POST request options

var postOptions = {

    method: 'POST',
    headers: postHeaders,
    credentials: 'include'

}



fetch(_spPageContextInfo.webAbsoluteUrl + "/_api/lists/getbytitle('Sample List')/Items(1)", postOptions).then(function (response) {

    if (response.ok) {
        // we all good
        console.log('Response was ok!')
    }
    else {
        throw new Error('Network response was not ok.');
    }

}).catch(function (error) {

    // Error handling code goes here
    console.error(error);
    alert('Error has been logged to the console');
})

