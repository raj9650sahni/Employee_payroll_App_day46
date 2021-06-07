
let empPayrollList;
window.addEventListener("DOMContentLoaded", (event) => {
    empPayrollList = getEmployeeFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp')

});

const getEmployeeFromStorage = () => {
    return localStorage.getItem("EmployeeList") ? JSON.parse(localStorage.getItem("EmployeeList")) : [];
};

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";

    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    console.log(empPayrollList);
    for (const empPayrollData of empPayrollList) {
        console.log(empPayrollData);
        innerHtml = `${innerHtml}
        
    
  
        <tr>
            <td> <img src="${empPayrollData._profilePic}" class="profile" alt=""></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td> <div class="dept-label">${empPayrollData._department[0]}</div>
                <div class="dept-label">${empPayrollData._department[1]}</div></td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img name = "${empPayrollData._id}"  src="..//assets/icons/delete-black-18dp.svg"  alt="delete" onclick="remove(this)">
                <img name = "${empPayrollData._id}" src="..//assets/icons/create-black-18dp.svg"  alt="edit" onclick="update(this)">
            </td>
        </tr>
        `;
    }
        document.querySelector('#table-display').innerHTML = innerHtml;


    }


    const createEmployeePayrollJSON = () => {
        let empPayrollListLocal = [
            {
                _name: 'Raj Sahni',
                _gender: 'male',
                _department: [
                    'Engineering', 'Finance'
                ],
                _salary: '500000',
                _startDate: '29 oct 2019',
                _note: '',
                _id: new Date().getTime(),
                _profilePic: '..//assets/profile-images/Ellipse -2.png'
            },
            {
                _name: 'Amit Verma',
                _gender: 'female',
                _department: [
                    'sales'
                ],
                _salary: '400000',
                _startDate: '29 oct 2019',
                _note: '',
                _id: new Date().getTime() + 1,
                _profilePic: '..//assets/profile-images/Ellipse -1.png'


            }
        ];
        return empPayrollListLocal;
    }

    const getHTMLDepartment = (deptList) => {
        let deptHTML = ''
        for (const dept of deptList) {
            deptHTML = `${deptHTML} <div class="dept-label">${dept}</div>`
        }
        return deptHTML;
    }

