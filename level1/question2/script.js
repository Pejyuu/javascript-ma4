fetch('https://jsonplaceholder.typicode.com/todos')
  .then(result => result.json())
  .then((res) => {
    createTodo(res);
  })
.catch(err => console.log(err))


function createTodo(result){

  var details = document.getElementById('todoCards');
  for (var i = 0; i < result.length; i++) {
    var card =  "<div class=\"card\" style=\"margin-bottom: 25px;\">"+
                  "<div class=\"card-body\">"+
                    "<h5 class=\"card-title\">ToDo Nr: " + result[i].id + "</h5>"+
                    "<div class=\"card-text\">"  + result[i].title + "</div>"+
                  "</div>"+
                  "<footer class=\"card-footer text-muted\">Is Completed : "  + result[i].completed + "</footer>"+
                "</div>";

    details.innerHTML += card;



  }
}
