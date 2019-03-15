$(document).ready(function () {
    var names = [];
    $(".delete").click(function (e) {
        e.preventDefault();
        var id = $(this).parent().parent().attr('id');
        // To do code delete data. 
        names.push(id); 

        $("#delete-success").click(function (e) {
            e.preventDefault();
            onClickDelete(names);
        });
    });


    $("#butDel").click(function () {
        $("#delete-success").click(function (e) {
            e.preventDefault();
            names = [];
            onClickDelete(names);
        });
    })

})



function onClickDelete(names) {
    $('#contenst-table input:checked').each(function () {
        var id = $(this).parent().parent().parent().attr('id');
        names.push(id);
    });
    var sal = [], time = [], qualification = [], work = [], contact = [];
    for (var i = 0; i < names.length; i++) {
        for (var j = 0; j < Employee.length; j++) {
            if (Employee[j][0].employeeID == names[i]) {
                if (Employee[j][2].length >= 1) {
                    sal.push(Employee[j][2]);
                }
                if (Employee[j][5].length >= 1) {
                    time.push(Employee[j][5]);
                }
                if (Employee[j][4].length >= 1) {
                    qualification.push(Employee[j][4]);
                }
                if (Employee[j][3].length >= 1) {
                    work.push(Employee[j][3]);
                }
                if (Employee[j][1].length >= 1) {
                    contact.push(Employee[j][1]);
                }
            }
        }
    }
    // delete handling. 
    for (var x = 0; x < sal.length; x++) {
        for (var y = 0; y < sal[x].length; y++) {
            console.log(sal[x][y].idSalaryInfo);
            $.ajax({
                url: "http://localhost:57824/api/salaryinfoes/" + (sal[x][y].idSalaryInfo),
                type: 'DELETE',
                async: false
            });
        }
    }

    for (var x = 0; x < contact.length; x++) {
        for (var y = 0; y < contact[x].length; y++) {
            $.ajax({
                url: "http://localhost:57824/api/contactemployeeinfoes/" + (contact[x][y].idContact),
                type: 'DELETE',
                async: false
            });
        }
    }

    for (var x = 0; x < time.length; x++) {
        for (var y = 0; y < time[x].length; y++) {
            $.ajax({
                url: "http://localhost:57824/api/timeinfoes/" + (time[x][y].idTime),
                type: 'DELETE',
                async: false
            });
        }
    }

    for (var x = 0; x < qualification.length; x++) {
        for (var y = 0; y < qualification[x].length; y++) {
            $.ajax({
                url: "http://localhost:57824/api/qualifications/" + (qualification[x][y].idQualification),
                type: 'DELETE',
                async: false
            });
        }
    }

    for (var x = 0; x < work.length; x++) {
        for (var y = 0; y < work[x].length; y++) {
            $.ajax({
                url: "http://localhost:57824/api/workhistories/" + (work[x][y].idWorkHistory),
                type: 'DELETE',
                async: false
            });
        }
    }

    for (var x = 0; x < names.length; x++) {
        $.ajax({
            url: "http://localhost:57824/api/employeedetails/" + (names[x]),
            type: 'DELETE',
            async: false
        });
    }
    location.reload();
}

// delete table element 

function deleteContactfun(i) {
    $.ajax({
        url: "http://localhost:57824/api/contactemployeeinfoes/" + idGenaral[1][i],
        type: 'DELETE',
        async: false
    });
    location.reload();
}
