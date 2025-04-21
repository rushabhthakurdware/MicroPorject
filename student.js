// Constants for JPDB
//var jpdbBaseURL = "http://api.login2explore.com:5577";
//var jpdbIRL = "/api/irl";
//var jpdbIML = "/api/iml";
//var dbName = "SCHOOL-DB";
//var relName = "STUDENT-TABLE";
//var connToken = "90934781|-31949208995117099|90956002";
//
//$(document).ready(function () {
//  resetForm();
//  $("#rollNo").focus();
//});
//
//function saveRecNo2LS(jsonObj) {
//  var lvData = JSON.parse(jsonObj.data);
//  localStorage.setItem("recno", lvData.rec_no);
//}
//
//function getRollNoAsJsonObj() {
//  var rollNo = $("#rollNo").val();
//  var jsonStr = { id: rollNo };
//  return JSON.stringify(jsonStr);
//}
//
//function fillData(jsonObj) {
//  saveRecNo2LS(jsonObj);
//  var record = JSON.parse(jsonObj.data).record;
//  $("#fullName").val(record.name);
//  $("#stuClass").val(record.class);
//  $("#birthDate").val(record.birth);
//  $("#address").val(record.address);
//  $("#enrollDate").val(record.enroll);
//}
//
//function resetForm() {
//  $("#rollNo").val("");
//  $("#fullName").val("");
//  $("#stuClass").val("");
//  $("#birthDate").val("");
//  $("#address").val("");
//  $("#enrollDate").val("");
//
//  $("#rollNo").prop("disabled", false);
//  $("#saveBtn").prop("disabled", true);
//  $("#updateBtn").prop("disabled", true);
//  $("#resetBtn").prop("disabled", true);
//
//  $("#fullName, #stuClass, #birthDate, #address, #enrollDate").prop("disabled", true);
//  $("#rollNo").focus();
//}
//
//function validateData() {
//  var rollNo = $("#rollNo").val();
//  var name = $("#fullName").val();
//  var stuClass = $("#stuClass").val();
//  var birth = $("#birthDate").val();
//  var address = $("#address").val();
//  var enroll = $("#enrollDate").val();
//
//  if (rollNo === "") {
//    alert("Roll No. is missing");
//    $("#rollNo").focus();
//    return "";
//  }
//  if (name === "") {
//    alert("Full Name is missing");
//    $("#fullName").focus();
//    return "";
//  }
//  if (stuClass === "") {
//    alert("Class is missing");
//    $("#stuClass").focus();
//    return "";
//  }
//  if (birth === "") {
//    alert("Birth Date is missing");
//    $("#birthDate").focus();
//    return "";
//  }
//  if (address === "") {
//    alert("Address is missing");
//    $("#address").focus();
//    return "";
//  }
//  if (enroll === "") {
//    alert("Enrollment Date is missing");
//    $("#enrollDate").focus();
//    return "";
//  }
//
//  var jsonStrObj = {
//    id: rollNo,
//    name: name,
//    class: stuClass,
//    birth: birth,
//    address: address,
//    enroll: enroll
//  };
//  return JSON.stringify(jsonStrObj);
//}
//
//function getStudent() {
//  var rollJson = getRollNoAsJsonObj();
//  var getRequest = createGET_BY_KEYRequest(connToken, dbName, relName, rollJson);
//  jQuery.ajaxSetup({ async: false });
//  var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
//  jQuery.ajaxSetup({ async: true });
//
//  if (resJsonObj.status === 400) {
//    $("#saveBtn").prop("disabled", false);
//    $("#resetBtn").prop("disabled", false);
//    $("#fullName, #stuClass, #birthDate, #address, #enrollDate").prop("disabled", false);
//    $("#fullName").focus();
//  } else if (resJsonObj.status === 200) {
//    $("#rollNo").prop("disabled", true);
//    fillData(resJsonObj);
//    $("#updateBtn").prop("disabled", false);
//    $("#resetBtn").prop("disabled", false);
//    $("#fullName, #stuClass, #birthDate, #address, #enrollDate").prop("disabled", false);
//    $("#fullName").focus();
//  }
//}
//
//function saveData() {
//  var jsonStrObj = validateData();
//  if (jsonStrObj === "") return;
//
//  var putRequest = createPUTRequest(connToken, jsonStrObj, dbName, relName);
//  jQuery.ajaxSetup({ async: false });
//  var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
//  jQuery.ajaxSetup({ async: true });
//  resetForm();
//  $("#rollNo").focus();
//}
//
//function updateData() {
//  $("#updateBtn").prop("disabled", true);
//  var jsonUpd = validateData();
//  if (jsonUpd === "") return;
//
//  var updateRequest = createUPDATERecordRequest(connToken, jsonUpd, dbName, relName, localStorage.getItem("recno"));
//  jQuery.ajaxSetup({ async: false });
//  var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
//  jQuery.ajaxSetup({ async: true });
//  resetForm();
//  $("#rollNo").focus();
//}
//
//


