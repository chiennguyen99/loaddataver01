$(document).ready(function () {
    loaddata(); 
    selectallchange(); 
    checkitemchange(); 
});

function loaddata(){
    for (var i = 0; i < Employee.length; i++) {

        var id = Employee[i][0].employeeID; 
        var name = Employee[i][0].firstName + " " + Employee[i][0].lastName; 
        var phone = "NULL"; 
        var qualification = "NULL"; 
        if ( Employee[i][4][0] != null ){
            qualification = Employee[i][4][0].experience; 
        }

        if (Employee[i][1][0] != null){
            phone = Employee[i][1][0].phoneNumber; 
        }

        var str = `
                <tr id = "` + id + `">
                    <td>
                    <span class="custom-checkbox" id="checkboxIndex">
                        <input type="checkbox" class="checkitem">
                        <label></label>
                    </span>
                    </td>
                    <td>` + id + `</td>
                    <td>` + name + `</td>
                    <td>` + qualification + `</td>
                    <td>` + phone + `</td>
                    <td>
                    <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i
                        class="fas fa-user-minus"></i></a>
                    <a data-toggle="modal" class="btn-eye"><i class="fas fa-eye"></i></a>
                    </td>
                </tr>
        `;
        $("#contenst-table").append(str);
    }
}