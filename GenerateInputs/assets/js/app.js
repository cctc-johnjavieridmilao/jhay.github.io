$(document).ready(function() {
jQuery.noConflict();

// show & hide pass
$('#b_crypt').click(function() {
$('#hash_pass').hide();
$('#dd_hash').show();
});

$('#e_crypt').click(function() {
$('#dd_hash').hide();
$('#hash_pass').show();
});

// load dat in table



Lodetable();

function Lodetable() {
$.ajax({
url:'load_table.php',
method:'GET',
beforeSend:function() {
$('#t_alert').html('<div class="alert alert-light" role="alert"> <strong>Loading Data...</strong>  <img src="./loader/ajax-loader.gif" style="background:blue;"> </div>');
},
success:function(data) {
var datas = $.parseJSON(data);
var display = "";
setTimeout(() => {
for (var i = 0; i < datas.length; i++) {
display += "<tr class='my_row' id='tr_change"+datas[i]["id"]+"'>";
display += "<td>" + datas[i]["username"] + "</td>";
display += "<td>" + datas[i]["email"] + "</td>";
display += "<td>" + datas[i]["derypted_pass"]+"</td>";
display += "<td><button class='btn btn-primary btn-sm decrypt' id="+datas[i]["id"]+">Hash Password</button>";
display += " <button class='btn btn-warning btn-sm view' id="+datas[i]["id"]+">View</button>";
display += "<input type='hidden' id='name_dis"+datas[i]["id"]+"' name="+datas[i]["username"]+">";
display += "</td>";
display += "</tr>";
}

$('#table_data').fadeOut('fast').html(display).fadeIn('fast');

}, 3000);
}
});
}

$('#hashall').click(function() {
$.ajax({
url:'load_hash_all.php',
method:'GET',
beforeSend:function() {
$('#t_alerts').html('<div class="alert alert-light" role="alert"> <strong>Loading Data...</strong>  <img src="./loader/ajax-loader.gif" style="background:blue;"> </div>');
},
success:function(data) {
var datas = $.parseJSON(data);
var display = "";
setTimeout(() => {
	$('#t_alerts').html('');
for (var i = 0; i < datas.length; i++) {
display += "<tr class='my_row' id='tr_change"+datas[i]["id"]+"'>";
display += "<td>" + datas[i]["username"] + "</td>";
display += "<td>" + datas[i]["email"] + "</td>";
display += "<td>" + datas[i]["password"].substring(1,30)+'...'+"</td>";
display += "<td><button class='btn btn-primary btn-sm decrypt' id="+datas[i]["id"]+">Hash Password</button>";
display += " <button class='btn btn-warning btn-sm view' id="+datas[i]["id"]+">View</button>";
display += "<input type='hidden' id='name_dis"+datas[i]["id"]+"' name="+datas[i]["username"]+">";
display += "</td>";
display += "</tr>";
}

$('#table_data').fadeOut('fast').html(display).fadeIn('fast');

}, 3000);
}
});
});

$('#dehashall').click(function() {
$.ajax({
url:'load_hash_all.php',
method:'GET',
beforeSend:function() {
$('#t_alerts').html('<div class="alert alert-light" role="alert"> <strong>Loading Data...</strong>  <img src="./loader/ajax-loader.gif" style="background:blue;"> </div>');
},
success:function(data) {
var datas = $.parseJSON(data);
var display = "";
setTimeout(() => {
$('#t_alerts').html('');
for (var i = 0; i < datas.length; i++) {
display += "<tr class='my_row' id='tr_change"+datas[i]["id"]+"'>";
display += "<td>" + datas[i]["username"] + "</td>";
display += "<td>" + datas[i]["email"] + "</td>";
display += "<td>" + datas[i]["derypted_pass"]+"</td>";
display += "<td><button class='btn btn-primary btn-sm decrypt' id="+datas[i]["id"]+">Hash Password</button>";
display += " <button class='btn btn-warning btn-sm view' id="+datas[i]["id"]+">View</button>";
display += "<input type='hidden' id='name_dis"+datas[i]["id"]+"' name="+datas[i]["username"]+">";
display += "</td>";
display += "</tr>";
}

$('#table_data').fadeOut('fast').html(display).fadeIn('fast');

}, 3000);
}
});
});
// load
function Lodetable1(id) {
$.ajax({
url:'load_data_decryt.php',
method:'POST',
data:{id:id},
beforeSend:function() {
$('#t_alert').html('<div class="alert alert-light" role="alert"> <strong>Loading Data...</strong>  <img src="./loader/ajax-loader.gif" style="background:blue;"> </div>');
},
success:function(data) {
var datas = $.parseJSON(data);
var display = "";
setTimeout(() => {
for (var i = 0; i < datas.length; i++) {
display += "<tr id='tr_change"+datas[i]["id"]+"'>";
display += "<td>" + datas[i]["username"] + "</td>";
display += "<td>" + datas[i]["email"] + "</td>";
display += "<td>" + datas[i]["derypted_pass"]+"</td>";
display += "<td><button class='btn btn-primary btn-sm decrypt' id="+datas[i]["id"]+">Hash Password</button>";
display += " <button class='btn btn-warning btn-sm view' id="+datas[i]["id"]+">View</button>";
display += "<input type='hidden' id='name_dis"+datas[i]["id"]+"' name="+datas[i]["username"]+">";
display += "</td>";
display += "</tr>";
}
$('#table_data').html(display);
}, 3000);
}
});
}

// forms to submit
var reg_form = $('#reg_form');
var confirm_form = $('#form_confirm');
var login_form = $('#login_form');
var change_pass_form = $('#form_change_pass');
var add_data_some = $('#form_add_some');

reg_form.on('submit', function(e){
e.preventDefault();
$.ajax({
url:$(this).attr('action'),
method:$(this).attr('method'),
data:$(this).serialize(),
beforeSend:function() {
$('#d_alert').html('<div class="alert alert-light" role="alert"> <strong>Please wait...</strong>  <img src="./loader/ajax-loader.gif" style="background:blue;"> </div>');
},
success:function(responce) {
if (responce == "success") {
setTimeout(() => {
$('#d_alert').html('<div class="alert alert-success" role="alert"><b style="color:white;">Registered Succes!</b> <a href="index.php" style="color:white;" class="btn btn-link">Click here to login</a></div>');
}, 3000)

}
else {
$('#d_alert').html('<div class="alert alert-danger" role="alert">' +responce+ '</div>');
}
}
});
});

login_form.on('submit', function(e){
e.preventDefault();
$.ajax({
url:$(this).attr('action'),
method:$(this).attr('method'),
data:$(this).serialize(),
beforeSend:function() {
$('#ds_alert').html('<div class="alert alert-light" role="alert"> <strong>Please wait...</strong>  <img src="./loader/ajax-loader.gif" style="background:blue;"> </div>');
},
success:function(responce) {
if (responce == "success") {
setTimeout(() => {
window.location.href = "home.php?login=success";
}, 3000);
}
else {
$('#ds_alert').html('<div class="alert alert-danger" role="alert">' +responce+ '</div>');
}
}
});
})

change_pass_form.on('submit', function(e){
e.preventDefault();
$.ajax({
url:$(this).attr('action'),
method:$(this).attr('method'),
data:$(this).serialize(),
beforeSend:function() {
$('#c_alert').html('<div class="alert alert-light" role="alert"> <strong>Please wait...</strong>  <img src="./loader/ajax-loader.gif" style="background:blue;"> </div>');
},
success:function(responce) {
if (responce == "success") {
setTimeout(() => {
$('#c_alert').html('<div class="alert alert-success" role="alert"> <strong>Password has been changed...</strong> </div>');
$('#form_change_pass')[0].reset();
}, 3000);
}
else {
$('#c_alert').html('<div class="alert alert-danger" role="alert">' +responce+ '</div>');
}
}
});
});

$('#show_modal_pass').click(function(){
$('#change_pass_modal').fadeIn().modal('show');
});

$('#password').keyup(function() {
$('#c_pass').val($(this).val());
});


add_data_some.on('submit', function(e){
e.preventDefault();
$.ajax({
url:$(this).attr('action'),
method:$(this).attr('method'),
data:$(this).serialize(),
beforeSend:function() {
$('#cc_alert').html('<div class="alert alert-light" role="alert"> <strong>Saving...</strong>  <img src="./loader/ajax-loader.gif" style="background:blue;"> </div>');
},
success:function(responce) {
if (responce == "success") {
setTimeout(() => {
$('#cc_alert').html('<div class="alert alert-success" role="alert"> <strong>Data has been added..</strong> </div>');
$('#form_add_some')[0].reset();
Lodetable();
}, 3000);
}
else {
$('#cc_alert').html('<div class="alert alert-danger" role="alert">' +responce+ '</div>');
}
}
});
});


$(document).on('click','.decrypt', function() {
var id = $(this).attr('id');
$.ajax({
url:'load_data_decryt.php',
method:'POST',
data:{id:id},
success:function(data) {
var responce = $.parseJSON(data);
var display = "";
for (var i = 0; i < responce.length; i++) {
display += "<td>" + responce[i]["username"] + "</td>";
display += "<td>" + responce[i]["email"] + "</td>";
display += "<td>" + responce[i]["password"].substring(0,30) +'...' + "</td>";
display += "<td><button class='btn btn-danger btn-sm encrypt' id="+responce[i]["id"]+">DEHASH PASSWORD</button>";
display += " <button class='btn btn-warning btn-sm view' id="+responce[i]["id"]+">View</button>";
display += "<input type='hidden' id='name_dis"+responce[i]["id"]+"' name="+responce[i]["username"]+">";
display += "</td>";
}
$('#tr_change'+id).html(display);
}
});
});




$(document).on('click','.encrypt', function() {
let id = $(this).attr('id');
$.ajax({
url:'load_table.php',
method:'POST',
data:{id:id},
beforeSend:function() {
$('.encrypt').html('<strong>Please wait...</strong><img src="./loader/ajax-loader.gif" style="background:blue;">');
},
success:function(data) {
var datas = $.parseJSON(data);
var display = "";
setTimeout(() => {
for (var i = 0; i < datas.length; i++) {
display += "<tr class='my_row' id='tr_change"+datas[i]["id"]+"'>";
display += "<td>" + datas[i]["username"] + "</td>";
display += "<td>" + datas[i]["email"] + "</td>";
display += "<td>" + datas[i]["derypted_pass"]+"</td>";
display += "<td><button class='btn btn-primary btn-sm decrypt' id="+datas[i]["id"]+">Hash Password</button>";
display += " <button class='btn btn-warning btn-sm view' id="+datas[i]["id"]+">View</button>";
display += "<input type='hidden' id='name_dis"+datas[i]["id"]+"' name="+datas[i]["username"]+">";
display += "</td>";
display += "</tr>";
}
$('#table_data').html(display);
}, 3000);
}
});
});

$(document).on('click','.view', function() {
var id = $(this).attr('id');
var name_dis = $('#name_dis'+id).attr('name');
$('#u_id').val(id);
$('#u_name').text('of ' + name_dis);
$('#confirm').modal('show');
});

confirm_form.on('submit', function(e){
e.preventDefault();
$.ajax({
url:$(this).attr('action'),
method:$(this).attr('method'),
data:$(this).serialize(),
beforeSend:function() {
$('#f_alert').html('<div class="alert alert-light" role="alert"> <strong>Please wait...</strong>  <img src="./loader/ajax-loader.gif" style="background:blue;"> </div>');
},
success:function(responce) {
var data = $.parseJSON(responce);
if (data.errors) {
$('#f_alert').html('<div class="alert alert-danger" role="alert">' +data.errors+ '</div>');
}
else {
setTimeout(() => {
$('#confirm').modal('hide');
$('#show_details').modal('show');
$('#f_alert').html('');
$('#form_confirm')[0].reset();
$('#data_username').text("Username: " + data.username);
$('#data_email').text("Email: " + data.email);
$('#data_date_created').text("Created at: " + data.date_create);
$('#data_encrypted_pass').text("Encrypted password: " + data.password.substring(0,35) + "...");
$('#data_decrypted_pass').text("Decrypted password: " + data.derypted_pass);
}, 3000)
}
}
});
});
});
