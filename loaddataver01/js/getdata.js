var dbEmployeeDetail = []; 
var dbEmployeeContact = []; 
var dbEmployeeSalary = []; 
var dbEmployeeWorkHistory = []; 
var dbEmployeeQualification = [];
var dbEmployeeTimeInfo = []; 

$(document).ready(function () {
    $.ajax({
        type: "GET",
        dataType: "json",
        async: false, 
        url: "http://localhost:57824/api/employeedetails",
        success: function (data) {
            dbEmployeeDetail = data;
        }
    });

    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url: "http://localhost:57824/api/contactemployeeinfoes",
        success: function (data) {
            dbEmployeeContact = data;
        }
    });

    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url: "http://localhost:57824/api/salaryinfoes",
        success: function (data) {
            dbEmployeeSalary = data;
        }
    });

    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url: "http://localhost:57824/api/workhistories",
        success: function (data) {
            dbEmployeeWorkHistory = data;
        }
    });

    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url: "http://localhost:57824/api/qualifications",
        success: function (data) {
            dbEmployeeQualification = data;
        }
    });

    $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url: "http://localhost:57824/api/timeinfoes",
        success: function (data) {
            dbEmployeeTimeInfo = data;
        }
    });

})