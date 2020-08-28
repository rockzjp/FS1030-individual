import React from 'react';
// import App from './App';
import $ from 'jquery';
import './admin.css';

function Admin() {
  return (
    <div>
      <div class="tableWrap">
        <input type="text" id="search" ></input>
        <button onClick={search}>查询</button>
        <button onClick={add}>添加用户</button>
        <table>
          <thead>
            <tr>
              <th>用户名</th>
              <th>邮箱</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
      <div class="addUser">
        <h4></h4>
        <p><span class="red">*</span><span>姓名：</span><input type="text" id="name" /></p>
        <p><span class="red">*</span><span>密码：</span><input type="password" id="password" /></p>
        <p><span class="red">*</span><span>邮箱：</span><input type="text" id="email" /></p>
        <button onClick={cancel}>取消</button><button onClick={submit}>确认</button>
      </div>
    </div>
  )
}
export default Admin;
//查询和首次渲染
search();
function search() {
  var search=$("#search").val();
  if($("#search").val()==undefined){
    search=""
  }
  $.ajax({
    type: "POST",
    url: "http://192.168.10.55:3001/user/search?name="+search,
    dataType: "json",
    contentType: "application/json",
    processData: false,
    //headers: {'Content-Type':'application/json'},
    data: JSON.stringify({ "token": "this is login token" }),
    success: function (res) {
      //(JSON.stringify(res))
      if (res.returnCode == 0) {
        var user = "";
        for (var i = 0; i < res.userInfo.length; i++) {
          user += '<tr><td>' + res.userInfo[i].name + '</td><td>' + res.userInfo[i].email + '</td><td><button data-name=' + res.userInfo[i].name + ' data-email=' + res.userInfo[i].email + ' class="editor">编辑</button><button class="del" data-name=' + res.userInfo[i].name + '>删除</button></td></tr>'
        }
        $("table tbody").html(user);
      }
      else {
        alert(res.returnMsg)
      }
    },
    error: function () {
      //(JSON.stringify(res))

    }
  })
}
//cancel
function cancel() {
  $(".addUser h4").text("");
  $(".tableWrap").show();
  $(".addUser").hide();
}
//添加
function add() {
  $(".addUser h4").text("添加用户");
  $("#name").val("");
  $("#email").val("");
  $(".tableWrap").hide();
  $(".addUser").show();
  $("#name").attr('disabled', false);
  $("#email").attr('disabled', false);
}
//提交
function submit() {
  var name = $("#name").val();
  var password = $("#password").val();
  var email = $("#email").val();
  var url = "";
  var type = "";
  var data;
  if ($(".addUser h4").text() == "编辑用户") {
    url = "http://192.168.10.55:3001/user/update";
    type = "put";
    data=JSON.stringify({
          "name":name,
          "email": email,
          "isAdmin": "0",
          "password": password,
          "token": "this is login token"
      })
  } else {
    url = "http://192.168.10.55:3001/user/insert";
    type = "POST";
    data=JSON.stringify({
          "name":name,
          "email": email,
          "isAdmin": "0",
          "password": password,
          "token": "this is login token"
      })
  }
  if (name != "" && email != "" && password != "") {
    $.ajax({
      type: type,
      url: url,
      dataType: "json",
      contentType: "application/json",
      processData: false,
      //headers: {'Content-Type':'application/json'},
      data: data,
      success: function (res) {
        //(JSON.stringify(res))
        if (res.returnCode === 0) {
          console.log(res.token);
          $("#name").val("");
          $("#email").val("");
          $(".addUser h4").text("");
          $(".tableWrap").show();
          $(".addUser").hide();
          search()
        }
        else {
          alert(res.reutrnMsg)
        }
      }
    })
  } else {
    alert("请填写信息");
  }
}
//编辑用户
$("body").on('click', ".editor", function () {
  $(".addUser h4").text("编辑用户");
  $(".tableWrap").hide();
  $(".addUser").show();
  $("#name").val($(this).attr('data-name'));
  $("#name").attr('disabled', true);
  $("#email").val($(this).attr('data-email'));
  $("#email").attr('disabled', true);
});
//删除
$("body").on('click', ".del", function () {
  $.ajax({
    type: 'DELETE',
    url: "http://192.168.10.55:3001/user/delete?name=" + $(this).attr('data-name'),
    dataType: "json",
    contentType: "application/json",
    processData: false,
    //headers: {'Content-Type':'application/json'},
    data: JSON.stringify({ "token": "this is login token" }),
    success: function (res) {
      //(JSON.stringify(res))
      if (res.returnCode === 0) {
        search();
      }
      else {
        alert(res.returnMsg)
      }
    }
  })
});

