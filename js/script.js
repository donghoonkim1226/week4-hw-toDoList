$(document).ready(function() {
  $(document).on("click", ".btn-danger", function(){
    $(this).parent().parent().remove();
  });
  $(".btn-success").on("click", function(e){
    e.preventDefault();
    var thingTodo = $("#thingTodo").val().trim();
    var newRow = $("<tr>");
    var checkbox = $("<input>").attr("type", "checkbox").attr("class", "checkboxes").attr("data-state", "not-checked");
    var deleteBtn = $("<button>").addClass("btn btn-danger btn-xs").append("Delete");
    var itemTd = $("<td>").addClass("word-td").append(thingTodo).append(deleteBtn).prepend(checkbox);
    newRow.append(itemTd);
    $("#todoList").append(newRow);
    $("#thingTodo").val("").focus();
  });
  $(document).on("click", ".checkboxes", function(){
    var dataState = $(this).attr("data-state");
    if(dataState === "not-checked"){
    $(this).parent().attr("class", "draw-line");
    $(this).attr("data-state", "checked");
    }
    else{
    $(this).parent().removeClass();
    $(this).attr("data-state", "not-checked");
    }
  });
});