var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var empdbName = "Student-DB";
var emprelName = "stuData";
var connToken = "90934781|-31949208995117099|90956002";

$("#empid").focus();

function saveRecNo2LS(jsonObj) {
  var lvData = JSON.parse(jsonObj.data);
  localStorage.setItem("recno", lvData.rec_no);
}

function getEmpIdAsJsonObj() {
  var empid = $("#empid").val();
  var jsonStr = {
    id: empid
  };
  return JSON.stringify(jsonStr);
}

function fillData(jsonObj) {
  saveRecNo2LS(jsonObj);
  var record = JSON.parse(jsonObj.data).record;
  $("#empname").val(record.name);
  $("#empsal").val(record.salary);
  $("#hra").val(record.hra);
  $("#da").val(record.da);
  $("#deduct").val(record.deduction);
}

function resetForm() {
  $("#empid").val("");
  $("#empname").val("");
  $("#empsal").val("");
  $("#hra").val("");
  $("#da").val("");
  $("#deduct").val("");
  $("#empid").prop("disabled", false);
  $("#save").prop("disabled", true);
  $("#change").prop("disabled", true);
  $("#reset").prop("disabled", true);
  $("#empid").focus();
}

function validateData() {
  var empid, empname, empsal, hra, da, deduct;
  empid = $("#empid").val();
  empname = $("#empname").val();
  empsal = $("#empsal").val();
  hra = $("#hra").val();
  da = $("#da").val();
  deduct = $("#deduct").val();

  if (empid === "") {
    alert('roll no missing');
    $("#empid").focus();
    return "";
  }
  if (empname === "") {
    alert('Student name missing');
    $("#empname").focus();
    return "";
  }
  if (empsal === "") {
    alert('Class missing');
    $("#empsal").focus();
    return "";
  }
  if (hra === "") {
    alert('Birth date missing');
    $("#hra").focus();
    return "";
  }
  if (da === "") {
    alert('adress missing');
    $("#da").focus();
    return "";
  }
  if (deduct === "") {
    alert('Enrollment no missing');
    $("#deduct").focus();
    return "";
  }
  var jsonStrObj = {
    id: empid,
    name: empname,
    salary: empsal,
    hra: hra,
    da: da,
    deduction: deduct
  };
  return JSON.stringify(jsonStrObj);
}

function getEmp() {
  var empIdJsonObj = getEmpIdAsJsonObj();
  var getRequest = createGET_BY_KEYRequest(connToken, empdbName, emprelName, empIdJsonObj);
  jQuery.ajaxSetup({ async: false });
  var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
  jQuery.ajaxSetup({ async: true });
  if (resJsonObj.status === 400) {
    $("#save").prop("disabled", false);
    $("#reset").prop("disabled", false);
    $("#empname").focus();
  } else if (resJsonObj.status === 200) {
    $("#empid").prop("disabled", true);
    fillData(resJsonObj);
    $("#change").prop("disabled", false);
    $("#reset").prop("disabled", false);
    $("#empname").focus();
  }
}

function saveData() {
  var jsonStrObj = validateData();
  if (jsonStrObj === "") {
    return;
  }
  var putRequest = createPUTRequest(connToken, jsonStrObj, empdbName, emprelName);
  jQuery.ajaxSetup({ async: false });
  var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
  jQuery.ajaxSetup({ async: true });
  resetForm();
  $("#empid").focus();
}

function changeData() {
  $("#change").prop("disabled", true);
  var jsonChg = validateData();
  var updateRequest = createUPDATERecordRequest(connToken, jsonChg, empdbName, emprelName, localStorage.getItem("recno"));
  jQuery.ajaxSetup({ async: false });
  var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
  jQuery.ajaxSetup({ async: true });
  resetForm();
  $("#empid").focus();
}
