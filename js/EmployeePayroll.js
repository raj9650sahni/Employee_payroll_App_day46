class EmployeePayrollData {


    get name() {return this._name;}
    set name(name) {
            let regName = RegExp("^[A-Z]{1}[a-z]{2,}$");
            if(regName.test(name))
                this._name = name;
            else throw "Name is Incorrect";
        }
   

    get salary() {return this._salary;}
    set salary(salary){
        this._salary=salary;
    }

    get gender() {return this._gender;}
    set gender(gender) { this._gender = gender;}

    get StartDate() {return this._StartDate;}
    set StartDate(startDate) { this._startDate = startDate;}


    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    
    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    get notes() {
        return this._notes;
    }

    set notes(notes) {
        this._notes = notes;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name + ", gender = " + this.gender + ", profilePic profilePic = " + this.profilePic + ", department = " + this.department + ", salary = " + this.salary + ", startDate = " + empDate + ", note = " + this.notes;
    }
}
