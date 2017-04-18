// Here is the script example using Array

var Employees = [];

Employees.push({Name:'Sanjay Patel', Age:35, Salary:'7.5 LPA', City:'Pune', State:'Maharashtra', Pincode:423203});
Employees.push({Name:'Abhishek Kalantri', Age:32, Salary:'8.5 LPA', City:'Mumbai', State:'Maharashtra', Pincode:420002});
Employees.push({Name:'Akash Sharma', Age:33, Salary:'6.5 LPA', City:'Banglore', State:'Karnataka', Pincode:350087});
Employees.push({Name:'Rahul Bhansali', Age:31, Salary:'6.75 LPA', City:'Ahmedabad', State:'Gujarat', Pincode:422879});
Employees.push({Name:'Rajesh Rathod', Age:34, Salary:'8.0 LPA', City:'Hyderabad', State:'Andhra Pradesh', Pincode:324056});

for(var emp in Employees)
    {
    	console.log(Employees[emp].Name + ':' + Employees[emp].Age + ':' + Employees[emp].Salary + ':' + Employees[emp].City + ':'
    	 + Employees[emp].State + ':' + Employees[emp].Pincode);
    }
