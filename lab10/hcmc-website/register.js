
class Patient {
    constructor(id, firstName, middleName, lastName, dob, department, isOutpatient) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.dob = dob;
        this.department = department;
        this.isOutpatient = isOutpatient;
    }
}

let patients = [];
patients.push(new Patient(
    "EP-001-000001",
    "Ana",
    "J",
    "Smish",
    "1945-01-05",
    "Ear, Nose and Throat",
    "No"
))

patients.push(new Patient(
    "P-001-000002",
    "Bob",
    "K",
    "Jones",
    "1985-05-04",
    "Cardiology",
    "Yes"
))

patients.push(new Patient(
    "EP-001-000003",
    "Carlos",
    "A",
    "Hernandez",
    "1957-03-13",
    "Cardiology",
    "Yes"
))


function createTable() {
    let tableBody = document.getElementById("tbodyPatientsList");
    tableBody.innerHTML = '';

    patients.map(p => createRow(p))
        .forEach(element => {
            tableBody.appendChild(element);
        });
}

createTable()

document.getElementById("btnRegisterPatient").addEventListener("click", function (event) {
    event.preventDefault();

    let formCollection = document.getElementsByTagName("form");
    for (let index = 0; index < formCollection.length; index++) {
        const element = formCollection[index];
        if (!element.checkValidity()) {
            element.reportValidity();
            return;
        }
    }

    let patient = createPatient();
    if (patient) {
        console.log(patient);
        patients.push(patient);
        createTable();
    }
})

function createPatient() {
    let idElement = document.getElementById("patientIdNumber");
    let firstName = document.getElementById("firstName");
    let middleName = document.getElementById("middleInitials");
    let lastName = document.getElementById("lastName");
    let dob = document.getElementById("dateOfBirth");
    let department = document.getElementById("ddlDepartment");
    let radioIsOutPatientYes = document.getElementById("radioIsOutPatientYes");
    let radioIsOutPatientNo = document.getElementById("radioIsOutPatientNo");

    let outpatient = radioIsOutPatientYes.checked ? radioIsOutPatientYes.value : radioIsOutPatientNo.value
    let patient = new Patient(
        idElement.value,
        firstName.value,
        middleName.value,
        lastName.value,
        dob.value,
        department.value,
        outpatient
    )
    return patient;
}

function createRow(p) {
    let tr = document.createElement("tr")
    tr.classList.add("patient-row")
    for (let key in p) {
        let td = document.createElement("td")
        td.innerText = p[key];
        tr.appendChild(td)
    }
    return tr;
}


// b and c
document.getElementById("chkShowOutPatients").addEventListener("change", filterTable);
document.getElementById("chkElderlyPatients").addEventListener("change", filterTable);

function filterTable() {
    let rows = document.getElementsByClassName("patient-row");
    let filterArray = createFilterMap();
    for (let i = 0; i < rows.length; i++) {
        if (!filterArray[i]) {
            rows[i].classList.add("d-none")
        } else {
            rows[i].classList.remove("d-none")
        }
    }

}

function createFilterMap() {
    let outPatient = document.getElementById("chkShowOutPatients").checked;
    let elderlyPatient = document.getElementById("chkElderlyPatients").checked;
    if (!outPatient && !elderlyPatient) {
        return patients.map(e => true)
    }
    return patients.map(e => {
        if (outPatient && e.isOutpatient == "No") {
            return false;
        }
        let dateOfBirth = new Date(e.dob);
        if (elderlyPatient && (Date.now() - dateOfBirth.getTime()) < 65 * 365 * 24 * 3600 * 1000) {
            return false;
        }
        return true;
    })
}
